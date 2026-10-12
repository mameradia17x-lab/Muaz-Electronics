(function(){
'use strict';
var S=window.SITE,$=function(s,r){return (r||document).querySelector(s);},$$=function(s,r){return [].slice.call((r||document).querySelectorAll(s));};
var ICONS={
phone:'<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>',tv:'<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
speaker:'<rect x="6" y="2" width="12" height="20" rx="3"/><circle cx="12" cy="14.5" r="3.5"/><circle cx="12" cy="7" r="1"/>',fridge:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M5 10h14M8 6v1M8 13v3"/>',
laptop:'<rect x="4" y="4" width="16" height="11" rx="1.5"/><path d="M2 19h20"/>',other:'<rect x="4" y="4" width="16" height="11" rx="1.5"/><path d="M2 19h20"/>',
wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
chip:'<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',unlock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.5-2"/>',
battery:'<rect x="2" y="7" width="18" height="10" rx="2"/><path d="M22 11v2M6 10v4M10 10v4"/>',plug:'<path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0zM12 17v5"/>',
drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',disk:'<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
sim:'<path d="M6 2h8l4 4v16H6z"/><rect x="9" y="12" width="6" height="7" rx="1"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',app:'<rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="8" rx="2"/><rect x="3" y="13" width="8" height="8" rx="2"/><path d="M17 13v8M13 17h8"/>',
cctv:'<path d="M3 8l12-4 2 5-12 4z"/><path d="M17 9l4 2M9 13l-1 5h4M5 21h8"/>',wifi:'<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>',
pos:'<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h2M12 10h2M8 14h2M12 14h2M8 18h8"/>',printer:'<path d="M6 9V3h12v6M6 18H4v-7h16v7h-2"/><rect x="6" y="14" width="12" height="7"/>',
check:'<path d="M5 13l4 4L19 7"/>',copy:'<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
send:'<path d="M21 3L10 14M21 3l-7 18-4-7-7-4z"/>',chat:'<path d="M21 12a8 8 0 0 1-11.8 7L3 21l2-5.5A8 8 0 1 1 21 12z"/>',pin:'<path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',call:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>'};
function ic(n){return '<svg viewBox="0 0 24 24" aria-hidden="true">'+(ICONS[n]||'')+'</svg>';}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}

/* ---------- languages (Amharic and Afaan Oromo are first drafts: please have a native speaker review) ---------- */
var EN={cat_all:'All',cat_phone:'Smartphones',cat_tv:'TVs',cat_speaker:'Speakers',cat_fridge:'Refrigerators',cat_other:'Laptops & more',ask:'Ask on WhatsApp',birr:'Birr',ask_price:'Ask for price',copy:'Copy',copied:'Copied',account:'Account name',other_service:'Other / not listed',e_name:'Please enter your name.',e_phone:'Please enter your phone number.',e_method:'Choose how you will pay.',imei_ok:'Looks valid',imei_len:'An IMEI has 15 digits. Please check.',imei_luhn:'This IMEI does not pass the check. Please look for a typo.',toast_tg:'Message copied. Paste it in the Telegram chat.'};
var I18N={am:{
nav_shop:'ሱቅ',nav_repairs:'ጥገና',nav_online:'የኦንላይን አገልግሎት',nav_other:'ሌሎች አገልግሎቶች',nav_about:'ስለ እኛ',nav_contact:'ያግኙን',
hero_pill:'ቦሌ፣ አዳማ · አዳዲስ መሳሪያዎች · ጥገና · ሶፍትዌር',hero_t1:'ኃይል ተሞልቶ።',hero_t2:'በትክክል ተጠግኖ።',
hero_sub:'አዳዲስ ስማርትፎኖች፣ ቲቪዎች፣ ስፒከሮች እና የቤት እቃዎች፣ እንዲሁም ፈጣን እና ጥንቃቄ የተሞላበት ጥገና እና የሶፍትዌር አገልግሎት በአንድ ቦታ።',
hero_cta1:'በቴሌግራም ያናግሩን',hero_cta2:'ሱቁን ይመልከቱ',hp1:'አዳዲስ መሳሪያዎች',hp2:'ልዩ ጥገና',hp3:'በኦንላይን ይዘዙ',
hero_c1:'አዳዲስ መሳሪያዎች',hero_c2:'ልዩ ጥገና',hero_c2s:'ስልክ · ቲቪ · ላፕቶፕ',hero_c3:'ሶፍትዌር እና መክፈት',
shop_e:'ሱቅ',shop_h:'አዳዲስ መሳሪያዎች',shop_sub:'የዛሬውን ዋጋ እና መኖሩን ለማረጋገጥ መልዕክት ይላኩልን።',search_ph:'ምርት ይፈልጉ',no_results:'ምንም ምርት አልተገኘም። መልዕክት ይላኩልን፣ ሊኖረን ይችላል።',
rep_e:'ጥገና',rep_h:'አስፈላጊውን እናስተካክላለን',rep_sub:'ችግሩን ይንገሩን፣ እንመራዎታለን። ይዘው ይምጡ ወይም መጀመሪያ መልዕክት ይላኩ።',rep_hw:'የሃርድዌር ጥገና',rep_sw:'የሶፍትዌር አገልግሎቶች',rep_note:'ለመክፈት መሳሪያው የእርስዎ መሆኑን የሚያሳይ ማስረጃ እንፈልጋለን።',
on_e:'የኦንላይን አገልግሎት',on_h:'ከቤትዎ ይዘዙ፣ መምጣት አያስፈልግም',on_sub:'ፎርሙን ይሙሉ፣ በቴሌብር፣ በኢ-ብር ወይም በባንክ ይክፈሉ፣ ከዚያ ደረሰኙን በፎቶ ወይም በPDF ይላኩልን።',
st1:'ፎርሙን ይሙሉ',st2:'ይክፈሉ',st3:'ደረሰኙን ይላኩ',f_service:'አገልግሎት',f_device:'የስልክ ብራንድ እና ሞዴል',f_imei:'IMEI ወይም ሲሪያል ቁጥር (አማራጭ)',f_name:'ስምዎ',f_phone:'ስልክ ቁጥርዎ',f_notes:'ሌላ ማወቅ ያለብን ነገር?',f_method:'የምከፍለው በ',
send_tg:'በቴሌግራም ላክ',send_wa:'በዋትስአፕ ላክ',form_hint:'ዋጋውን እርግጠኛ ካልሆኑ መጀመሪያ ጥያቄውን ይላኩ፣ ዋጋውን እናረጋግጣለን። ከዚያ ይክፈሉ እና የደረሰኙን ፎቶ ወይም PDF በዚሁ ውይይት ይላኩ።',pay_h:'የክፍያ መረጃ',
ot_e:'ተጨማሪ',ot_h:'የምንሰጣቸው ሌሎች አገልግሎቶች',ot_sub:'ከመሳሪያዎች ባሻገር ለቤት እና ለንግድ ቴክኖሎጂ እንሰራለን፣ እንተክላለን።',owner:'ባለቤት · ሙአዝ ኤሌክትሮኒክስ',
ab_e:'ስለ እኛ',ab_h:'ታማኝ ሥራ። የሚታመኑ መሳሪያዎች።',ab_p:'ሙአዝ ኤሌክትሮኒክስ በአንድ ሀሳብ ላይ ተመስርቷል፦ ሥራን በትክክል መስራት እና ደንበኛን እንደ ጎረቤት ማስተናገድ። ቦሌ፣ አዳማ ይጎብኙን ወይም በማንኛውም ጊዜ መልዕክት ይላኩልን።',
w1:'ኦሪጅናል መሳሪያዎች',w1s:'ከታወቁ ብራንዶች አዳዲስ ምርቶች።',w2:'ጥንቃቄ ያለው ጥገና',w2s:'ከመጠገናችን በፊት ችግሩን እናብራራለን።',w3:'ግልጽ ግንኙነት',w3s:'በቴሌግራም እና በዋትስአፕ ፈጣን ምላሽ።',w4:'የአካባቢ እና ወዳጃዊ',w4s:'እዚሁ ቦሌ፣ አዳማ።',
ct_e:'ያግኙን',ct_h:'ይጎብኙን ወይም መልዕክት ይላኩ',ct_sub:'በቴሌግራም እና በዋትስአፕ በፍጥነት እንመልሳለን።',c_addr:'አድራሻ',c_map:'በጉግል ካርታ ክፈት',c_hours:'የስራ ሰዓት',c_phone:'ስልክ',
rights:'መብቱ በህግ የተጠበቀ ነው።',made:'በአዳማ በፍቅር የተሰራ።',d_call:'ደውል',
cat_all:'ሁሉም',cat_phone:'ስማርትፎኖች',cat_tv:'ቲቪዎች',cat_speaker:'ስፒከሮች',cat_fridge:'ፍሪጆች',cat_other:'ላፕቶፕ እና ሌሎች',ask:'በዋትስአፕ ጠይቅ',birr:'ብር',ask_price:'ዋጋ ይጠይቁ',copy:'ቅዳ',copied:'ተቀድቷል',account:'የአካውንት ስም',other_service:'ሌላ / ያልተዘረዘረ',
e_name:'ስምዎን ያስገቡ።',e_phone:'ስልክ ቁጥርዎን ያስገቡ።',e_method:'በምን እንደሚከፍሉ ይምረጡ።',imei_ok:'ትክክል ይመስላል',imei_len:'IMEI 15 አሃዞች አሉት። እባክዎ ያረጋግጡ።',imei_luhn:'ይህ IMEI የማረጋገጫ ፈተናውን አላለፈም። ስህተት ካለ ያረጋግጡ።',toast_tg:'መልዕክቱ ተቀድቷል። በቴሌግራም ውይይቱ ውስጥ ይለጥፉት።'},
om:{
nav_shop:'Suuqa',nav_repairs:'Suphaa',nav_online:'Tajaajila online',nav_other:'Tajaajila biroo',nav_about:'Waa\'ee keenya',nav_contact:'Nu qunnamaa',
hero_pill:'Boolee, Adaamaa · Meeshaalee haaraa · Suphaa · Sooftiweerii',hero_t1:'Humnaan guutame.',hero_t2:'Sirriitti suphame.',
hero_sub:'Bilbilootaa, TV, spiikaraa fi meeshaalee manaa haaraa, akkasumas suphaa saffisaa fi of-eeggannoo qabu fi tajaajila sooftiweerii iddoo tokkotti.',
hero_cta1:'Telegraamiin nu dubbisaa',hero_cta2:'Suuqa ilaalaa',hp1:'Meeshaalee haaraa',hp2:'Suphaa ogummaa qabu',hp3:'Online ajajaa',
hero_c1:'Meeshaalee haaraa',hero_c2:'Suphaa ogummaa qabu',hero_c2s:'Bilbila · TV · Laaptoppii',hero_c3:'Sooftiweerii fi banuu',
shop_e:'Suuqa',shop_h:'Meeshaalee haaraa',shop_sub:'Gatii har\'aa fi jiraachuu isaa mirkaneessuuf ergaa nuu ergaa.',search_ph:'Oomisha barbaadi',no_results:'Oomishni hin argamne. Ergaa nuu ergaa, nu bira jiraachuu danda\'a.',
rep_e:'Suphaa',rep_h:'Waan barbaachisu ni suphna',rep_sub:'Rakkoo isaa nutti himaa, isin qajeelchina. Fidaa yookaan duraan ergaa ergaa.',rep_hw:'Suphaa hardweerii',rep_sw:'Tajaajila sooftiweerii',rep_note:'Banuuf, meeshaan kun kan keessan ta\'uu mirkaneessu nu barbaachisa.',
on_e:'Tajaajila online',on_h:'Mana keessaniitii ajajaa, dhufuun hin barbaachisu',on_sub:'Foormii guutaa, Telebirr, E-birr yookaan baankiin kaffalaa, achiis ragaa kaffaltii suuraan yookaan PDFn nuuf ergaa.',
st1:'Foormii guutaa',st2:'Kaffalaa',st3:'Ragaa kaffaltii ergaa',f_service:'Tajaajila',f_device:'Brand fi moodela bilbilaa',f_imei:'IMEI yookaan lakkoofsa sirnaa (filannoo)',f_name:'Maqaa keessan',f_phone:'Lakkoofsa bilbilaa keessanii',f_notes:'Waan biraa beekuu qabnu?',f_method:'Kan ani itti kaffalu',
send_tg:'Telegraamiin ergi',send_wa:'WhatsApp\'iin ergi',form_hint:'Gatii yoo hin beekne, dura gaaffii ergaa, gatii isaa isiniif mirkaneessina. Achiis kaffalaa, suuraa ykn PDF ragaa kaffaltii haasaa kana keessatti ergaa.',pay_h:'Odeeffannoo kaffaltii',
ot_e:'Dabalataan',ot_h:'Tajaajiloota biroo kenninu',ot_sub:'Meeshaalee ala, mana fi daldalaaf teekinooloojii hojjennee dhaabna.',owner:'Abbaa qabeenyaa · Muaz Electronics',
ab_e:'Waa\'ee keenya',ab_h:'Hojii amanamaa. Meeshaalee amanamoo.',ab_p:'Muaz Electronics yaada tokko irratti ijaarame: hojii sirriitti hojjechuu fi maamila hunda akka ollaatti simachuu. Boolee, Adaamaa keessatti nu daawwadhaa yookaan yeroo kamiyyuu ergaa nuu ergaa.',
w1:'Meeshaalee dhugaa',w1s:'Oomishoota haaraa brand beekamaniin.',w2:'Suphaa of-eeggannoo qabu',w2s:'Osoo hin suphin dura rakkoo isaa ibsina.',w3:'Walqunnamtii ifa ta\'e',w3s:'Telegraamii fi WhatsApp irratti deebii saffisaa.',w4:'Naannoo fi michummaa',w4s:'Asuma Boolee, Adaamaa.',
ct_e:'Nu qunnamaa',ct_h:'Nu daawwadhaa yookaan ergaa nuu ergaa',ct_sub:'Telegraamii fi WhatsApp irratti saffisaan deebisna.',c_addr:'Teessoo',c_map:'Google Maps keessatti bani',c_hours:'Sa\'aatii hojii',c_phone:'Bilbila',
rights:'Mirgi hundi eegameera.',made:'Adaamaa keessatti jaalalaan hojjetame.',d_call:'Bilbili',
cat_all:'Hunda',cat_phone:'Bilbilootaa',cat_tv:'TV',cat_speaker:'Spiikaraa',cat_fridge:'Firiijii',cat_other:'Laaptoppii fi kan biroo',ask:'WhatsApp\'iin gaafadhu',birr:'Birrii',ask_price:'Gatii gaafadhu',copy:'Garagalchi',copied:'Garagalfameera',account:'Maqaa akaawuntii',other_service:'Kan biraa / kan hin tarreeffamne',
e_name:'Maqaa keessan galchaa.',e_phone:'Lakkoofsa bilbilaa keessan galchaa.',e_method:'Karaa itti kaffaltan filadhaa.',imei_ok:'Sirrii fakkaata',imei_len:'IMEI lakkoofsa 15 qaba. Maaloo mirkaneessaa.',imei_luhn:'IMEI kun sakatta\'ichaa darbuu hin dandeenye. Dogoggora jiraachuu mirkaneessaa.',toast_tg:'Ergaan garagalfameera. Haasaa Telegraamii keessatti maxxansaa.'}};
var lang='en';try{lang=localStorage.getItem('muaz.lang')||'en';}catch(e){}if(!I18N[lang])lang='en';
var T=function(k){return (lang!=='en'&&I18N[lang]&&I18N[lang][k])||EN[k]||k;};
var pick=function(o){return o[lang]||o.en;};

/* ---------- links ---------- */
function intl(n){n=String(n).replace(/\D/g,'');if(n.charAt(0)==='0')n='251'+n.slice(1);return n;}
var LINK={tg:'https://t.me/+'+intl(S.telegram),wa:function(t){return 'https://wa.me/'+intl(S.whatsapp)+(t?'?text='+encodeURIComponent(t):'');},tel:'tel:+'+intl(S.phone)};
function toast(m){var t=$('#toast');t.textContent=m;t.hidden=false;clearTimeout(toast.h);toast.h=setTimeout(function(){t.hidden=true;},2800);}
function copyText(txt,msg){var ok=function(){toast(msg||T('copied'));},fb=function(){var a=document.createElement('textarea');a.value=txt;a.style.cssText='position:fixed;opacity:0';document.body.appendChild(a);a.select();try{document.execCommand('copy');ok();}catch(e){}document.body.removeChild(a);};try{navigator.clipboard.writeText(txt).then(ok,fb);}catch(e){fb();}}

/* ---------- reveal on scroll ---------- */
var io=('IntersectionObserver' in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -6% 0px'}):null;
function watch(root){$$('.rv:not(.in)',root).forEach(function(el){if(io)io.observe(el);else el.classList.add('in');});}

/* ---------- render ---------- */
var state={cat:'all',q:'',method:''};
var CATS=['all','phone','tv','speaker','fridge','other'],GRAD={phone:['37,99,235','124,58,237'],tv:['14,165,233','99,102,241'],speaker:['245,158,11','239,68,68'],fridge:['20,184,166','56,189,248'],other:['168,85,247','236,72,153']};
function applyStatic(){
  $$('[data-i18n]').forEach(function(el){if(el.dataset.en==null)el.dataset.en=el.textContent;var k=el.getAttribute('data-i18n');el.textContent=lang==='en'?el.dataset.en:(I18N[lang][k]||el.dataset.en);});
  $$('[data-i18n-ph]').forEach(function(el){if(el.dataset.enph==null)el.dataset.enph=el.getAttribute('placeholder');var k=el.getAttribute('data-i18n-ph');el.setAttribute('placeholder',lang==='en'?el.dataset.enph:(I18N[lang][k]||el.dataset.enph));});
  document.documentElement.lang=lang;
  $$('.lang button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.lang===lang);});
}
function renderCats(){$('#cats').innerHTML=CATS.map(function(c){return '<button class="chip" data-cat="'+c+'" aria-pressed="'+(state.cat===c)+'">'+esc(T('cat_'+c))+'</button>';}).join('');}
function renderProducts(){
  var q=state.q.trim().toLowerCase(),list=window.PRODUCTS.filter(function(p){return (state.cat==='all'||p.cat===state.cat)&&(!q||(p.name+' '+p.spec).toLowerCase().indexOf(q)>=0);});
  $('#pgrid').innerHTML=list.map(function(p,i){
    var g=GRAD[p.cat]||GRAD.other,msg='Hello Muaz Electronics, I am interested in '+p.name+'. Is it available?';
    return '<a class="prod rv" target="_blank" rel="noopener" aria-label="'+esc(p.name)+'" href="'+LINK.wa(msg)+'" style="--d:'+((i%4)*.06)+'s"><div class="pimg" style="--g1:rgba('+g[0]+',.5);--g2:rgba('+g[1]+',.4)"><span class="ico">'+ic(p.cat==='other'?'laptop':p.cat)+'</span></div><div class="pbody"><b>'+esc(p.name)+'</b><small>'+esc(p.spec)+'</small>'+
      (p.price?'<div class="price">'+p.price.toLocaleString('en-US')+'<small>'+esc(T('birr'))+'</small></div>':'<div class="price ask">'+esc(T('ask_price'))+'</div>')+'</div></a>';
  }).join('');
  $('#pempty').hidden=list.length>0;watch($('#pgrid'));
}
function svcCards(list){return list.map(function(s,i){return '<div class="svc rv" style="--d:'+((i%4)*.05)+'s"><span class="ico">'+ic(s.i)+'</span>'+esc(pick(s))+'</div>';}).join('');}
function renderServices(){
  $('#repGrid').innerHTML=svcCards(window.REPAIRS);$('#swGrid').innerHTML=svcCards(window.SOFTWARE);
  $('#otherGrid').innerHTML=window.OTHER.map(function(s,i){return '<div class="oc rv" style="--d:'+((i%3)*.07)+'s"><span class="ico">'+ic(s.i)+'</span><div><b>'+esc(pick(s))+'</b><p>'+esc(pick(s.d))+'</p></div></div>';}).join('');
  watch(document);
}
function renderForm(){
  var cur=$('#fService').value,opts=window.SOFTWARE.map(function(s,i){return '<option value="'+i+'">'+esc(pick(s))+'</option>';}).join('')+'<option value="x">'+esc(T('other_service'))+'</option>';
  $('#fService').innerHTML=opts;if(cur)$('#fService').value=cur;
  $('#fMethod').innerHTML=S.pay.map(function(p){return '<button type="button" data-m="'+p.id+'" aria-pressed="'+(state.method===p.id)+'">'+esc(p.name.split(' ')[0])+'</button>';}).join('');
  $('#payList').innerHTML=S.pay.map(function(p){return '<div class="pm"><div><b>'+esc(p.name)+'</b><div class="n">'+esc(p.number)+'</div><small>'+esc(T('account'))+': '+esc(p.holder)+'</small></div><button class="copy" type="button" data-copy="'+esc(p.number)+'"><span class="ico" style="width:16px;height:16px">'+ic('copy')+'</span>'+esc(T('copy'))+'</button></div>';}).join('');
}
function renderContact(){
  $('#addr').textContent=pick(S.address);$('#hours').textContent=pick(S.hours);
  var pl=$('#phoneLink');pl.textContent=S.phone;pl.href=LINK.tel;
}
function renderAll(){applyStatic();renderCats();renderProducts();renderServices();renderForm();renderContact();checkImei();}

/* ---------- order form ---------- */
function luhn(s){var t=0,alt=false;for(var i=s.length-1;i>=0;i--){var n=s.charCodeAt(i)-48;if(alt){n*=2;if(n>9)n-=9;}t+=n;alt=!alt;}return t%10===0;}
function checkImei(){
  var v=$('#fImei').value.trim(),h=$('#imeiHint');h.className='hint';h.textContent='';
  if(!v||!/^\d+$/.test(v))return;
  if(v.length!==15){h.className='hint warn';h.textContent=T('imei_len');}else if(!luhn(v)){h.className='hint warn';h.textContent=T('imei_luhn');}else{h.className='hint ok';h.textContent=T('imei_ok');}
}
function orderText(){
  var sel=$('#fService'),svc=sel.value==='x'?'Other':window.SOFTWARE[+sel.value].en,pm=S.pay.filter(function(p){return p.id===state.method;})[0];
  var L=['Hello Muaz Electronics,','I would like to order an online service.','','Service: '+svc,'Device: '+($('#fDevice').value.trim()||'-'),'IMEI/Serial: '+($('#fImei').value.trim()||'-'),'Name: '+$('#fName').value.trim(),'Phone: '+$('#fPhone').value.trim(),'Paying with: '+(pm?pm.name:'-')];
  var n=$('#fNotes').value.trim();if(n)L.push('Notes: '+n);L.push('','I will send the receipt (photo or PDF) in this chat.');return L.join('\n');
}
function sendOrder(ch){
  var err=$('#formErr'),msg='';
  if(!$('#fName').value.trim())msg=T('e_name');else if(!$('#fPhone').value.trim())msg=T('e_phone');else if(!state.method)msg=T('e_method');
  if(msg){err.textContent=msg;err.hidden=false;return;}err.hidden=true;
  var t=orderText();
  if(ch==='wa'){window.open(LINK.wa(t),'_blank');}
  else{copyText(t,T('toast_tg'));setTimeout(function(){window.open(LINK.tg,'_blank');},700);}
}

/* ---------- events ---------- */
document.addEventListener('click',function(e){
  var t=e.target.closest?e.target.closest('button,a'):null;if(!t)return;
  if(t.dataset.lang){lang=t.dataset.lang;try{localStorage.setItem('muaz.lang',lang);}catch(x){}renderAll();return;}
  if(t.dataset.cat){state.cat=t.dataset.cat;renderCats();renderProducts();return;}
  if(t.dataset.m){state.method=t.dataset.m;$$('#fMethod button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.m===state.method);});$('#formErr').hidden=true;return;}
  if(t.dataset.copy){copyText(t.dataset.copy);return;}
  if(t.id==='sendWa')sendOrder('wa');else if(t.id==='sendTg')sendOrder('tg');
  if(t.id==='burger'){var d=$('#drawer'),o=d.hidden;d.hidden=!o;t.setAttribute('aria-expanded',o);return;}
  if(t.closest&&t.closest('#drawer')&&t.tagName==='A'){$('#drawer').hidden=true;$('#burger').setAttribute('aria-expanded','false');}
});
$('#q').addEventListener('input',function(e){state.q=e.target.value;renderProducts();});
$('#fImei').addEventListener('input',checkImei);
var nav=$('#nav'),onScroll=function(){nav.classList.toggle('solid',window.scrollY>12);};addEventListener('scroll',onScroll,{passive:true});onScroll();

/* ---------- start ---------- */
$$('[data-ic]').forEach(function(el){el.innerHTML=ic(el.dataset.ic);});
$('#brandTrack').innerHTML=window.BRANDS.concat(window.BRANDS).map(function(b){return '<span>'+esc(b)+'</span>';}).join('');
$('#heroTg').href=LINK.tg;$('#ctTg').href=LINK.tg;$('#ctWa').href=LINK.wa('Hello Muaz Electronics');$('#dkTg').href=LINK.tg;$('#dkWa').href=LINK.wa('Hello Muaz Electronics');$('#dkCall').href=LINK.tel;
$('#mapFrame').src='https://maps.google.com/maps?q='+S.lat+','+S.lng+'&z=16&output=embed';$('#mapLink').href='https://www.google.com/maps?q='+S.lat+','+S.lng;
$('#yr').textContent=new Date().getFullYear();
renderAll();watch(document);
})();
