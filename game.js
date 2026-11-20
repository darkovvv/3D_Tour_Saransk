"use strict";
const MUSEUMS=[
{id:0,em:"🏛️",name:"Краеведческий музей им. И.Д. Воронина",sub:"История и природа Мордовии",
 map:["###########","#S........#","#.##...##.#","#.#1...2#.#","#.........#","#.#3...4#.#","#.##...##.#","#.........#","###########"],
 decor:[["plant",5.5,3.5],["bench",5.5,5.5],["plant",1.5,4.5],["plant",9.5,4.5]],
 ex:[
 {t:"Древности края",ic:"amphora",d:"Археологические находки рассказывают о жизни людей на землях Мордовии с древнейших времён.",f:"Люди жили здесь тысячи лет назад. По найденным горшкам, украшениям и наконечникам стрел учёные узнают, как они жили.",q:"Что помогает учёным узнать о жизни древних людей?",a:["Найденные старинные вещи","Новости по телевизору","Мультфильмы"]},
 {t:"Народный костюм",ic:"costume",d:"Мордовский (эрзянский и мокшанский) костюм известен богатой вышивкой и украшениями.",f:"Узоры на одежде были не только красивыми: считалось, что они берегут человека.",q:"Чем славится мордовский костюм?",a:["Богатой вышивкой и украшениями","Только серым цветом","Металлической бронёй"]},
 {t:"Природа Мордовии",ic:"nature",d:"Леса, реки и заповедные места края — отдельная часть экспозиции.",f:"В Мордовии есть заповедник имени П.Г. Смидовича, где берегут лесных зверей, птиц и растения.",q:"Как называют места, где берегут природу и животных?",a:["Заповедники","Магазины","Стадионы"]},
 {t:"История края",ic:"scroll",d:"Документы и предметы показывают путь Мордовии от древности до наших дней.",f:"Музей хранит документы и предметы разных эпох — это как путешествие на машине времени.",q:"Какие вещи показывают путь Мордовии через века?",a:["Документы и старинные предметы","Только игрушки","Компьютерные игры"]}]},
{id:1,em:"🎨",name:"Музей изобразительных искусств им. С.Д. Эрзи",sub:"Скульптура и живопись",
 map:["#############","#S..........#","#.###...###.#","#.#1.....2#.#","#.#.......#.#","#...........#","#.#3.....4#.#","#.###...###.#","#...........#","#############"],
 decor:[["statue",6.5,3.5],["statue",6.5,6.5],["plant",4.5,4.5],["plant",8.5,4.5],["bench",6.5,5.2]],
 ex:[
 {t:"Скульптура Эрзи",ic:"bust",d:"Степан Дмитриевич Эрзя — великий мордовский скульптор, известный работами из дерева и камня.",f:"Эрзя родился в мордовском селе Баево, а потом жил и работал в разных странах — от Франции до Аргентины.",q:"Кем был Степан Эрзя?",a:["Скульптором","Лётчиком","Поваром"]},
 {t:"Деревянная пластика",ic:"woodbust",d:"Дерево в руках мастера превращается в выразительные портреты.",f:"У дерева есть свой рисунок — годовые кольца. Мастер учитывает их, чтобы лицо казалось живым.",q:"Из какого материала Эрзя часто делал скульптуры?",a:["Из дерева и камня","Из мороженого","Из бумаги"]},
 {t:"Русская живопись",ic:"easel",d:"В собрании представлены полотна русских художников разных эпох.",f:"Картину, где нарисована природа, называют пейзажем, а где человек — портретом.",q:"Как называется картина, на которой нарисована природа?",a:["Пейзаж","Портрет","Автопортрет"]},
 {t:"Современное искусство",ic:"abstract",d:"Работы современных мастеров Мордовии.",f:"Современные художники работают красками, глиной, металлом, а иногда даже светом.",q:"Кто создаёт современное искусство?",a:["Художники наших дней","Только древние мастера","Роботы-пылесосы"]}]},
{id:2,em:"🏡",name:"Мордовский национальный музей",sub:"Культура и традиции народов",
 map:["###########","#S........#","#.###.###.#","#.#1...2#.#","#.#.....#.#","#.#3...4#.#","#.###.###.#","#.........#","###########"],
 decor:[["sheaf",5.5,4.5],["sheaf",1.5,4.5],["sheaf",9.5,4.5]],
 ex:[
 {t:"Традиционное жилище",ic:"izba",d:"Интерьер крестьянской избы показывает быт народов края.",f:"Сердце избы — печь: на ней готовили, в ней грелись, а на лежанке даже спали.",q:"Что было главным в крестьянской избе?",a:["Печь","Телевизор","Лифт"]},
 {t:"Музыкальные инструменты",ic:"gusli",d:"Народные инструменты сопровождали праздники и обряды.",f:"Звонкие гусли — один из старинных народных инструментов. Струны трогали пальцами.",q:"Какой из этих инструментов народный?",a:["Гусли","Электрогитара","Синтезатор"]},
 {t:"Ремёсла",ic:"jug",d:"Гончарство, ткачество и резьба по дереву — традиционные ремёсла.",f:"Из глины лепили посуду, из льна и шерсти ткали ткань, из дерева вырезали ложки и узоры.",q:"Что делает гончар?",a:["Посуду из глины","Одежду из ваты","Дома изо льда"]},
 {t:"Праздники и обряды",ic:"wreath",d:"Календарные обычаи мордвы сохраняются и сегодня.",f:"На праздниках пели песни, водили хороводы и угощали гостей. Многие обычаи живут до сих пор!",q:"Что любят делать на народных праздниках?",a:["Петь и водить хороводы","Спать весь день","Писать контрольную"]}]}];

const $=id=>document.getElementById(id),cv=$('c'),ctx=cv.getContext('2d'),mini=$('mini').getContext('2d');
let M,mi,map,px,py,pa,seen,stars,paused=true,near=-1,exh=[],obst=[],running=false,TX,sprites={},muted=false;
const T=128,K=16,RT=T*K;
// ---------- sound ----------
let AC;function beep(f,d,ty,v,delay){if(muted)return;try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();const o=AC.createOscillator(),g=AC.createGain(),t=AC.currentTime+(delay||0);o.type=ty||'sine';o.frequency.value=f;g.gain.setValueAtTime(v||.12,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g);g.connect(AC.destination);o.start(t);o.stop(t+d)}catch(e){}}
const sfx={open:()=>{beep(660,.2,'triangle');beep(880,.3,'triangle',.1,.1)},ok:()=>[523,659,784,1046].forEach((f,i)=>beep(f,.25,'triangle',.14,i*.1)),bad:()=>beep(180,.25,'sawtooth',.08),done:()=>[523,659,784,1046,784,1046,1318].forEach((f,i)=>beep(f,.3,'triangle',.14,i*.12))};
$('mute').onclick=()=>{muted=!muted;$('mute').textContent=muted?'🔇':'🔊'};
// ---------- texture helpers ----------
function mkCanvas(w,h){const c=document.createElement('canvas');c.width=w*K;c.height=h*K;c.getContext('2d').scale(K,K);return c}
function speckle(g,w,h,n,a){for(let i=0;i<n;i++){g.fillStyle=Math.random()<.5?`rgba(0,0,0,${a})`:`rgba(255,255,255,${a})`;g.fillRect(Math.random()*w,Math.random()*h,1+Math.random()*2,1+Math.random()*2)}}
function down(b,n){const m=n>>1,o=new Uint32Array(m*m);for(let y=0;y<m;y++)for(let x=0;x<m;x++){let r=0,g=0,bl=0;for(let k=0;k<4;k++){const c=b[(y*2+(k>>1))*n+x*2+(k&1)];r+=c&255;g+=c>>8&255;bl+=c>>16&255}o[y*m+x]=0xff000000|(bl>>2<<16)|(g>>2<<8)|(r>>2)}return o}
function toBuf(c){const d=c.getContext('2d').getImageData(0,0,c.width,c.height).data;const a=[new Uint32Array(d.buffer.slice(0))];a.push(down(a[0],RT),down(down(a[0],RT),RT>>1),0);a[3]=down(a[2],RT>>2);a.length=4;return a}
function landscape(g,x,y,w,h){let gr=g.createLinearGradient(0,y,0,y+h);gr.addColorStop(0,'#69b7ee');gr.addColorStop(1,'#d8f0ff');g.fillStyle=gr;g.fillRect(x,y,w,h);
 g.fillStyle='#ffe066';g.beginPath();g.arc(x+w*.75,y+h*.28,h*.13,0,7);g.fill();
 g.fillStyle='#5fae52';g.beginPath();g.moveTo(x,y+h);g.lineTo(x,y+h*.6);g.quadraticCurveTo(x+w*.3,y+h*.4,x+w*.6,y+h*.65);g.quadraticCurveTo(x+w*.8,y+h*.55,x+w,y+h*.62);g.lineTo(x+w,y+h);g.fill();
 g.fillStyle='#3d8a3d';g.beginPath();g.moveTo(x,y+h);g.quadraticCurveTo(x+w*.4,y+h*.7,x+w,y+h*.85);g.lineTo(x+w,y+h);g.fill();
 g.fillStyle='#6b4a2a';g.fillRect(x+w*.2,y+h*.62,w*.04,h*.2);g.fillStyle='#2f7d32';g.beginPath();g.arc(x+w*.22,y+h*.55,h*.14,0,7);g.fill()}
function portrait(g,x,y,w,h,bg){g.fillStyle=bg;g.fillRect(x,y,w,h);const cx=x+w/2;g.fillStyle='#2b2b3a';g.beginPath();g.ellipse(cx,y+h*.4,w*.27,h*.3,0,0,7);g.fill();
 g.fillStyle='#b0463a';g.beginPath();g.moveTo(x+w*.1,y+h);g.quadraticCurveTo(cx,y+h*.55,x+w*.9,y+h);g.fill();
 g.fillStyle='#f0c8a0';g.beginPath();g.ellipse(cx,y+h*.42,w*.2,h*.25,0,0,7);g.fill();
 g.fillStyle='#222';g.fillRect(cx-w*.1,y+h*.38,w*.05,h*.04);g.fillRect(cx+w*.05,y+h*.38,w*.05,h*.04);g.fillStyle='#b0463a';g.fillRect(cx-w*.06,y+h*.52,w*.12,h*.025)}
function abstractArt(g,x,y,w,h){g.fillStyle='#f4efe0';g.fillRect(x,y,w,h);const cs=['#e63946','#1d6fb8','#f4c20d','#2a9d8f'];for(let i=0;i<4;i++){g.fillStyle=cs[i];g.beginPath();if(i%2)g.arc(x+w*(.2+i*.2),y+h*.5,h*.18,0,7);else g.rect(x+w*(.1+i*.2),y+h*.2,w*.22,h*.5);g.fill()}}
function frame(g,x,y,w,h){g.fillStyle='#8a5a12';g.fillRect(x-6,y-6,w+12,h+12);g.fillStyle='#e6b23a';g.fillRect(x-4,y-4,w+8,h+8);g.fillStyle='#8a5a12';g.fillRect(x-1,y-1,w+2,h+2)}
// ---------- build museum textures ----------
function buildTextures(i){const wall=[];
 for(let v=0;v<5;v++){const c=mkCanvas(T,T),g=c.getContext('2d');
  if(i===0){g.fillStyle='#ead9b0';g.fillRect(0,0,T,T);speckle(g,T,T,300,.05);
   g.fillStyle='#b5603f';g.fillRect(0,T*.68,T,T*.32);g.fillStyle='#7a3b25';for(let r=0;r<5;r++){const yy=T*.68+r*T*.064;g.fillRect(0,yy,T,2);for(let b=(r%2)*16;b<T;b+=32)g.fillRect(b,yy,2,T*.064)}
   g.fillStyle='#6b3a1d';g.fillRect(0,T*.66,T,4);g.fillStyle='#f6ead0';g.fillRect(0,0,T,5);g.fillStyle='#c7a96b';g.fillRect(0,5,T,2)}
  else if(i===1){g.fillStyle='#efeef4';g.fillRect(0,0,T,T);speckle(g,T,T,200,.03);
   g.fillStyle='#8f9bb5';g.fillRect(0,T*.7,T,T*.3);g.strokeStyle='#e3e8f5';g.lineWidth=2;for(let k=0;k<2;k++)g.strokeRect(8+k*64,T*.74,50,T*.2);
   g.fillStyle='#d4af37';g.fillRect(0,T*.68,T,4);g.fillStyle='#fff';g.fillRect(0,0,T,6);g.fillStyle='#d4af37';g.fillRect(0,6,T,2)}
  else{g.fillStyle='#a8703c';g.fillRect(0,0,T,T);for(let r=0;r<8;r++){const yy=r*16;let gr=g.createLinearGradient(0,yy,0,yy+16);gr.addColorStop(0,'#c58a50');gr.addColorStop(.5,'#a8703c');gr.addColorStop(1,'#6f4421');g.fillStyle=gr;g.fillRect(0,yy,T,15);g.fillStyle='#4a2a10';g.fillRect(0,yy+15,T,1)}
   speckle(g,T,T,400,.08);g.fillStyle='#f6f0e0';g.fillRect(0,56,T,18);g.fillStyle='#c4262e';for(let k=0;k<T;k+=16){g.beginPath();g.moveTo(k,65);g.lineTo(k+8,57);g.lineTo(k+16,65);g.lineTo(k+8,73);g.fill()}
   g.fillStyle='#222';g.fillRect(0,56,T,2);g.fillRect(0,72,T,2)}
  if(v===1){frame(g,30,18,68,48);landscape(g,30,18,68,48)}
  if(v===2){frame(g,40,16,48,62);portrait(g,40,16,48,62,i===1?'#c9d6e8':'#d9c49a')}
  if(v===3){if(i===2){g.fillStyle='#7a3b1d';g.fillRect(22,16,84,60);g.fillStyle='#8ed0f5';g.fillRect(28,22,32,48);g.fillRect(68,22,32,48);g.fillStyle='rgba(255,255,255,.5)';g.fillRect(28,22,32,8);g.fillRect(68,22,32,8);g.fillStyle='#e8d9b0';g.fillRect(61,22,6,48);g.fillStyle='#c4262e';g.fillRect(14,14,8,64);g.fillRect(106,14,8,64)}
   else{g.fillStyle='#caa24a';g.fillRect(34,12,60,70);g.fillStyle='#8ed0f5';g.beginPath();g.moveTo(40,82);g.lineTo(40,40);g.arc(64,40,24,Math.PI,0);g.lineTo(88,82);g.fill();g.fillStyle='#fff';g.beginPath();g.arc(58,34,8,0,7);g.arc(70,36,7,0,7);g.fill();g.fillStyle='#caa24a';g.fillRect(62,18,4,64);g.fillRect(40,50,48,4)}}
  if(v===4){if(i===2){g.fillStyle='#f6f0e0';g.fillRect(36,14,56,68);g.fillStyle='#c4262e';for(let k=0;k<4;k++){g.beginPath();g.moveTo(64,22+k*14);g.lineTo(76,29+k*14);g.lineTo(64,36+k*14);g.lineTo(52,29+k*14);g.fill()}g.fillRect(36,14,56,4);g.fillRect(36,78,56,4)}
   else{frame(g,34,18,60,46);abstractArt(g,34,18,60,46)}}
  wall.push(toBuf(c));}
 const fc=mkCanvas(T,T),fg=fc.getContext('2d');
 if(i===0){fg.fillStyle='#8a5a32';fg.fillRect(0,0,T,T);for(let r=0;r<8;r++)for(let k=0;k<2;k++){const sh=((r*3+k*5)%4)*10;fg.fillStyle=`rgb(${150-sh},${100-sh*.7},${55-sh*.4})`;const xo=(r%2)*32+k*64;fg.fillRect(xo%T,r*16,62,15)}speckle(fg,T,T,300,.07)}
 else if(i===1){for(let a=0;a<2;a++)for(let b=0;b<2;b++){fg.fillStyle=(a+b)%2?'#3b3f55':'#e8e6ee';fg.fillRect(a*64,b*64,64,64)}speckle(fg,T,T,400,.04)}
 else{fg.fillStyle='#9a6a3a';fg.fillRect(0,0,T,T);for(let r=0;r<4;r++){fg.fillStyle=r%2?'#b07a44':'#a06f3c';fg.fillRect(0,r*32,T,31);fg.fillStyle='#4a2a10';fg.fillRect(0,r*32+31,T,1)}speckle(fg,T,T,300,.08);fg.fillStyle='#c4262e';fg.fillRect(0,40,T,48);fg.fillStyle='#f6f0e0';for(let k=0;k<T;k+=16){fg.fillRect(k+6,60,4,8);fg.fillRect(k+2,48,4,4)}}
 const cc=mkCanvas(T,T),cg=cc.getContext('2d');
 if(i===0){cg.fillStyle='#5a3a22';cg.fillRect(0,0,T,T);cg.fillStyle='#7c5232';cg.fillRect(8,8,112,112);cg.fillStyle='#fff3c0';cg.fillRect(44,44,40,40);cg.fillStyle='#3d2514';cg.fillRect(0,0,T,6);cg.fillRect(0,0,6,T)}
 else if(i===1){cg.fillStyle='#f5f4f8';cg.fillRect(0,0,T,T);cg.fillStyle='#dcdbe6';cg.fillRect(0,0,T,3);cg.fillRect(0,0,3,T);cg.fillStyle='#fffbe0';cg.fillRect(34,34,60,60);cg.strokeStyle='#cfc8a0';cg.lineWidth=3;cg.strokeRect(34,34,60,60)}
 else{cg.fillStyle='#d2a56a';cg.fillRect(0,0,T,T);cg.fillStyle='#7a4a22';cg.fillRect(0,0,T,22);cg.fillStyle='#4a2a10';cg.fillRect(0,22,T,3);speckle(cg,T,T,300,.08);cg.fillStyle='#fff0b0';cg.fillRect(54,70,20,20)}
 return {wall,floor:toBuf(fc),ceil:toBuf(cc)}}
// ---------- sprites ----------
function pedestal(g){let gr=g.createLinearGradient(0,0,128,0);gr.addColorStop(0,'#cfc6b4');gr.addColorStop(.5,'#f2ede0');gr.addColorStop(1,'#a39a88');g.fillStyle=gr;g.fillRect(30,96,68,32);g.fillStyle='#e8e1d0';g.fillRect(24,90,80,9);g.fillStyle='#8a8070';g.fillRect(24,98,80,2);g.fillRect(24,126,80,2)}
const ART={
 amphora(g){g.fillStyle='#c4693a';g.beginPath();g.ellipse(64,58,24,28,0,0,7);g.fill();g.fillRect(55,20,18,20);g.beginPath();g.ellipse(64,20,13,5,0,0,7);g.fill();g.strokeStyle='#8a4524';g.lineWidth=5;g.beginPath();g.arc(40,40,12,Math.PI*1.5,Math.PI*.6,true);g.stroke();g.beginPath();g.arc(88,40,12,Math.PI*1.5,Math.PI*.4);g.stroke();
  g.fillStyle='#f3d9a0';g.fillRect(41,50,46,4);for(let k=0;k<5;k++){g.beginPath();g.moveTo(42+k*9,70);g.lineTo(46+k*9,62);g.lineTo(50+k*9,70);g.fill()}g.fillStyle='rgba(255,255,255,.2)';g.fillRect(48,36,5,30)},
 costume(g){g.fillStyle='#f6f0e0';g.fillRect(34,44,12,34);g.fillRect(82,44,12,34);g.beginPath();g.moveTo(46,40);g.lineTo(82,40);g.lineTo(96,90);g.lineTo(32,90);g.fill();g.fillStyle='#c4262e';g.fillRect(34,70,12,8);g.fillRect(82,70,12,8);g.fillRect(33,80,62,8);g.fillRect(60,42,8,38);
  g.fillStyle='#222';for(let k=0;k<7;k++)g.fillRect(36+k*9,82,4,4);g.fillStyle='#f0c8a0';g.beginPath();g.arc(64,28,11,0,7);g.fill();g.fillStyle='#c4262e';g.beginPath();g.moveTo(50,26);g.quadraticCurveTo(64,0,78,26);g.fill();g.fillStyle='#ffd34d';for(let k=0;k<5;k++){g.beginPath();g.arc(52+k*6,38,2.5,0,7);g.fill()}},
 nature(g){g.fillStyle='#bfe6ff';g.fillRect(22,12,84,80);g.fillStyle='#5fae52';g.fillRect(22,64,84,28);g.fillStyle='#3a9bdc';g.beginPath();g.moveTo(50,92);g.quadraticCurveTo(64,76,80,92);g.fill();
  for(const [x,h] of [[36,44],[88,50],[100,34]]){g.fillStyle='#5a3a1a';g.fillRect(x-2,66,4,10);g.fillStyle='#1f7a3a';for(let k=0;k<3;k++){g.beginPath();g.moveTo(x,66-h*.3-k*h*.28);g.lineTo(x-12+k*2,70-k*14);g.lineTo(x+12-k*2,70-k*14);g.fill()}}
  g.fillStyle='#a8703c';g.fillRect(60,56,16,8);g.fillRect(74,48,4,10);g.fillRect(60,64,3,10);g.fillRect(72,64,3,10);g.beginPath();g.arc(77,46,5,0,7);g.fill()},
 scroll(g){g.fillStyle='#f5e2b0';g.fillRect(30,24,68,62);g.fillStyle='#d9bd78';g.beginPath();g.ellipse(30,55,6,31,0,0,7);g.fill();g.beginPath();g.ellipse(98,55,6,31,0,0,7);g.fill();g.fillStyle='#7a5a2a';for(let k=0;k<6;k++)g.fillRect(40,34+k*8,48-(k%3)*8,3);g.fillStyle='#c4262e';g.beginPath();g.arc(80,76,9,0,7);g.fill();
  g.strokeStyle='#3a2a18';g.lineWidth=3;g.beginPath();g.moveTo(94,18);g.lineTo(70,52);g.stroke();g.fillStyle='#fff';g.beginPath();g.moveTo(94,18);g.quadraticCurveTo(112,10,108,30);g.quadraticCurveTo(100,30,94,18);g.fill()},
 bust(g,c1='#e4e0d6',c2='#a8a396'){g.fillStyle=c2;g.beginPath();g.moveTo(34,92);g.quadraticCurveTo(36,66,64,64);g.quadraticCurveTo(92,66,94,92);g.fill();g.fillRect(56,54,16,14);g.fillStyle=c1;g.beginPath();g.ellipse(64,38,19,25,0,0,7);g.fill();g.fillStyle=c2;g.beginPath();g.moveTo(46,34);g.quadraticCurveTo(64,4,82,34);g.quadraticCurveTo(64,18,46,34);g.fill();g.fillRect(52,36,8,3);g.fillRect(68,36,8,3);g.fillRect(62,40,4,12);g.fillRect(57,55,14,2)},
 woodbust(g){ART.bust(g,'#b9763a','#7a4a22');g.strokeStyle='#5a3414';g.lineWidth=1.5;for(let k=0;k<6;k++){g.beginPath();g.moveTo(48+k*6,20);g.quadraticCurveTo(52+k*6,40,48+k*6,60);g.stroke()}},
 easel(g){g.strokeStyle='#6b4a2a';g.lineWidth=5;g.beginPath();g.moveTo(40,90);g.lineTo(58,14);g.moveTo(88,90);g.lineTo(70,14);g.moveTo(64,90);g.lineTo(64,40);g.stroke();frame(g,38,24,52,40);landscape(g,38,24,52,40)},
 abstract(g){g.fillStyle='#e63946';g.beginPath();g.arc(52,70,20,0,7);g.fill();g.fillStyle='#1d6fb8';g.beginPath();g.moveTo(70,86);g.lineTo(96,86);g.lineTo(83,34);g.fill();g.fillStyle='#f4c20d';g.save();g.translate(60,40);g.rotate(.5);g.fillRect(-12,-12,24,24);g.restore();g.fillStyle='#2a9d8f';g.beginPath();g.arc(86,24,10,0,7);g.fill()},
 izba(g){g.fillStyle='#a8703c';g.fillRect(24,46,80,44);g.fillStyle='#6f4421';for(let k=0;k<5;k++)g.fillRect(24,50+k*9,80,2);g.fillStyle='#7a2f1e';g.beginPath();g.moveTo(16,48);g.lineTo(64,14);g.lineTo(112,48);g.fill();g.fillStyle='#8ed0f5';g.fillRect(36,58,22,20);g.fillStyle='#c4262e';g.fillRect(32,58,4,20);g.fillRect(58,58,4,20);g.fillStyle='#5a3414';g.fillRect(74,58,18,32);g.fillStyle='#ccc';g.beginPath();g.arc(90,16,6,0,7);g.arc(98,8,5,0,7);g.fill()},
 gusli(g){g.fillStyle='#c68a4a';g.beginPath();g.moveTo(26,86);g.lineTo(46,22);g.lineTo(102,30);g.lineTo(100,86);g.closePath();g.fill();g.strokeStyle='#6f4421';g.lineWidth=3;g.stroke();g.fillStyle='#8a5a2a';g.beginPath();g.ellipse(56,66,10,10,0,0,7);g.fill();g.strokeStyle='#fff';g.lineWidth=1.5;for(let k=0;k<9;k++){g.beginPath();g.moveTo(50+k*6,26+k*.8);g.lineTo(36+k*7.5,84);g.stroke()}},
 jug(g){g.fillStyle='#b8552f';g.beginPath();g.ellipse(52,60,22,26,0,0,7);g.fill();g.fillRect(44,22,16,16);g.beginPath();g.ellipse(52,22,11,4,0,0,7);g.fill();g.strokeStyle='#8a3a1f';g.lineWidth=5;g.beginPath();g.arc(74,44,12,Math.PI*1.4,Math.PI*.6);g.stroke();g.fillStyle='#f3d9a0';for(let k=0;k<4;k++){g.beginPath();g.arc(38+k*9,58,3,0,7);g.fill()}g.fillStyle='#d9a441';g.beginPath();g.ellipse(88,82,16,7,0,0,7);g.fill();g.fillStyle='#b8552f';g.fillRect(72,78,32,6)},
 wreath(g){g.strokeStyle='#2f8a3a';g.lineWidth=14;g.beginPath();g.arc(64,52,28,0,7);g.stroke();const cs=['#e63946','#ffd34d','#fff','#3a9bdc'];for(let k=0;k<12;k++){g.fillStyle=cs[k%4];g.beginPath();g.arc(64+Math.cos(k*.52*2)*28,52+Math.sin(k*.52*2)*28,5,0,7);g.fill()}g.fillStyle='#c4262e';g.beginPath();g.moveTo(64,80);g.lineTo(50,100);g.lineTo(58,98);g.lineTo(64,86);g.fill();g.beginPath();g.moveTo(64,80);g.lineTo(78,100);g.lineTo(70,98);g.lineTo(64,86);g.fill()},
 plant(g){g.fillStyle='#b8552f';g.beginPath();g.moveTo(40,100);g.lineTo(88,100);g.lineTo(80,126);g.lineTo(48,126);g.fill();g.fillStyle='#d97a4a';g.fillRect(36,94,56,9);g.fillStyle='#2f9a3a';for(let k=0;k<9;k++){g.beginPath();g.ellipse(64+(k-4)*7,60-Math.abs(k-4)*3,7,34,(k-4)*.22,0,7);g.fill()}g.fillStyle='#46c04f';for(let k=0;k<5;k++){g.beginPath();g.ellipse(64+(k-2)*10,70,5,22,(k-2)*.3,0,7);g.fill()}},
 bench(g){g.fillStyle='#6f4421';g.fillRect(14,86,100,12);g.fillStyle='#a8703c';g.fillRect(14,82,100,8);g.fillStyle='#6f4421';g.fillRect(20,98,8,28);g.fillRect(100,98,8,28);g.fillStyle='#c4262e';g.fillRect(40,74,48,10)},
 statue(g){pedestal(g);g.fillStyle='#f0ece2';g.beginPath();g.arc(64,24,10,0,7);g.fill();g.beginPath();g.moveTo(52,38);g.quadraticCurveTo(64,30,76,38);g.lineTo(82,90);g.lineTo(46,90);g.fill();g.fillRect(36,40,12,6);g.fillStyle='#d4d0c4';g.fillRect(70,40,14,40)},
 sheaf(g){g.fillStyle='#e0b43a';for(let k=-6;k<=6;k++){g.beginPath();g.moveTo(64+k*2,120);g.quadraticCurveTo(64+k*7,70,64+k*9,22+Math.abs(k)*3);g.lineTo(64+k*9+4,24+Math.abs(k)*3);g.quadraticCurveTo(64+k*7+3,70,64+k*2+4,120);g.fill()}g.fillStyle='#c4262e';g.fillRect(48,84,32,6)}
};
function exhSprite(ic,glow,done){const c=mkCanvas(T,T),g=c.getContext('2d');if(glow){const gr=g.createRadialGradient(64,60,10,64,60,64);gr.addColorStop(0,'rgba(255,230,120,.7)');gr.addColorStop(1,'rgba(255,230,120,0)');g.fillStyle=gr;g.fillRect(0,0,T,T)}
 pedestal(g);g.save();g.translate(0,-4);ART[ic](g);g.restore();if(done){g.fillStyle='#2bb54a';g.beginPath();g.arc(100,20,16,0,7);g.fill();g.strokeStyle='#fff';g.lineWidth=5;g.beginPath();g.moveTo(92,20);g.lineTo(98,27);g.lineTo(109,13);g.stroke()}return c}
function decSprite(k){const c=mkCanvas(T,T);ART[k](c.getContext('2d'));return c}
// ---------- start ----------
const best=JSON.parse(localStorage.getItem('mtour_best')||'{}');
function menu(){const list=$('list');list.innerHTML='';MUSEUMS.forEach((m,i)=>{const b=document.createElement('button');b.className='mbtn';const s=best[i]||0;b.innerHTML=`<span class="em">${m.em}</span><span>${m.name}<small>${m.sub}</small></span><span class="st">${'⭐'.repeat(s)+'☆'.repeat(4-s)}</span>`;b.onclick=()=>start(i);list.appendChild(b)})}
menu();
function start(i){mi=i;M=MUSEUMS[i];map=M.map;exh=[];obst=[];TX=buildTextures(i);sprites={dec:{}};
 for(let y=0;y<map.length;y++)for(let x=0;x<map[y].length;x++){const c=map[y][x];if(c==='S'){px=x+.5;py=y+.5}if(c>='1'&&c<='4'){const n=+c-1;exh.push({x:x+.5,y:y+.5,i:n,seen:false,sc:.85,r:.32,s0:exhSprite(M.ex[n].ic,true,false),s1:exhSprite(M.ex[n].ic,false,true)})}}
 const scs={plant:.8,bench:.42,statue:1.05,sheaf:.7},rs={plant:.28,bench:.3,statue:.3,sheaf:.28};
 M.decor.forEach(([k,x,y])=>{sprites.dec[k]=sprites.dec[k]||decSprite(k);obst.push({x,y,r:rs[k],sc:scs[k],s:sprites.dec[k],dec:1})});
 exh.forEach(e=>obst.push(e));
 pa=0;seen=0;stars=0;paused=false;near=-1;
 $('menu').classList.add('hidden');$('hud').classList.remove('hidden');$('title').textContent=M.name;upd();
 toast('Ищи сияющие экспонаты ✨');
 if(!running){running=true;resize();requestAnimationFrame(loop)}}
function upd(){$('score').textContent='⭐ '+stars+'   🖼️ '+seen+'/'+exh.length}
let tt;function toast(s){const t=$('toast');t.textContent=s;t.classList.remove('hidden');clearTimeout(tt);tt=setTimeout(()=>t.classList.add('hidden'),2200)}
function cell(x,y){const r=map[y];return r===undefined||r[x]===undefined||r[x]==='#'}
function blocked(x,y,r){if(cell(Math.floor(x+r),Math.floor(y))||cell(Math.floor(x-r),Math.floor(y))||cell(Math.floor(x),Math.floor(y+r))||cell(Math.floor(x),Math.floor(y-r)))return true;for(const o of obst)if(Math.hypot(o.x-x,o.y-y)<o.r+r)return true;return false}
let W=320,H=200,S=213,zb=[],img,buf;
function resize(){const a=innerWidth/innerHeight;H=Math.round(Math.min(/Mobi|Android/i.test(navigator.userAgent)?800:1000,innerHeight/1.1));W=Math.round(Math.min(1900,H*a));cv.width=W;cv.height=H;S=W/1.5;img=ctx.createImageData(W,H);buf=new Uint32Array(img.data.buffer);ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high'}
addEventListener('resize',()=>{if(running)resize()});
// ---------- input ----------
const keys={};addEventListener('keydown',e=>{keys[e.code]=1;if(e.code==='KeyE'||e.code==='Space'||e.code==='Enter'){if(!paused)act();e.preventDefault()}});addEventListener('keyup',e=>keys[e.code]=0);
let jx=0,jy=0,jid=null;const joy=$('joy'),knob=$('knob');
function jset(t){const r=joy.getBoundingClientRect(),R=r.width/2;let dx=t.clientX-r.left-R,dy=t.clientY-r.top-R;const l=Math.hypot(dx,dy);if(l>R){dx*=R/l;dy*=R/l}jx=dx/R;jy=dy/R;knob.style.transform=`translate(${dx}px,${dy}px)`}
joy.addEventListener('pointerdown',e=>{jid=e.pointerId;joy.setPointerCapture(jid);jset(e)});
joy.addEventListener('pointermove',e=>{if(e.pointerId===jid)jset(e)});
const jend=e=>{if(e.pointerId===jid){jid=null;jx=jy=0;knob.style.transform=''}};joy.addEventListener('pointerup',jend);joy.addEventListener('pointercancel',jend);
let lid=null,lx=0;cv.addEventListener('pointerdown',e=>{lid=e.pointerId;lx=e.clientX;cv.setPointerCapture(lid)});
cv.addEventListener('pointermove',e=>{if(e.pointerId===lid){pa+=(e.clientX-lx)*.006;lx=e.clientX}});
cv.addEventListener('pointerup',()=>lid=null);cv.addEventListener('pointercancel',()=>lid=null);
// ---------- exhibit dialog ----------
let cur=null,tries=0;
function act(){if(paused||near<0)return;cur=exh[near];const e=M.ex[cur.i];sfx.open();
 const g=$('icon').getContext('2d');g.clearRect(0,0,T,T);g.save();g.translate(0,12);ART[e.ic](g);g.restore();
 $('it').textContent=e.t;$('id').textContent=e.d;$('fact').textContent=e.f;
 $('quiz').classList.add('hidden');$('go').classList.remove('hidden');$('close').classList.add('hidden');
 paused=true;$('info').classList.remove('hidden');tries=0}
$('act').onclick=act;
$('go').onclick=()=>{const e=M.ex[cur.i];$('q').textContent=e.q;$('fb').textContent='';const box=$('ans');box.innerHTML='';
 const order=e.a.map((t,i)=>[t,i]).sort(()=>Math.random()-.5);
 order.forEach(([t,i])=>{const b=document.createElement('button');b.textContent=t;b.onclick=()=>{if(b.classList.contains('ok'))return;
  if(i===0){b.classList.add('ok');[...box.children].forEach(x=>x.disabled=true);sfx.ok();const gain=tries===0?1:0;if(!cur.seen){cur.seen=true;seen++;if(gain)stars++}
   $('fb').textContent=gain?'Верно! Ты получаешь звезду ⭐':'Верно! Молодец, что не сдался!';upd();$('close').classList.remove('hidden')}
  else{b.classList.add('bad');tries++;sfx.bad();$('fb').textContent='Почти! Перечитай подсказку и попробуй ещё раз 🙂';setTimeout(()=>b.classList.remove('bad'),400)}};box.appendChild(b)});
 $('quiz').classList.remove('hidden');$('go').classList.add('hidden')};
$('close').onclick=()=>{$('info').classList.add('hidden');paused=false;if(seen===exh.length)finish()};
function finish(){paused=true;sfx.done();best[mi]=Math.max(best[mi]||0,stars);localStorage.setItem('mtour_best',JSON.stringify(best));
 $('stars').textContent='⭐'.repeat(stars)+'☆'.repeat(exh.length-stars);
 $('endp').textContent=stars===exh.length?'Ты настоящий знаток музеев! Все ответы верные с первого раза.':'Отличная прогулка! Ты можешь пройти музей снова и собрать все звёзды.';$('end').classList.remove('hidden')}
$('again').onclick=()=>{$('end').classList.add('hidden');$('hud').classList.add('hidden');menu();$('menu').classList.remove('hidden');paused=true};
$('home').onclick=()=>{paused=true;$('info').classList.add('hidden');$('hud').classList.add('hidden');menu();$('menu').classList.remove('hidden')};
// ---------- loop ----------
let last=0;function loop(t){requestAnimationFrame(loop);const dt=Math.min(.05,(t-last)/1000);last=t;if(!M||$('hud').classList.contains('hidden'))return;if(!paused)move(dt);render(t)}
function move(dt){let f=-jy,s=jx;if(keys.KeyW||keys.ArrowUp)f=1;if(keys.KeyS||keys.ArrowDown)f=-1;if(keys.KeyD)s=1;if(keys.KeyA)s=-1;if(keys.ArrowLeft)pa-=2*dt;if(keys.ArrowRight)pa+=2*dt;
 const sp=2.2*dt,dx=Math.cos(pa)*f*sp-Math.sin(pa)*s*sp,dy=Math.sin(pa)*f*sp+Math.cos(pa)*s*sp,r=.2;
 if(!blocked(px+dx,py,r))px+=dx;if(!blocked(px,py+dy,r))py+=dy;
 near=-1;let b=1.6;exh.forEach((e,i)=>{const d=Math.hypot(e.x-px,e.y-py);if(d<b){b=d;near=i}});$('act').classList.toggle('hidden',near<0)}
function sh(c,f){let r=(c&255)*f,g=(c>>8&255)*f,b=(c>>16&255)*f;if(r>255)r=255;if(g>255)g=255;if(b>255)b=255;return 0xff000000|(b<<16)|(g<<8)|r}
function render(t){const dX=Math.cos(pa),dY=Math.sin(pa),pX=-dY*.75,pY=dX*.75,half=H/2,wt=TX.wall,fl=TX.floor,ce=TX.ceil;
 for(let x=0;x<W;x++){const cx=2*x/W-1,rx=dX+pX*cx,ry=dY+pY*cx;let mx=Math.floor(px),my=Math.floor(py);const ddx=Math.abs(1/(rx||1e-9)),ddy=Math.abs(1/(ry||1e-9));
  let sx,sy,sdx,sdy;if(rx<0){sx=-1;sdx=(px-mx)*ddx}else{sx=1;sdx=(mx+1-px)*ddx}if(ry<0){sy=-1;sdy=(py-my)*ddy}else{sy=1;sdy=(my+1-py)*ddy}
  let side=0,n=0;while(n++<40){if(sdx<sdy){sdx+=ddx;mx+=sx;side=0}else{sdy+=ddy;my+=sy;side=1}if(cell(mx,my))break}
  const pd=Math.max(.05,side?sdy-ddy:sdx-ddx);zb[x]=pd;const lh=S/pd,top=half-lh/2,y0=Math.max(0,top|0),y1=Math.min(H,(top+lh)|0);
  let wx=side?px+pd*rx:py+pd*ry;wx-=Math.floor(wx);let tx=(wx*RT)|0;if((!side&&rx>0)||(side&&ry<0))tx=RT-1-tx;
  const h100=(((mx*73856093)^(my*19349663))>>>0)%100;const vr=h100<(mi===1?45:30)?0:h100<55?1:h100<68?2:h100<84?3:4;
   const f=Math.min(1,Math.max(.28,1.1-pd*.07))*(side?.82:1),step=RT/lh,lv=step<1.3?0:step<2.6?1:step<5.2?2:3,tb=wt[vr][lv],tsz=RT>>lv;tx=tx>>lv;let tp=(y0-top)*step/(1<<lv);const st2=step/(1<<lv);
  for(let y=y0;y<y1;y++){buf[y*W+x]=sh(tb[Math.min(tsz-1,tp|0)*tsz+tx],f);tp+=st2}
  for(let y=y1;y<H;y++){const d=S*.5/(y-half+.01),fx=px+rx*d,fy=py+ry*d,fs=Math.min(1,Math.max(.28,1.1-d*.07)),m=d>9?3:d>5?2:d>2.5?1:0,z=RT>>m;buf[y*W+x]=sh(fl[m][(((fy*z)|0)&(z-1))*z+(((fx*z)|0)&(z-1))],fs)}
  for(let y=0;y<y0;y++){const d=S*.5/(half-y+.01),fx=px+rx*d,fy=py+ry*d,fs=Math.min(1,Math.max(.28,1.1-d*.07)),m=d>9?3:d>5?2:d>2.5?1:0,z=RT>>m;buf[y*W+x]=sh(ce[m][(((fy*z)|0)&(z-1))*z+(((fx*z)|0)&(z-1))],fs)}}
 ctx.putImageData(img,0,0);
 const inv=1/(pX*dY-dX*pY),list=obst.map(o=>({o,d:Math.hypot(o.x-px,o.y-py)})).sort((a,b)=>b.d-a.d);
 for(const {o} of list){const rx=o.x-px,ry=o.y-py,tX=inv*(dY*rx-dX*ry),tY=inv*(-pY*rx+pX*ry);if(tY<.25)continue;
  const scx=W/2*(1+tX/tY),hs=S/tY*o.sc,bot=half+.5*S/tY,tp=bot-hs,x0=scx-hs/2,spr=o.dec?o.s:(o.seen?o.s1:o.s0);
  const xa=Math.max(0,Math.floor(x0)),xb=Math.min(W-1,Math.ceil(x0+hs));
  for(let x=xa;x<=xb;x++){if(zb[x]<tY)continue;ctx.drawImage(spr,Math.min(RT-1,((x-x0)/hs*RT)|0),0,1,RT,x,tp,1,hs)}
  if(!o.dec&&!o.seen&&scx>0&&scx<W&&zb[scx|0]>tY){ctx.font=Math.max(8,hs*.28)+'px sans-serif';ctx.textAlign='center';ctx.fillText('⭐',scx,tp-hs*.02+Math.sin(t/300+o.i)*hs*.05)}}
 if(near>=0){const s=M.ex[exh[near].i].t;ctx.font='bold '+Math.round(13*H/300)+'px sans-serif';ctx.textAlign='center';const w=ctx.measureText(s).width+16*H/300;ctx.fillStyle='rgba(0,0,0,.65)';ctx.fillRect(W/2-w/2,H-34*H/300,w,22*H/300);ctx.fillStyle='#fff';ctx.fillText(s,W/2,H-18*H/300)}
 mini.fillStyle='rgba(0,0,0,.7)';mini.fillRect(0,0,120,120);const cs=Math.min(120/map[0].length,120/map.length);
 for(let y=0;y<map.length;y++)for(let x=0;x<map[y].length;x++)if(map[y][x]==='#'){mini.fillStyle='#b9a98a';mini.fillRect(x*cs,y*cs,cs,cs)}
 exh.forEach(e=>{mini.fillStyle=e.seen?'#4c4':'#ffd34d';mini.beginPath();mini.arc(e.x*cs,e.y*cs,3.5,0,7);mini.fill()});
 mini.fillStyle='#f33';mini.beginPath();mini.arc(px*cs,py*cs,3.5,0,7);mini.fill();mini.strokeStyle='#f33';mini.beginPath();mini.moveTo(px*cs,py*cs);mini.lineTo(px*cs+Math.cos(pa)*9,py*cs+Math.sin(pa)*9);mini.stroke()}
