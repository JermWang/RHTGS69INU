import React,{useState,useEffect,useRef} from 'react';
import{createRoot}from'react-dom/client';
import{Copy,Volume2,VolumeX,ArrowUpRight}from'lucide-react';
import'./style.css';

const CA='0x0000000000000000000000000000000000000069';
const links=[['WELCOME','#welcome'],['HOW 2 ACQUIRE','#buy'],['THE LORE','#lore'],['TOKENOMICS','#tokenomics'],['CHART GO UP','#chart'],['CURSED FILES','#memes']];
const communityMemes=[
 ['/assets/community/slam-dunk.jpeg','DIAMOND-HANDS SLAM DUNK'],
 ['/assets/community/poker.jpeg','HIGH-STAKES DUMB-MONEY POKER'],
 ['/assets/community/diamond.jpeg','THE DIAMOND CHAIN INCIDENT'],
 ['/assets/community/fourth-wall.jpeg','PUMP THE DOGES / DUMP THE STOCKS'],
 ['/assets/community/fox-cash.jpeg','FOX ARCHER CASH-FAN CEREMONY'],
 ['/assets/community/mascot.jpeg','THE OFFICIAL UNOFFICIAL MASCOT'],
 ['/assets/community/diamond-chain.jpeg','DEEP-FRIED DIAMOND CHAIN FOX']
];

function App(){
 const[truth,setTruth]=useState(false),[sound,setSound]=useState(false),[copied,setCopied]=useState(false),[price,setPrice]=useState(0.0000069),[popups,setPopups]=useState([1,2]),[chat,setChat]=useState(0),[depth,setDepth]=useState(12); const abyssRef=useRef(null);
 useEffect(()=>{const t=setInterval(()=>setPrice(p=>Math.max(.0000001,p*(1+(Math.random()-.42)*.045))),900);return()=>clearInterval(t)},[]);
 useEffect(()=>{let last=0;const move=e=>{if(Date.now()-last<70)return;last=Date.now();const g=document.createElement('img');g.src='/assets/robin-neon-smiley.png';g.className='cursor-gem';g.style.left=e.clientX+'px';g.style.top=e.clientY+'px';document.body.appendChild(g);setTimeout(()=>g.remove(),850)};window.addEventListener('mousemove',move);return()=>window.removeEventListener('mousemove',move)},[]);
 useEffect(()=>{const t=setInterval(()=>setChat(c=>(c+1)%5),2400);return()=>clearInterval(t)},[]);
 useEffect(()=>{const t=setInterval(()=>{const c=document.createElement('img');c.src='/assets/legacy/coin.gif';c.className='raincoin';c.style.left=Math.random()*96+'vw';c.style.width=(22+Math.random()*38)+'px';document.body.appendChild(c);setTimeout(()=>c.remove(),4200)},480);return()=>clearInterval(t)},[]);
 useEffect(()=>{const seq=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];let i=0;const k=e=>{i=e.key===seq[i]?i+1:0;if(i===seq.length){document.body.classList.toggle('maximum');alert('ROBIN MODE 69 UNLOCKED');i=0}};addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[]);
 useEffect(()=>{if(!abyssRef.current)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setDepth(d=>Math.min(69,d+6))},{rootMargin:'900px'});o.observe(abyssRef.current);return()=>o.disconnect()},[]);
 const noise=()=>{setSound(true);const A=window.AudioContext||window.webkitAudioContext;if(!A)return;const c=new A();for(let i=0;i<9;i++){const o=c.createOscillator(),g=c.createGain();o.type=i%2?'square':'sawtooth';o.frequency.value=110+i*69;g.gain.setValueAtTime(.035,c.currentTime+i*.08);g.gain.exponentialRampToValueAtTime(.001,c.currentTime+i*.08+.18);o.connect(g).connect(c.destination);o.start(c.currentTime+i*.08);o.stop(c.currentTime+i*.08+.2)}};
 const copy=()=>{navigator.clipboard?.writeText(CA);setCopied(true);setTimeout(()=>setCopied(false),1200)};
 return <>
 {!truth&&<div className="truth"><div className="truthbox"><div className="terminalbar">ROBINHOODTRUMPGAMESTOP69INU.EXE</div><h2>DO YOU ACCEPT THE GREEN CANDLE?</h2><p>This website may cause irreversible financial literacy loss.</p><div><button onClick={()=>setTruth(true)}>YES, I AM NORMAL</button><button onClick={()=>setTruth(true)} className="red">NO, I AM EARLY</button></div></div></div>}
 <button className="sound" onClick={noise} aria-label="Play website sounds">{sound?<Volume2/>:<VolumeX/>}</button>
 <div className="ticker"><span>*** BREAKING: LOCAL DOG DISCOVERS SHORT SQUEEZE *** 69% OF ANALYSTS ARE THREE RACCOONS *** GREEN CANDLE DETECTED *** NO THOUGHTS, ONLY SHAREHOLDER VALUE *** BEST VIEWED IN INTERNET EXPLORER 6 *** </span></div>
 <img className="fixedgif leftgif" src="/assets/legacy/hyper-run.gif" alt="running legacy web sprite"/><img className="fixedgif rightgif" src="/assets/legacy/pulling.gif" alt="pulling legacy web sprite"/>
 {popups.includes(1)&&<div className="winpopup pop1"><div>Robinhood Security Alert <button onClick={()=>setPopups(p=>p.filter(x=>x!==1))}>X</button></div><p>YOUR PORTFOLIO HAS BEEN DETECTED.</p><button onClick={()=>alert('CLEANING 0 PAPER HANDS...')}>CLEAN NOW</button></div>}
 {popups.includes(2)&&<div className="winpopup pop2"><div>Congratulations!!! <button onClick={()=>setPopups(p=>p.filter(x=>x!==2))}>X</button></div><p>You are the 69th visitor.<br/>Claim FREE Robin Neon!</p><button onClick={()=>setPopups(p=>[...p,3])}>CLAIM PRIZE</button></div>}
 {popups.includes(3)&&<div className="winpopup pop3"><div>ERROR 420 <button onClick={()=>setPopups(p=>p.filter(x=>x!==3))}>X</button></div><p>Prize printer is out of ink.<br/>Buy RHTGS69 instead.</p></div>}
 <main>
  <div className="webmaster">WELCOME TO MY HOMEPAGE!!!!! <span>UNDER CONSTRUCTION SINCE 2009</span></div>
  <nav>{links.map(([t,h])=><a href={h} key={t}>{t}</a>)}<a href="#buy">BUY THE DIP</a></nav>
  <section id="welcome" className="hero">
   <div className="eyebrow">THE PEOPLE'S INFINITE LIQUIDITY EVENT</div>
   <h1><span>ROBINHOOD</span><span>TRUMP</span><span>GAMESTOP</span><span>69INU</span></h1>
   <p className="tickername">TICKER: $RHTGS69</p>
   <div className="gifrow"><img src="/assets/legacy/emerald-red.png"/><img src="/assets/legacy/sonic-ring.gif"/><span>THE PEOPLE'S STONK</span><img src="/assets/legacy/sonic-ring.gif"/><img src="/assets/legacy/emerald-teal.png"/></div>
   <div className="heroimg"><img src="/assets/rhtgs69-deepfried.png" alt="Malformed Donald Trump Robin Hood cutout riding with a distorted Shiba over a corrupted stock chart"/><div className="stamp">CERTIFIED<br/>69% REAL</div></div>
   <div className="contract"><b>THE SACRED NUMBERS:</b><code>{CA}</code><button onClick={copy}><Copy/>{copied?'COPIED. PROBABLY.':'COPY CONTRACT'}</button></div>
   <div className="market"><div><small>LIVE-ish PRICE</small><b>${price.toFixed(9)}</b></div><div><small>MARKET CAP</small><b>∞ + $69</b></div><div><small>HOLDERS</small><b>THE ENTIRE SHERWOOD FOREST</b></div></div>
   <div className="hoodterminal"><div className="hoodbar">ROBINHOOD LEGEND 4 WINDOWS 98 <span>[_][□][X]</span></div><div className="hoodbody"><aside><b>INVESTING</b><p>$69,420.69</p><small>+$6,969.69 TODAY</small><hr/><a>Stocks</a><a>Options</a><a>Crypto</a><a>69 Events</a></aside><section><h3>RHTGS69</h3><div className="microchart">_╱╲_╱╲╱╲__╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱</div><p>1D &nbsp; 1W &nbsp; 1M &nbsp; ALL &nbsp; AFTERLIFE</p></section><form onSubmit={e=>{e.preventDefault();alert('ORDER QUEUED BEHIND 69,000 OTHER PATRIOTS')}}><b>Buy RHTGS69</b><label>Dollars<input defaultValue="$69.00"/></label><label>Order type<select defaultValue="destiny"><option value="destiny">Market Destiny</option><option>Limit of Sanity</option></select></label><button>REVIEW ORDER</button></form></div></div>
  </section>

  <div className="browserwarn">[ WARNING ] This Robinhood experience requires Netscape Navigator 4.7, Flash Player, 256MB RAM and adult supervision. <u>DOWNLOAD NOW</u></div>

  <section id="chart" className="chart"><h2>ROADMAP TO THE MOON'S MOON</h2><div className="graph"><div className="line">╱╲__╱╲_╱╲╱╲___╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱</div><strong>WE ARE HERE*</strong></div><p>*we are always here because the chart is a spiritual condition</p></section>

  <div className="junkstrip"><img src="/assets/legacy/owl.gif"/><div><b>!!! HOT TRUMP DOGS IN YOUR AREA !!!</b><br/><span>CLICK HERE TO INCREASE MARKET CAP</span><br/><button onClick={()=>alert('CONGRATULATIONS YOU ARE HOLDER #000069')}>FREE ROBIN NEON DOWNLOAD</button></div><img src="/assets/legacy/coin.gif"/></div>

  <section id="buy" className="panel"><h2>HOW 2 ACQUIRE THE ARTIFACT</h2><ol><li>Download a wallet. Any wallet. A velcro wallet may not work.</li><li>Acquire ETH like a respectable digital medieval peasant.</li><li>Paste the sacred numbers into your swap cauldron.</li><li>Set slippage to “destiny” and smash the green button.</li><li>Tell your group chat you “like the fundamentals.”</li></ol><a className="cta" href="#welcome">I HAVE READ NOTHING <ArrowUpRight/></a></section>

  <section id="lore" className="lore"><h2>THE OFFICIAL UNAUTHORIZED LORE</h2><div className="columns"><p>Before charts, before candles, before anyone's uncle discovered options trading, there was <em>The Hood</em>. The Hood was not a place. It was an extremely long username whispered into a GameStop receipt printer at exactly 6:9 PM.</p><p>From that sacred machine emerged RobinHoodTrumpGameStop69Inu: part statesman, part outlaw, part retail investor, part dog, and legally too many parts. He took basis points from the hedgies and distributed them to anybody still holding a limited-edition controller.</p><p>The prophecy is simple: when sixty-nine green candles align above the Sherwood resistance zone, every paper hand will become a diamond paw. This is not financial advice. It is much less useful than financial advice.</p></div><blockquote>“ASK NOT WHAT YOUR PORTFOLIO CAN DO FOR YOU. ASK WHY YOU BOUGHT AT THE TOP.”<cite>— Definitely a historical document</cite></blockquote></section>

  <section id="tokenomics" className="tokenomics"><h2>TOKENOMICS (ADVANCED MATH)</h2><div className="math"><div><b>69%</b><span>VIBES</span></div><div><b>10%</b><span>GAME RECEIPTS</span></div><div><b>20%</b><span>ROBIN'S ARROW FUND</span></div><div><b>1%</b><span>MATH ERROR</span></div></div><p>TOTAL SUPPLY: 69,000,000,000 • TAX: 0% • LORE: 100% • UTILITY: DO NOT ASK</p></section>

  <section id="memes" className="memes"><h2>CURSED FILES RECOVERED FROM THE FOREST</h2><p className="submitted">USER-SUBMITTED ARTIFACTS — DO NOT CLEAN, CROP, COLOR-CORRECT, OR ASK QUESTIONS</p><div className="grid">{communityMemes.map(([src,t],i)=><article key={t} className={`artifact artifact${i+1}`}><a href={src} target="_blank"><img src={src} alt={t}/></a><h3>{t}</h3><p>Right click → save as → re-upload at worse quality.</p></article>)}</div></section>
  <section className="aol"><h2>RHTGS69 LIVE COMMUNITY CHAT</h2><div className="chatroom"><div className="buddy"><b>BUDDY LIST</b><span>online: trumpdog69</span><span>online: HoodAdmin</span><span>away: DeepValueDad</span><span>idle: SEC_enjoyer</span></div><div className="messages">{['[HoodAdmin]: WELCOME NO FUD ALLOWED','[trumpdog69]: chart literally forming a robin hood hat','[DeepValueDad]: my financial advisor blocked me','[SEC_enjoyer]: hello fellow ordinary investors','[xX_420STONK_Xx]: WHO TOUCHED THE SELL BUTTON'][chat]}<br/><i>*** dialup_wizard has entered the room ***</i><input placeholder="say something irreversible..."/></div></div></section>
  <section className="guestbook"><h2>SIGN MY GUESTBOOK</h2><textarea defaultValue={'dear webmaster, this coin changed my life...'}></textarea><button onClick={()=>alert('GUESTBOOK FULL. TRY AGAIN IN 2009.')}>SUBMIT 2 INTERNET</button><div className="counter">YOU ARE VISITOR <b>000000069</b></div><p className="awards">[ COOL SITE AWARD ] [ NETSCAPE NOW! ] [ GEOCITIES SURVIVOR ] [ NO CSS VALIDATION ]</p></section>
  <footer><div className="gifrow"><img src="/assets/legacy/emerald-blue.png"/><img src="/assets/legacy/emerald-acquired.gif"/><img src="/assets/legacy/emerald-red.png"/></div><h2>ROBINHOODTRUMPGAMESTOP69INU</h2><p>A parody meme project. Not affiliated with Robinhood Markets, Donald Trump, GameStop, any dog, any forest, or the concept of prudent investing.</p><p>© 2069 RHTGS69 INTERNET DEPARTMENT</p><p>EMAIL THE WEBMASTER: webmaster69@aol.example</p></footer>
  <section className="abyss"><div className="pointofreturn">END OF OFFICIAL WEBSITE<br/><small>EVERYTHING BELOW THIS LINE WAS RECOVERED FROM THE CACHE</small></div>{Array.from({length:depth},(_,i)=>{const m=communityMemes[i%communityMemes.length];return <div className={`depth depth${i%9}`} key={i} style={{'--d':i}}><div className="corruptbar">MIRROR_{String(i+1).padStart(3,'0')}.HTML // LAST MODIFIED 00/00/2009 // {i%3?'CONNECTION UNSTABLE':'DO NOT REFRESH'}</div><h3>{['THE CHART IS LOOKING BACK','ROBIN NEON LEAK DETECTED','YOU HAVE BEEN SELECTED','69 HOLDERS INSIDE THIS IMAGE','THE DOG KNOWS YOUR COST BASIS','THIS PAGE HAS NO BOTTOM','SELL BUTTON SUCCESSFULLY DELETED','WEBMASTER IS TYPING...','WELCOME BACK USER 000069'][i%9]}</h3><div className="corruptcontent"><img src={m[0]} alt="progressively corrupted community meme"/><div><p>{('BUY HOLD BARK REFRESH VIEW SOURCE TRUST THE PROCESS ').repeat((i%4)+2)}</p><table><tbody><tr><td>ACCOUNT</td><td>${(69*(i+1)).toLocaleString()}.69</td></tr><tr><td>STATUS</td><td>{i%2?'ASCENDING':'BUFFERING'}</td></tr><tr><td>SOUL EQUITY</td><td>{99-i}%</td></tr></tbody></table><button onClick={()=>alert(`MIRROR ${i+1} HAS MIRRORED YOU`)}>ENTER MIRROR #{i+1}</button></div></div><div className="minimarquee">RHTGS69 RHTGS69 RHTGS69 THIS IS NOT A LOOP THIS IS NOT A LOOP RHTGS69 RHTGS69</div></div>})}<div className="loadingabyss" ref={abyssRef}>{depth<69?'LOADING MORE INTERNET...':'YOU HAVE REACHED THE ARTIFICIAL BOTTOM. IT IS WATCHING.'}</div></section>
 </main></>}
createRoot(document.getElementById('root')).render(<App/>);
