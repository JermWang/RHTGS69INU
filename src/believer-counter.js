import{createClient}from'@supabase/supabase-js';

const url=import.meta.env.VITE_SUPABASE_URL;
const key=import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase=url&&key?createClient(url,key,{
 auth:{persistSession:false,autoRefreshToken:false,detectSessionInUrl:false},
 realtime:{params:{eventsPerSecond:2}}
}):null;

function believerId(){
 const storageKey='rhtg69i_believer_id';
 try{
  const saved=localStorage.getItem(storageKey);
  if(saved)return saved;
  const id=crypto.randomUUID();
  localStorage.setItem(storageKey,id);
  return id;
 }catch{
  return crypto.randomUUID();
 }
}

export async function joinBelieverMainframe(onUpdate){
 if(!supabase){
  onUpdate({status:'unconfigured',total:null,online:null});
  return()=>{};
 }

 const id=believerId();
 let disposed=false;
 onUpdate({status:'connecting',total:null,online:null});

 const{data,error}=await supabase.rpc('register_believer',{p_believer_id:id});
 if(disposed)return()=>{};
 if(error){
  console.error('Believer registry refused the prophecy:',error.message);
  onUpdate({status:'error',total:null,online:null});
  return()=>{};
 }

 let total=Number(data?.total??data??0);
 onUpdate({status:'live',total,online:1});

 const channel=supabase.channel('rhtg69i-believers',{config:{presence:{key:id}}});
 const sync=()=>{
  const online=Object.keys(channel.presenceState()).length;
  if(!disposed)onUpdate({status:'live',total,online:Math.max(online,1)});
 };

 channel
  .on('presence',{event:'sync'},sync)
  .on('presence',{event:'join'},sync)
  .on('presence',{event:'leave'},sync)
  .on('broadcast',{event:'believer-total'},({payload})=>{
   total=Number(payload?.total??total);
   sync();
  })
  .subscribe(async status=>{
   if(status==='SUBSCRIBED'){
    await channel.track({believing_since:new Date().toISOString()});
    await channel.send({type:'broadcast',event:'believer-total',payload:{total}});
   }
   if(status==='CHANNEL_ERROR'&&!disposed)onUpdate({status:'error',total,online:null});
  });

 return()=>{
  disposed=true;
  channel.untrack().catch(()=>{});
  supabase.removeChannel(channel);
 };
}
