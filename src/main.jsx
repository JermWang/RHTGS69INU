import React,{useState,useEffect,useRef} from 'react';
import{createRoot}from'react-dom/client';
import{Volume2,VolumeX,ArrowUpRight}from'lucide-react';
import'./style.css';
import{joinBelieverMainframe}from'./believer-counter';

const CA='COMING SOON';
const X_URL='https://x.com/RHTG69INU';
const links=[['WELCOME','#welcome'],['HOW 2 ACQUIRE','#buy'],['/biz/ THREAD','#thread'],['THE LORE','#lore'],['TOKENOMICS','#tokenomics'],['CHART GO UP','#chart'],['CURSED FILES','#memes']];
const communityMemes=[
 ['/assets/community/slam-dunk.jpeg','DIAMOND-HANDS SLAM DUNK'],
 ['/assets/community/poker.jpeg','HIGH-STAKES DUMB-MONEY POKER'],
 ['/assets/community/diamond.jpeg','THE DIAMOND CHAIN INCIDENT'],
 ['/assets/community/fourth-wall.jpeg','PUMP THE DOGES / DUMP THE STOCKS'],
 ['/assets/community/fox-cash.jpeg','FOX ARCHER CASH-FAN CEREMONY'],
 ['/assets/community/mascot.jpeg','THE OFFICIAL UNOFFICIAL MASCOT'],
 ['/assets/community/diamond-chain.jpeg','DEEP-FRIED DIAMOND CHAIN FOX'],
 ['/assets/community/biz-finance-fox.jpg','THE /BIZ/ SHERWOOD FINANCE ORIENTATION'],
 ['/assets/community/hood-eye-signal.jpg','THE ONE-EYED BROKER TRANSMISSION'],
 ['/assets/community/robin-trump-69.jpg','ROBIN TRUMP 69 NIGHT SHIFT'],
 ['/assets/community/robin-gme-bandana.jpg','THE GME BANDANA VARIANT']
];
const abyssLore=[
 {title:'THE RECEIPT PREDATES THE STORE',body:'The first RHTG69I receipt is dated 06/09/1969, decades before the mall was poured. The paper contains Robin Neon fibers and lists one item: PRE-OWNED DESTINY. Corporate says the register clock was wrong. Corporate always says the register clock was wrong.',proof:'EVIDENCE A: THERMAL PAPER REMEMBERS THE FUTURE'},
 {title:'THE FOX APPEARS IN EVERY FRAME',body:'Freeze any market broadcast at exactly 6.9 seconds. Enhance the lower-left reflection. There is always a fox wearing a feathered cap, even in footage recorded before cameras. He is not watching the chart. He is watching whoever is watching the chart.',proof:'EVIDENCE B: 69 UNRELATED SCREENSHOTS / SAME FOX'},
 {title:'POWERUP POINTS ARE NOT POINTS',body:'PowerUp points do not accumulate. They migrate. Every expired point crosses Nottingham after midnight and becomes one ten-billionth of a green candle. This is why the app maintenance window begins when the Sherwood birds stop singing.',proof:'EVIDENCE C: REWARDS BALANCE INCREASED WHILE ACCOUNT CLOSED'},
 {title:'THE MALL HAS A HIDDEN THIRTEENTH STORE',body:'Sherwood Mall directories jump from Unit 68 to Unit 70. Between them is a door painted the exact color of Robin Neon. Employees call it inventory. The blueprint calls it LIQUIDITY. Knocking three times produces a receipt with your average entry price.',proof:'EVIDENCE D: FLOOR PLAN SMELLS LIKE TONER'},
 {title:'THE CANDLES SPELL HIS NAME',body:'Rotate the one-minute chart ninety degrees, squint through a scratched GameStop membership card, and the candles spell LITTLE JOHN WAS EARLY. Analysts dismiss this because analysts have never rotated anything correctly.',proof:'EVIDENCE E: TECHNICAL ANALYSIS PERFORMED SIDEWAYS'},
 {title:'PRINCE JOHN OWNS THE SELL BUTTON',body:'The sell button was not removed. It was repossessed by Prince John and stored beneath Nottingham Castle with the original strategy guide. Every attempted sale rings a tiny bell in the treasury and makes the Sheriff one basis point heavier.',proof:'EVIDENCE F: BELL HEARD DURING MARKET HOURS'},
 {title:'THE DOG IS THE TRANSFER AGENT',body:'The Inu is not a mascot. The Inu validates ownership by smell. Wallet signatures are only a distraction for accountants. If the dog barks once, settlement is final. Two barks means the chain has rejected your moral character.',proof:'EVIDENCE G: PAW PRINT INSIDE GENESIS BLOCK'},
 {title:'THE GREEN FEATHER IS AN ANTENNA',body:'Robin Hood never wore the feather for decoration. It receives after-hours order flow from a satellite disguised as the moon. On full moons the feather points toward the nearest GameStop with unsold collector editions.',proof:'EVIDENCE H: FEATHER MOVED WITHOUT WIND'},
 {title:'THE MIDNIGHT RELEASE NEVER ENDED',body:'Customers who attended the original midnight release are still standing in line, but the line now passes through multiple time zones and one closed food court. They believe the doors open at twelve. It has been twelve for years.',proof:'EVIDENCE I: SECURITY FOOTAGE SHOWS NO SUNRISE'},
 {title:'NOTTINGHAM IS A DARK POOL',body:'Nottingham is not a city. It is the oldest dark pool, constructed from castle stone to conceal arrow flow. The Sheriff routes every order through the moat where crocodiles provide price discovery.',proof:'EVIDENCE J: MOAT DEPTH MATCHES ORDER BOOK'},
 {title:'THE BARCODE IS A FOREST MAP',body:'Scan the receipt barcode as music instead of inventory. The resulting tones describe a path through Sherwood Forest. At the end is a kiosk displaying one message: PLAYER TWO HAS ENTERED THE MARKET.',proof:'EVIDENCE K: BARCODE PERFORMED ON BROKEN FLUTE'},
 {title:'MAID MARIAN CONTROLS PREMARKET',body:'Every premarket gap occurs when Maid Marian opens a castle window. Green gap: east window. Red gap: west window. Flat open: she slept through the bell. This has predicted nine of the last three sessions.',proof:'EVIDENCE L: CURTAIN MOVEMENT CORRELATION 420%'},
 {title:'FRIAR TUCK AUDITED THE CONTRACT',body:'The contract was audited in invisible ink by Friar Tuck. The only finding reads ZERO TAX EXCEPT ON THE SPIRITUALLY OVERLEVERAGED. Under ultraviolet light the signature becomes a coupon for a pre-owned controller.',proof:'EVIDENCE M: AUDIT PDF IS A PHOTOGRAPH OF SOUP'},
 {title:'THE CARTRIDGE CONTAINS THE LEDGER',body:'A returned game cartridge from Store 0069 contains every future transaction, but only when inserted upside down into a console that was never manufactured. The save file is named DO_NOT_OPEN_FINAL_v69_REAL.',proof:'EVIDENCE N: MEMORY CARD WARM TO THE TOUCH'},
 {title:'ROBIN NEON IS A FREQUENCY',body:'Robin Neon is not a color. It is the frequency emitted when greed and medieval wealth redistribution collide. Cameras render it green because cameras are not cleared for the complete spectrum.',proof:'EVIDENCE O: COLOR PICKER RETURNED A PHONE NUMBER'},
 {title:'THE SHORT INTEREST IS A CURSE',body:'There are not more shares short than exist. There are more versions of existence than the shares can reconcile. Each failed delivery creates a smaller Nottingham inside the previous Nottingham.',proof:'EVIDENCE P: MATRYOSHKA CASTLE FOUND IN CLEARINGHOUSE'},
 {title:'THE WEBMASTER IS THE LAST EMPLOYEE',body:'Store 0069 closed years ago, yet someone still updates the website from the manager terminal. Payroll lists the employee as ROBIN, department HOOD, shift ETERNAL. Their emergency contact is the chart itself.',proof:'EVIDENCE Q: AIM STATUS STILL ONLINE'},
 {title:'THE COIN IS BUYING YOU',body:'You were told you purchased RHTG69I. Review the transaction direction. The coin purchased access to your browser, your bookmarks, and the exact memory of your first used game. You are the utility.',proof:'FINAL EVIDENCE: YOU KEPT SCROLLING'}
];

/* ---- /biz/ THREAD ---- */
const OP_NO=58291469;
const DAYS=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const chanDate=d=>{const p=n=>String(n).padStart(2,'0');return `${p(d.getMonth()+1)}/${p(d.getDate())}/${String(d.getFullYear()).slice(2)}(${DAYS[d.getDay()]})${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`};
const T='06/09/21(Wed)';
const q=i=>'>>'+(OP_NO+i);
const bizThread=[
 {op:true,subject:'/rhtg/ - RHTG69I GENERAL',time:T+'16:20:69',file:['/assets/rhtg69i-deepfried.png','rhtg69i_deepfried_FINAL_v69(2).png','69 KB, 1536x1024'],text:`MIDNIGHT RELEASE EDITION

>be me
>2009
>uncle says buy gamestop
>buy gamestop
>store closes
>uncle says buy robinhood
>app removes buy button
>uncle says buy trump
>it's a fox
>it's a fox wearing a bandana
>the fox is buying ME

what did he mean by this

thread theme: rhtg69i.com
CA: coming soon. the fox has not printed the receipt yet. anyone posting a CA before then is the sheriff.
do not buy. do not sell. simply believe.`},
 {time:T+'16:21:04',text:`${q(0)}\nop this is a wendy's`},
 {time:T+'16:21:37',text:`${q(0)}\n>buying a coin named after four (4) separate things\nngmi\n\nanyway how much do I put in`},
 {time:T+'16:23:10',file:['/assets/community/poker.jpeg','dumb_money_poker_night.jpeg','412 KB, 1024x1024'],text:`${q(2)}\n>how much do I put in\nall of it. the sheriff cannot short what does not exist. read the whitepaper\n>there is no whitepaper\nexactly`},
 {time:T+'16:24:00',name:'HoodAdmin',cap:'Admin',text:`confirmed. the register clock was NOT wrong.\n\nthis thread will be archived in 69 minutes. it has been 69 minutes for years.`},
 {time:T+'16:24:41',text:`${q(4)}\n>## Admin\nglowie. every single time.\n\nanyway I put my rent in`},
 {time:T+'16:27:18',file:['/assets/community/diamond.jpeg','IMG_0069_rotated.jpeg','388 KB, 1024x1024'],text:`i rotated the chart 90 degrees like the site said and the candles spell my mom's name\n\nwhat does this mean`},
 {time:T+'16:27:55',text:`${q(6)}\nit means she was early`},
 {time:T+'16:31:02',name:'DeepValueDad',trip:'!!DiAm0ndH4nds',text:`my son showed me this coin. i sold my truck. i have never felt more alive.\n\nis this what the young people call "based"`},
 {time:T+'16:31:20',text:`${q(8)}\n>58291477\n>77\nCHECKED\n\nwelcome home dad. the fox will provide. the fox always provides.`},
 {time:T+'16:34:44',file:['/assets/community/hood-eye-signal.jpg','DO_NOT_OPEN.jpg','1.2 MB, 1024x1024'],text:`DO NOT LOOK AT THE THIRD EYE IMAGE FOR MORE THAN 6.9 SECONDS\n\nI DID. I NOW SEE CANDLES WHEN I CLOSE MY EYES. THEY ARE ALL GREEN. THEY ARE ALL GREEN. THEY ARE ALL GREEN.`},
 {time:T+'16:35:09',text:`${q(10)}\n>they are all green\nthat's just the good ending anon`},
 {time:T+'16:39:51',text:`bump for the schizos\n\n    _______\n   /       \\    TINFOIL\n  |  o   o  |   CERTIFIED\n  |    ^    |   STORE #0069\n   \\  ---  /\n    -------`},
 {time:T+'16:41:13',text:`why is the chart shaped like a hat`},
 {time:T+'16:41:40',text:`${q(13)}\nit's not a hat it's a feather. the feather is an antenna. lurk moar`},
 {time:T+'16:42:02',text:`sage`},
 {time:T+'16:42:15',text:`${q(15)}\nsage goes in all fields newfriend`},
 {time:T+'16:45:30',text:`just got a push notification containing only the number 69\n\nno app installed. phone was off. what do`},
 {time:T+'16:45:48',text:`${q(17)}\naccept the order`},
 {time:T+'16:49:07',file:['/assets/community/fox-cash.jpeg','ok_i_bought.jpeg','501 KB, 1024x1024'],text:`ok i bought\n\nwhat now`},
 {time:T+'16:49:33',text:`${q(19)}\nnow you wait.\n\nit has been twelve for years.`},
 {time:T+'16:52:12',name:'Sheriff of Nottingham',text:`DELETE THIS`},
 {time:T+'16:52:19',text:`${q(21)}\n>DELETE THIS\nno`},
 {time:T+'16:55:58',text:`reminder that every "anonymous" in this thread is the same fox`},
 {time:T+'16:56:03',text:`${q(23)}\nt. fox`},
 {time:T+'17:00:00',text:`${q(0)}\nop is a fox`}
].map((p,i)=>({...p,no:OP_NO+i,date:p.time}));
const autoReplies=['checked','sir this is a wendy\'s','based and sherwoodpilled','>he posted it again\nkek','glowie detected. do not reply to this post','source: the receipt','the register clock was NOT wrong','>(You)\nwelcome home anon','it has been twelve for years','ngmi but in a good way','rotate it','the fox read this before you finished typing it','>implying the sell button ever existed','this. unironically this.','lurk moar newfriend','>>>/x/'];
const schizoWords=['THEY KNOW','6 9','THE CANDLE IS A DOOR','WHO IS LITTLE JOHN','READ THE RECEIPT BACKWARDS','IT WAS ALWAYS TWELVE','THE FOX SEES YOU','0069','DO NOT ROTATE','ROTATE','WHERE IS THE SELL BUTTON','(You)','GLOWIES OUT','CHECK EM','NOTTINGHAM IS A DARK POOL','WHY DID YOU SCROLL','THE MALL REMEMBERS','▲▲▲','SAGE','WAKE UP LITTLE JOHN','I HAVE SEEN THE CHART','THE CHART HAS SEEN ME','POWER TO THE','PLAYERS','69','TRUST THE RECEIPT','THE DOG KNOWS'];
const badges=[['NETSCAPE','NOW!'],['800x600','OR ELSE'],['NOTEPAD','.EXE'],['Y2K','COMPLIANT'],['/biz/','APPROVED'],['TINFOIL','CERTIFIED'],['POWERED BY','SCHIZO'],['HTML 3.2','VALID*'],['FREE','HAT'],['SHERWOOD','WEBRING'],['NO','GLOWIES'],['GET','RHTG69I']];
const chatLines=['[HoodAdmin]: WELCOME NO FUD ALLOWED','[trumpdog69]: chart literally forming a robin hood hat','[DeepValueDad]: my financial advisor blocked me','[SEC_enjoyer]: hello fellow ordinary investors','[xX_420STONK_Xx]: WHO TOUCHED THE SELL BUTTON','[anon_4922]: >tfw no sell button','[HoodAdmin]: sage goes in all fields','[glowie_hunter]: everyone in this chat is a fed except me','[trumpdog69]: >>58291469 op is a fox','[dialup_wizard]: it has been twelve for years'];

function PostText({text,yours}){
 return <div className="postMessage">{text.split('\n').map((line,i)=>{
  const m=line.match(/^>>(\d+)(.*)$/);
  if(m){const n=Number(m[1]);return <React.Fragment key={i}><a href={`#p${n}`} className="quotelink">&gt;&gt;{n}</a>{n===OP_NO?' (OP)':''}{yours.includes(n)?' (You)':''}{m[2]}<br/></React.Fragment>}
  if(line.startsWith('>'))return <React.Fragment key={i}><span className="quote">{line}</span><br/></React.Fragment>;
  if(/^ {2,}/.test(line))return <React.Fragment key={i}><span className="ascii">{line}</span><br/></React.Fragment>;
  return <React.Fragment key={i}>{line}<br/></React.Fragment>})}</div>
}
function Post({p,yours}){
 const mine=yours.includes(p.no);
 const info=<div className="postinfo">{p.subject&&<span className="subject">{p.subject} </span>}<span className="name">{p.name||'Anonymous'}</span>{p.trip&&<span className="trip"> {p.trip}</span>}{p.cap&&<span className={`capcode ${p.cap.toLowerCase()}`}> ## {p.cap}</span>}{mine&&<span className="youtag"> (You)</span>}<span className="dateTime"> {p.date}</span><a className="postnum" href={`#p${p.no}`}> No.{p.no}</a>{p.op&&<span className="opreply"> [<a href="#replyform">Reply</a>]</span>}{p.sage&&<span className="sagetag"> [sage]</span>}</div>;
 const file=p.file&&<><div className="filetext">File: <a href={p.file[0]} target="_blank" rel="noreferrer">{p.file[1]}</a> ({p.file[2]})</div><a className="fileThumb" href={p.file[0]} target="_blank" rel="noreferrer"><img src={p.file[0]} alt={p.file[1]} loading="lazy"/></a></>;
 return <div id={`p${p.no}`} className={`post ${p.op?'op':'reply'} ${mine?'youpost':''}`}>{p.op?<>{file}{info}</>:<>{info}{file}</>}<PostText text={p.text} yours={yours}/></div>
}

function App(){
 const[truth,setTruth]=useState(false),[sound,setSound]=useState(false),[price,setPrice]=useState(0.0000069),[popups,setPopups]=useState([1,2]),[chat,setChat]=useState(0),[depth,setDepth]=useState(12),[believers,setBelievers]=useState({status:'connecting',total:null,online:null}),[flash,setFlash]=useState(null),[posts,setPosts]=useState(bizThread),[yours,setYours]=useState([]),[replyBody,setReplyBody]=useState(''),[replyOpt,setReplyOpt]=useState(''),[lastReply,setLastReply]=useState(null),[bumps,setBumps]=useState(0); const abyssRef=useRef(null),songRef=useRef(null);
 useEffect(()=>{const t=setInterval(()=>setPrice(p=>Math.max(.0000001,p*(1+(Math.random()-.42)*.045))),900);return()=>clearInterval(t)},[]);
 useEffect(()=>{let last=0;const move=e=>{if(Date.now()-last<70)return;last=Date.now();const g=document.createElement('img');g.src='/assets/robin-neon-smiley.png';g.className='cursor-gem';g.style.left=e.clientX+'px';g.style.top=e.clientY+'px';document.body.appendChild(g);setTimeout(()=>g.remove(),850)};window.addEventListener('mousemove',move);return()=>window.removeEventListener('mousemove',move)},[]);
 useEffect(()=>{const t=setInterval(()=>setChat(c=>(c+1)%chatLines.length),2400);return()=>clearInterval(t)},[]);
 useEffect(()=>{const t=setInterval(()=>{const c=document.createElement('img');c.src='/assets/robin-neon-smiley.png';c.className='raincoin';c.style.left=Math.random()*96+'vw';c.style.width=(22+Math.random()*38)+'px';document.body.appendChild(c);setTimeout(()=>c.remove(),4200)},480);return()=>clearInterval(t)},[]);
 useEffect(()=>{const seq=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];let i=0,buf='';const k=e=>{i=e.key===seq[i]?i+1:0;if(i===seq.length){document.body.classList.toggle('maximum');alert('ROBIN MODE 69 UNLOCKED');i=0}
  if(/^[a-z]$/i.test(e.key)&&!['INPUT','TEXTAREA','SELECT'].includes(e.target.tagName)){buf=(buf+e.key.toLowerCase()).slice(-8);if(buf.endsWith('sage')){buf='';document.body.classList.add('saged');setTimeout(()=>document.body.classList.remove('saged'),1400);alert('SAGE GOES IN ALL FIELDS')}else if(buf.endsWith('bump')){buf='';setBumps(b=>b+1);alert('THREAD BUMPED. THE FOX THANKS YOU.')}else if(buf.endsWith('glow')){buf='';alert('GLOWIE DETECTED. THIS INCIDENT HAS BEEN REPORTED TO LITTLE JOHN.')}}};
  addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[]);
 useEffect(()=>{if(!abyssRef.current)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setDepth(d=>Math.min(69,d+6))},{rootMargin:'900px'});o.observe(abyssRef.current);return()=>o.disconnect()},[]);
 useEffect(()=>{let leave=()=>{},gone=false;joinBelieverMainframe(setBelievers).then(cleanup=>gone?cleanup():leave=cleanup);return()=>{gone=true;leave()}},[]);
 useEffect(()=>{const base=document.title,titles=['(1) Anonymous replied to your post','/biz/ - THEY KNOW','DO NOT CLOSE THIS TAB',base,'▲▲▲ $RHTG69I ▲▲▲','it has been twelve for years',base,'69','(You)',base];let i=0;const id=setInterval(()=>{document.title=titles[i++%titles.length]},2300);return()=>{clearInterval(id);document.title=base}},[]);
 useEffect(()=>{console.log('%c /rhtg/ GENERAL %c\n\n%cyou opened the console. the fox has noted this.\n>inspecting element\n>expecting to find the sell button\nthere is no sell button. there was never a sell button.\n\n>>58291469 (OP)\nop is a fox\n\nrhtg69i.com // @RHTG69INU','font:bold 30px Impact;color:#000;background:#c3f53c;padding:6px','','font:14px "Courier New";color:#789922')},[]);
 useEffect(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const msgs=['BUY','69','THE FOX SEES YOU','(You)','HOLD','SHERWOOD','WAKE UP','READ THE RECEIPT','GLOW','TWELVE'];let t1,t2;const loop=()=>{t1=setTimeout(()=>{setFlash(msgs[Math.floor(Math.random()*msgs.length)]);document.body.classList.add('glitch');t2=setTimeout(()=>{setFlash(null);document.body.classList.remove('glitch')},110);loop()},9000+Math.random()*12000)};loop();return()=>{clearTimeout(t1);clearTimeout(t2);document.body.classList.remove('glitch')}},[]);
 const startSite=()=>{setTruth(true);const a=songRef.current;if(!a)return;a.volume=.58;a.play().then(()=>setSound(true)).catch(()=>setSound(false))};
 const toggleSound=()=>{const a=songRef.current;if(!a)return;if(a.paused)a.play().then(()=>setSound(true)).catch(()=>setSound(false));else{a.pause();setSound(false)}};
 const postReply=e=>{e.preventDefault();const body=replyBody.trim();if(!body)return;const sage=/sage/i.test(replyOpt);const no=posts[posts.length-1].no+1+Math.floor(Math.random()*7);const mine={no,date:chanDate(new Date()),text:body.slice(0,2000),sage};setPosts(p=>[...p,mine]);setYours(y=>[...y,no]);setReplyBody('');setReplyOpt('');
  setTimeout(()=>{const pool=sage?['sage goes in all fields newfriend','>sage\n>on a thread that has been 69 minutes from archive for years\nkek']:autoReplies;const bot={no:no+1+Math.floor(Math.random()*5),date:chanDate(new Date()),text:`>>${no}\n${pool[Math.floor(Math.random()*pool.length)]}`};setPosts(p=>[...p,bot]);setLastReply(bot);setPopups(p=>p.includes(4)?p:[...p,4])},2600+Math.random()*3400)};
 const bump=()=>{setBumps(b=>b+1);setPosts(p=>[...p,{no:p[p.length-1].no+1+Math.floor(Math.random()*4),date:chanDate(new Date()),text:['bump','bumping for the fox','>page 10\nnot today sheriff','bump. it is still twelve.'][bumps%4]}])};
 const images=posts.filter(p=>p.file).length;
 return <>
 <audio ref={songRef} src="/assets/rhtg69i-site-theme.mp3" loop preload="auto" onPlay={()=>setSound(true)} onPause={()=>setSound(false)}/>
 {flash&&<div className="subliminal" aria-hidden="true">{flash}</div>}
 {!truth&&<div className="truth"><div className="truthbox"><div className="terminalbar">ROBINHOODTRUMPGAMESTOP69INU.EXE</div><h2>DO YOU ACCEPT THE GREEN CANDLE?</h2><p>This website may cause irreversible financial literacy loss.<br/><b>WARNING: OFFICIAL RHTG69I THEME WILL BEGIN.</b></p><div><button onClick={startSite}>YES, I AM GAY</button><button onClick={startSite} className="red">NO, I AM EARLY</button></div><button className="sheriffbtn" onClick={()=>alert('ACCESS DENIED.\nSHERIFF DETECTED.\nLITTLE JOHN HAS BEEN NOTIFIED.')}>I AM THE SHERIFF</button><small className="fineprint">BY ENTERING YOU CONFIRM YOU ARE NOT A GLOWIE, A HEDGIE, OR THE SHERIFF OF NOTTINGHAM. THIS SITE IS BEST VIEWED AT 800x600 WITH THE LIGHTS OFF. ABSOLUTELY NO REFUNDS. ABSOLUTELY NO SELL BUTTON.</small></div></div>}
 <button className={`sound ${sound?'playing':''}`} onClick={toggleSound} aria-label={sound?'Mute the RHTG69I site song':'Play the RHTG69I site song'} title={sound?'MUTE OFFICIAL SITE SONG':'PLAY OFFICIAL SITE SONG'}>{sound?<Volume2/>:<VolumeX/>}</button>
 <div className="ticker"><span>*** POWER TO THE PLAYERS *** MIDNIGHT RELEASE AT SHERWOOD MALL *** <a href={X_URL} target="_blank" rel="noreferrer">X TRANSMISSION: @RHTG69INU</a> *** &gt;&gt;58291469 (OP) IS A FOX *** SAGE GOES IN ALL FIELDS *** GAMESTOP TRADE-IN VALUE: $6.90 OR 69,000 STORE POINTS *** PRINCE JOHN SHORT POSITION LIQUIDATED *** GLOWIES DETECTED IN THREAD *** ROBIN NEON CANDLE DETECTED *** LURK MOAR *** LITTLE JOHN IS HOLDING THE BAG *** IT HAS BEEN TWELVE FOR YEARS *** </span></div>
 <img className="bandana-side leftbandana" src="/assets/robinhood-bandana.png" alt="Robin Hood mascot wearing the red Roaring Kitty bandana"/>
 <img className="bandana-side rightbandana" src="/assets/roaring-kitty-bandana.png" alt="Roaring Kitty cat wearing a red bandana"/>
 {popups.includes(1)&&<div className="winpopup pop1"><div>GameStop Trade-In Wizard <button onClick={()=>setPopups(p=>p.filter(x=>x!==1))}>X</button></div><p>YOUR PORTFOLIO IS WORTH $3.47 STORE CREDIT.</p><button onClick={()=>alert('POWERUP REWARDS APPLIED. RECEIPT LENGTH: 69 FEET.')}>ACCEPT TRADE</button></div>}
 {popups.includes(2)&&<div className="winpopup pop2"><div>Believer Mainframe!!! <button onClick={()=>setPopups(p=>p.filter(x=>x!==2))}>X</button></div><p>{believers.total==null?'Counting the faithful...':`Believer #${believers.total} detected.`}<br/>Claim FREE Robin Neon!</p><button onClick={()=>setPopups(p=>[...p,3])}>CLAIM PRIZE</button></div>}
 {popups.includes(3)&&<div className="winpopup pop3"><div>ERROR 420 <button onClick={()=>setPopups(p=>p.filter(x=>x!==3))}>X</button></div><p>Prize printer is out of ink.<br/>Buy RHTG69I instead.</p></div>}
 {popups.includes(4)&&lastReply&&<div className="winpopup pop4"><div>(You) 1 new reply <button onClick={()=>setPopups(p=>p.filter(x=>x!==4))}>X</button></div><p>&gt;&gt;{lastReply.no} replied to your post:<br/><i>{lastReply.text.split('\n').slice(1).join(' ').slice(0,64)}</i></p><button onClick={()=>{setPopups(p=>p.filter(x=>x!==4));document.getElementById('p'+lastReply.no)?.scrollIntoView({behavior:'smooth',block:'center'})}}>VIEW (You)</button></div>}
 <main>
  <div className="webmaster">WELCOME TO MY HOMEPAGE!!!!! <span>UNDER CONSTRUCTION SINCE 2009</span><small>LAST UPDATED: 06/09/2009 // WEBMASTER STATUS: AWAY (AT THE MIDNIGHT RELEASE) // YOU ARE NOT LOGGED IN</small></div>
  <nav>{links.map(([t,h])=><a href={h} key={t}>{t}</a>)}<a href="#buy">BUY THE DIP</a><a className="xnav" href={X_URL} target="_blank" rel="noreferrer">X TRANSMISSION ↗</a></nav>
  <div className="construction"><span>!!! UNDER CONSTRUCTION !!! — THE WEBMASTER IS ASLEEP AT THE REGISTER — !!! UNDER CONSTRUCTION !!!</span></div>
  <section id="welcome" className="hero">
   <div className="eyebrow">THE PEOPLE'S INFINITE LIQUIDITY EVENT</div>
   <h1><span>ROBINHOOD</span><span>TRUMP</span><span>GAMESTOP</span><span>69INU</span></h1>
   <p className="tickername">TICKER: $RHTG69I &nbsp; // &nbsp; OFFICIAL SITE: <a href="https://rhtg69i.com/">RHTG69I.COM</a></p>
   <a className="xsignal" href={X_URL} target="_blank" rel="noreferrer"><span>● LIVE</span> THE FOX IS POSTING // @RHTG69INU // DO NOT TRUST THE TIMELINE <ArrowUpRight/></a>
   <div className="gifrow"><img src="/assets/robin-neon-smiley.png"/><img src="/assets/robin-neon-smiley.png"/><span>POWER TO THE SHERWOOD PLAYERS</span><img src="/assets/robin-neon-smiley.png"/><img src="/assets/robin-neon-smiley.png"/></div>
   <div className="heroimg"><img src="/assets/rhtg69i-deepfried.png" alt="Malformed Donald Trump Robin Hood cutout riding with a distorted Shiba over a corrupted stock chart"/><div className="stamp">CERTIFIED<br/>69% REAL</div><div className="filename">rhtg69i_deepfried_FINAL_v69(2).png (69 KB, 1536x1024)</div></div>
   <div className="contract"><b>THE SACRED NUMBERS:</b><code className="soon">{CA}</code><button onClick={()=>alert('THE CA DROPS WHEN THE MALL OPENS.
FOLLOW @RHTG69INU. TRUST NO OTHER RECEIPT.')}>WHERE IS THE CA?</button></div>
   <section className={`believer-mainframe ${believers.status}`} aria-live="polite"><div className="believer-bar">RHTG69I_BELIEVER_MAINFRAME.EXE <span>{believers.status==='live'?'● DATABASE POSSESSED':'○ SEEKING SIGNAL'}</span></div><div className="believer-screens"><div><small>TOTAL BELIEVERS // ALL TIME</small><b>{believers.total==null?'---------':String(believers.total).padStart(9,'0')}</b><em>PERMANENTLY ETCHED INTO THE SHERWOOD LEDGER</em></div><div className="online-believers"><small>CURRENTLY BELIEVING</small><b><i/>{believers.online==null?'---':String(believers.online).padStart(3,'0')}</b><em>LIVE FROM THE FOREST RIGHT NOW</em></div></div><p>{believers.status==='live'?'YOUR ANONYMOUS BROWSER HAS BEEN COUNTED. HISTORY CANNOT BE UNDONE.':believers.status==='unconfigured'?'DATABASE KEYS MISSING // THE PROPHECY IS RUNNING OFFLINE':believers.status==='error'?'SHERIFF BLOCKED THE DATABASE TUNNEL // RETRYING NEXT VISIT':'DIALING SUPABASE THROUGH A 56K MODEM...'}</p></section>
   <div className="market"><div><small>LIVE-ish PRICE</small><b>${price.toFixed(9)}</b></div><div><small>MARKET CAP</small><b>∞ + $69</b></div><div><small>HOLDERS</small><b>THE ENTIRE SHERWOOD FOREST</b></div></div>
   <div className="hoodterminal"><div className="hoodbar">ROBINHOOD LEGEND: SHERWOOD MARKET EDITION <span>[_][□][X]</span></div><div className="hoodbody"><aside><b>INVESTING</b><p>$69,420.69</p><small>+$6,969.69 TODAY</small><hr/><a>Stocks</a><a>Options</a><a>PowerUp Rewards</a><a>GameStop Preorders</a></aside><section><h3>RHTG69I</h3><div className="microchart">_╱╲_╱╲╱╲__╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱</div><p>1D &nbsp; 1W &nbsp; MIDNIGHT RELEASE &nbsp; SHERWOOD</p></section><form onSubmit={e=>{e.preventDefault();alert('ORDER PRINTED ON A 69-FOOT GAMESTOP RECEIPT')}}><b>Buy RHTG69I</b><label>Dollars<input defaultValue="$69.00"/></label><label>Order type<select defaultValue="destiny"><option value="destiny">Market Destiny</option><option>Pre-Owned Limit</option><option>Nottingham Stop Loss</option></select></label><button>POWER TO THE ORDER</button></form></div></div>
  </section>

  <div className="browserwarn">[ POWERUP REWARDS WARNING ] This Sherwood brokerage experience requires a GameStop membership card, Netscape Navigator 4.7 and permission from the Sheriff of Nottingham. <u>PREORDER NOW</u></div>

  <div className="schizostrip" aria-hidden="true">{schizoWords.map((w,i)=><span key={i}>{w}</span>)}</div>

  <section className="receipt"><div className="receiptlogo">GAME STOP? NEVER HEARD OF HER.</div><p>STORE #0069 — SHERWOOD MALL — NOTTINGHAM</p><hr/><table><tbody><tr><td>PRE-OWNED RHTG69I</td><td>$69.00</td></tr><tr><td>DISC PROTECTION PLAN</td><td>$6.90</td></tr><tr><td>LITTLE JOHN DLC</td><td>FREE</td></tr><tr><td>TRADE-IN: PRINCE JOHN CROWN</td><td>-$0.34</td></tr><tr><td>POWERUP REWARD POINTS</td><td>69,420</td></tr></tbody></table><hr/><b>POWER TO THE PLAYERS / ARROWS TO THE HEDGIES</b><div className="barcode">||| || ||||| | |||| || | ||||| ||</div><small>NO REFUNDS AFTER THE SHORT SQUEEZE. STORE CREDIT ONLY.</small></section>

  <section className="sherwood"><img src="/assets/community/biz-finance-fox.jpg" alt="Robin Hood fox arriving at the business and finance district"/><div><h2>THE SHERWOOD MARKET AUTHORITY</h2><p>Oo-de-lally: the fox is back from Nottingham with a quiver full of limit orders and a sack of used controllers. Little John runs risk management. Maid Marian handles investor relations. Friar Tuck validates the receipt printer. Prince John keeps shorting the float and losing the castle treasury.</p><p className="wanted">WANTED: THE SHERIFF OF NOTTINGHAM<br/>CRIME: CANCELING THE MIDNIGHT RELEASE<br/>REWARD: 69 POWERUP POINTS</p></div></section>

  <section id="thread" className="threadsection">
   <h2>THE THREAD THAT STARTED IT ALL</h2>
   <p className="screenshotnote">SCREENSHOT SAVED FROM THE SHERWOOD MALL PUBLIC TERMINAL // ARCHIVE STATUS: 69 MINUTES FROM DELETION (SINCE 2021) // THE REPLY BOX STILL WORKS. DO NOT ASK HOW.</p>
   <div className="bizboard">
    <div className="boardlist">[ <a>a</a> / <a>biz</a> / <a>g</a> / <a>gme</a> / <a>hood</a> / <a>inu</a> / <a>k</a> / <a>pol</a> / <a>rhtg</a> / <a>sherwood</a> / <a>trump</a> / <a>x</a> / <a>69</a> ] [ <a>Settings</a> ] [ <a>Home</a> ]</div>
    <div className="boardhead"><div className="boardtitle">/biz/ - Business &amp; Finance</div><div className="boardsub">Sherwood Mall Public Terminal #0069 · Nottingham · Netscape 4.7 · 800x600</div></div>
    <hr/>
    <div className="threadnav">[<a href="#thread">Return</a>] [<a href="#memes">Catalog</a>] [<a href="#replyform">Bottom</a>] [<a onClick={bump}>Bump</a>] <span className="threadstats">{posts.length-1} replies / {images} images / {bumps} bumps</span> <span className="archived">This thread is archived. Replies still work because the archive is a spiritual condition.</span></div>
    <hr/>
    <div className="thread">{posts.map(p=><Post key={p.no} p={p} yours={yours}/>)}</div>
    <hr/>
    <form id="replyform" className="postform" onSubmit={postReply}>
     <table><tbody>
      <tr><td>Name</td><td><input value="Anonymous" readOnly/></td></tr>
      <tr><td>Options</td><td><input value={replyOpt} onChange={e=>setReplyOpt(e.target.value)} placeholder="sage"/></td></tr>
      <tr><td>Comment</td><td><textarea value={replyBody} onChange={e=>setReplyBody(e.target.value)} rows={5} placeholder={'>be me\n>reading rhtg69i.com\n>the fox is reading me back'} maxLength={2000}/></td></tr>
      <tr><td>Verification</td><td><span className="captcha">R H T G 6 9 I</span> <input placeholder="type the letters (optional, the fox already knows)"/></td></tr>
      <tr><td></td><td><button type="submit">Post</button> <small className="postnote">Please read the <a onClick={()=>alert('RULE 1: OP IS A FOX\nRULE 2: SAGE GOES IN ALL FIELDS\nRULE 3: THERE IS NO SELL BUTTON')}>Rules</a> before posting. Posting is anonymous. The fox is not.</small></td></tr>
     </tbody></table>
    </form>
    <div className="threadnav bottom">[<a href="#thread">Top</a>] [<a onClick={bump}>Bump</a>] [<a onClick={()=>alert('THREAD ALREADY REFRESHED. IT IS STILL TWELVE.')}>Refresh</a>] <span className="threadstats">{posts.length-1} replies</span></div>
   </div>
  </section>

  <section id="chart" className="chart"><h2>ROADMAP TO THE MOON'S MOON</h2><div className="graph"><div className="line">╱╲__╱╲_╱╲╱╲___╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱</div><strong>WE ARE HERE*</strong></div><p>*we are always here because the chart is a spiritual condition</p></section>

  <div className="junkstrip"><img src="/assets/community/robin-trump-69.jpg"/><div><b>!!! MIDNIGHT RELEASE IN YOUR SHERWOOD AREA !!!</b><br/><span>CLICK HERE TO CHECK TRADE-IN VALUE</span><br/><button onClick={()=>alert('YOUR ENTIRE PORTFOLIO IS WORTH $6.90 STORE CREDIT')}>SCAN POWERUP CARD</button></div><img src="/assets/community/robin-gme-bandana.jpg"/></div>

  <section id="buy" className="panel"><h2>HOW 2 ACQUIRE THE ARTIFACT</h2><ol><li>Download a wallet. Any wallet. A velcro wallet may not work.</li><li>Acquire ETH like a respectable digital medieval peasant.</li><li>Paste the sacred numbers into your swap cauldron.</li><li>Set slippage to “destiny” and smash the green button.</li><li>Tell your group chat you “like the fundamentals.”</li><li>Post the receipt in the thread. Someone will reply <span className="quote">&gt;checked</span>. That is the audit.</li></ol><a className="cta" href="#welcome">I HAVE READ NOTHING <ArrowUpRight/></a></section>

  <section id="lore" className="lore"><h2>THE OFFICIAL UNAUTHORIZED SHERWOOD LORE</h2><div className="columns"><p>Before charts, before candles, before anyone's uncle discovered options trading, there was <em>The Hood</em>. The Hood was an extremely long username whispered into a GameStop receipt printer during a midnight release at exactly 6:9 PM.</p><p>From that sacred machine emerged RobinHoodTrumpGameStop69Inu: part statesman, part fox outlaw, part PowerUp Rewards member, part dog, and legally too many parts. He took basis points from Prince John and redistributed pre-owned controllers to every holder in Sherwood Forest.</p><p>The prophecy says that when sixty-nine Robin Neon candles align above Nottingham resistance, Little John will ring the opening bell, Maid Marian will approve the merger, and the Sheriff will be offered twelve cents of store credit for his castle.</p></div><blockquote>“EVERY PORTFOLIO DESERVES A SECOND LIFE AS A PRE-OWNED GAME.”<cite>— Receipt fragment found near Sherwood Mall</cite></blockquote></section>

  <section className="eyeintercept"><img src="/assets/community/hood-eye-signal.jpg" alt="Blue face receiving an occult Robin Hood market-eye transmission"/><div><div className="classified">UNAUTHORIZED VISUAL SIGNAL // DO NOT LOOK DIRECTLY</div><h2>THE BROKER HAS A THIRD EYE</h2><p>At 6:09 PM the app stops reading candles and begins reading you. Witnesses report a red eye above Sherwood, a fox holding a golden feather coin, and a push notification containing only the number 69.</p><marquee>THE EYE SAW THE ORDER BEFORE YOU PLACED IT // THE EYE SAW THE ORDER BEFORE YOU PLACED IT //</marquee></div></section>

  <section id="tokenomics" className="tokenomics"><h2>POWERUP TOKENOMICS</h2><div className="math"><div><b>69%</b><span>SHERWOOD LOOT</span></div><div><b>10%</b><span>USED GAME RECEIPTS</span></div><div><b>20%</b><span>LITTLE JOHN ARROW FUND</span></div><div><b>1%</b><span>PRINCE JOHN TAX</span></div></div><p>TOTAL SUPPLY: 69,000,000,000 • GAMESTOP STORE CREDIT: $6.90 • NOTTINGHAM TAX: REJECTED • POWER TO THE PLAYERS</p></section>

  <div className="construction"><span>!!! UNDER CONSTRUCTION !!! — CURSED FILES BELOW ARE STILL UPLOADING AT 56K — !!! UNDER CONSTRUCTION !!!</span></div>

  <section id="memes" className="memes"><h2>CURSED FILES RECOVERED FROM THE FOREST</h2><p className="submitted">USER-SUBMITTED ARTIFACTS — DO NOT CLEAN, CROP, COLOR-CORRECT, OR ASK QUESTIONS</p><div className="grid">{communityMemes.map(([src,t],i)=><article key={t} className={`artifact artifact${i+1}`}><a href={src} target="_blank"><img src={src} alt={t}/></a><h3>{t}</h3><p>Right click → save as → re-upload at worse quality.</p></article>)}</div></section>
  <section className="aol"><h2>RHTG69I LIVE COMMUNITY CHAT</h2><div className="chatroom"><div className="buddy"><b>BUDDY LIST</b><span>online: trumpdog69</span><span>online: HoodAdmin</span><span>away: DeepValueDad</span><span>idle: SEC_enjoyer</span><span>online: glowie_hunter</span><span>lurking: (You)</span></div><div className="messages">{chatLines[chat]}<br/><i>*** dialup_wizard has entered the room ***</i><input placeholder="say something irreversible..."/></div></div></section>
  <section className="guestbook"><h2>SIGN MY GUESTBOOK</h2><textarea defaultValue={'dear webmaster, this coin changed my life...'}></textarea><button onClick={()=>alert('GUESTBOOK FULL. TRY AGAIN IN 2009.')}>SUBMIT 2 INTERNET</button><div className="counter">BELIEVER NUMBER <b>{believers.total==null?'---------':String(believers.total).padStart(9,'0')}</b> // ONLINE <b>{believers.online==null?'---':String(believers.online).padStart(3,'0')}</b></div><p className="awards">[ LIVE SUPABASE LEDGER ] [ REALTIME FOREST PRESENCE ] [ GEOCITIES SURVIVOR ] [ NO CSS VALIDATION ]</p></section>
  <footer><div className="gifrow"><img src="/assets/robin-neon-smiley.png"/><img src="/assets/robin-neon-smiley.png"/><img src="/assets/robin-neon-smiley.png"/></div><h2>ROBINHOODTRUMPGAMESTOP69INU</h2><p><b>$RHTG69I // <a href="https://rhtg69i.com/">RHTG69I.COM</a></b></p>
   <div className="badges">{badges.map(([a,b])=><span className="b88" key={a+b}><b>{a}</b><small>{b}</small></span>)}</div>
   <div className="webring">[ <a onClick={()=>alert('THE WEBRING HAS ONE SITE.\nIT IS THIS ONE.')}>&lt;&lt; PREV</a> | <a onClick={()=>alert('RANDOM SITE SELECTED: RHTG69I.COM')}>RANDOM</a> | <a onClick={()=>alert('NEXT SITE: RHTG69I.COM\nYOU ARE ALREADY HERE.')}>NEXT &gt;&gt;</a> ] SHERWOOD FOREST WEBRING // SITE 1 OF 1</div>
   <p>A parody meme project. Not affiliated with Robinhood Markets, Donald Trump, GameStop, Disney, any fox, any dog, or any forest with securities jurisdiction.</p><p>© 2069 SHERWOOD GAMESTOP INTERNET DEPARTMENT</p><p>EMAIL THE WEBMASTER: powerupfox69@rhtg69i.com</p>
   <p className="hiddenmsg">HIGHLIGHT THIS LINE TO READ THE REAL CONTRACT: <span>the real contract was the pre-owned friends we made along the way. also the sheriff reads your dms. also op is a fox.</span></p></footer>
  <section className="abyss"><div className="pointofreturn">END OF OFFICIAL WEBSITE<br/><small>EVERYTHING BELOW THIS LINE WAS RECOVERED FROM THE WEBMASTER'S CONSPIRACY ARCHIVE</small></div>{Array.from({length:depth},(_,i)=>{const m=communityMemes[i%communityMemes.length],l=abyssLore[i%abyssLore.length],cycle=Math.floor(i/abyssLore.length)+1;return <div className={`depth depth${i%9}`} key={i} style={{'--d':i}}><div className="corruptbar">CASE_FILE_{String(i+1).padStart(3,'0')}.TXT // REVISION {cycle} // {i%3?'NOTTINGHAM SIGNAL INTERCEPTED':'DOCUMENT PARTIALLY EATEN BY DOG'}</div><h3>{l.title}</h3><div className="corruptcontent"><img src={m[0]} alt="progressively corrupted evidence from the RHTG69I conspiracy archive"/><div className="lorefile"><div className="classified">CLASSIFIED // SHERWOOD EYES ONLY // COPY {cycle}</div><p>{l.body}</p><p className="proof">{l.proof}</p><div className="redactions">████ ███ GAMESTOP █████ 0069 ████ ROBIN ███████ HOOD</div><button onClick={()=>alert(`CASE ${i+1}: THE ARCHIVE HAS RECORDED THAT YOU BELIEVE IT`)}>ACKNOWLEDGE EVIDENCE #{i+1}</button></div></div><div className="minimarquee">CONNECT THE RECEIPTS FOLLOW THE FOX ROTATE THE CHART THE MALL KNOWS RHTG69I.COM</div></div>})}<div className="loadingabyss" ref={abyssRef}>{depth<69?'DECRYPTING MORE CASE FILES...':'FINAL FILE CORRUPTED. THE COIN HAS FINISHED READING YOU.'}</div></section>
 </main><div className="socialsignals"><a className="xfixed" href={X_URL} target="_blank" rel="noreferrer" aria-label="Follow RHTG69I on X"><b>X</b><span>@RHTG69INU<br/>SIGNAL FOUND</span></a></div></>}
createRoot(document.getElementById('root')).render(<App/>);
