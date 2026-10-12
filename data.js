/* ============================================================
   MUAZ ELECTRONICS - the file to edit.
   Change phone numbers, prices, products and services here.
   (Phone numbers below are TEST numbers. Replace with the shop's.)
   ============================================================ */
window.SITE = {
  name: 'Muaz Electronics',
  phone: '0976684052',          // calls
  whatsapp: '0716384913',       // WhatsApp chat
  telegram: '0922638067',       // Telegram chat (by phone number)
  lat: 8.5693687, lng: 39.2844738,
  address: { en: 'Bole, Adama, Ethiopia', am: 'ቦሌ፣ አዳማ፣ ኢትዮጵያ', om: 'Boolee, Adaamaa, Itiyoophiyaa' },
  hours:   { en: 'Mon - Sat · 8:30 AM - 7:00 PM', am: 'ሰኞ - ቅዳሜ · 8:30 - 7:00', om: 'Wiixata - Sanbata · 8:30 - 7:00' },
  pay: [
    { id: 'telebirr', name: 'Telebirr', number: '0976684052', holder: 'Muaz Electronics' },
    { id: 'ebirr',    name: 'E-birr',   number: '0922638067', holder: 'Muaz Electronics' },
    { id: 'cbe',      name: 'CBE (Commercial Bank of Ethiopia)', number: '1000772128348', holder: 'Mohammed Younis Ibrahim' }
  ]
};

/* Products: cat = phone | tv | speaker | fridge | other. price in Birr (0 = "ask for price").
   NOTE: these prices are SAMPLES. Replace them with real prices. */
window.PRODUCTS = [
  { cat: 'phone',   name: 'Samsung Galaxy A15',        spec: '6.5" AMOLED · 128 GB',            price: 15500 },
  { cat: 'phone',   name: 'Tecno Spark 20',            spec: '6.6" 90Hz · 256 GB',              price: 11900 },
  { cat: 'phone',   name: 'Infinix Hot 40 Pro',        spec: '6.78" 120Hz · 256 GB',            price: 13500 },
  { cat: 'phone',   name: 'Xiaomi Redmi 13C',          spec: '6.74" · 128 GB',                  price: 10900 },
  { cat: 'phone',   name: 'iPhone 13',                 spec: '6.1" OLED · 128 GB',              price: 0 },
  { cat: 'tv',      name: 'Hisense 43" Smart TV',      spec: 'Full HD · Wi-Fi · Netflix ready', price: 24500 },
  { cat: 'tv',      name: 'TCL 50" 4K UHD',            spec: '4K · Google TV',                  price: 33900 },
  { cat: 'tv',      name: 'Samsung 55" Crystal UHD',   spec: '4K · Smart TV',                   price: 49500 },
  { cat: 'tv',      name: 'LG 32" LED TV',             spec: 'HD · Built-in receiver',          price: 14900 },
  { cat: 'speaker', name: 'JBL Flip 6',                spec: 'Waterproof · 12 h battery',       price: 9800 },
  { cat: 'speaker', name: 'JBL Charge 5',              spec: 'Powerful bass · Power bank',      price: 15500 },
  { cat: 'speaker', name: 'Sony Soundbar',             spec: '2.1 channel · Bluetooth',         price: 0 },
  { cat: 'fridge',  name: 'Hisense 2-door Refrigerator', spec: '~300 L · No frost',             price: 42000 },
  { cat: 'fridge',  name: 'LG Refrigerator',           spec: 'Inverter compressor',             price: 0 },
  { cat: 'fridge',  name: 'Samsung Refrigerator',      spec: 'Digital inverter',                price: 0 },
  { cat: 'other',   name: 'HP 15 Laptop',              spec: 'Core i5 · 8 GB · 512 GB SSD',     price: 52000 },
  { cat: 'other',   name: 'Wireless earbuds',          spec: 'Bluetooth 5.3 · Charging case',   price: 1800 },
  { cat: 'other',   name: 'Power bank 20,000 mAh',     spec: 'Fast charging',                   price: 1900 },
  { cat: 'other',   name: 'Smart security camera',     spec: '1080p · Night vision · Wi-Fi',    price: 3200 }
];

/* Hardware repairs. i = icon name. */
window.REPAIRS = [
  { i: 'phone',   en: 'Screen replacement',              am: 'ስክሪን መቀየር',                    om: 'Iskiriinii jijjiiruu' },
  { i: 'battery', en: 'Battery replacement',             am: 'ባትሪ መቀየር',                     om: 'Baatirii jijjiiruu' },
  { i: 'plug',    en: 'Charging port repair',            am: 'የቻርጅ ፖርት ጥገና',                  om: 'Suphaa chaarjii' },
  { i: 'drop',    en: 'Water damage repair',             am: 'በውሃ የተበላሸ ስልክ ጥገና',            om: 'Suphaa miidhaa bishaanii' },
  { i: 'tv',      en: 'TV panel & board repair',         am: 'የቲቪ ፓነል እና ቦርድ ጥገና',           om: 'Suphaa paaneelii fi boordii TV' },
  { i: 'speaker', en: 'Speaker & audio repair',          am: 'የስፒከር እና የድምጽ ጥገና',            om: 'Suphaa spiikaraa fi sagalee' },
  { i: 'laptop',  en: 'Laptop repair',                   am: 'የላፕቶፕ ጥገና',                    om: 'Suphaa laaptoppii' },
  { i: 'fridge',  en: 'Refrigerator & appliance repair', am: 'የፍሪጅ እና የቤት እቃ ጥገና',           om: 'Suphaa firiijii fi meeshaalee manaa' }
];

/* Software services (also used in the online order form). */
window.SOFTWARE = [
  { i: 'unlock', en: 'FRP / Google account unlock',        am: 'የFRP / ጉግል አካውንት መክፈት',          om: 'FRP / Akaawuntii Google banuu' },
  { i: 'shield', en: 'Screen lock, PIN & pattern removal', am: 'የስክሪን መቆለፊያ፣ ፒን እና ፓተርን ማስወገድ', om: 'Cufaa iskiriinii, PIN fi pattern kaasuu' },
  { i: 'chip',   en: 'Flashing, updates & boot-loop fix',  am: 'ፍላሺንግ፣ አፕዴት እና የቡት ሉፕ ጥገና',     om: 'Flashing, haaromsa fi sirreessa boot-loop' },
  { i: 'sim',    en: 'Network (SIM) unlock',               am: 'የኔትወርክ (ሲም) መክፈት',              om: 'Network (SIM) banuu' },
  { i: 'search', en: 'IMEI check & device info',           am: 'የIMEI ምርመራ እና የመሳሪያ መረጃ',        om: 'Sakatta\'a IMEI fi odeeffannoo meeshaa' },
  { i: 'disk',   en: 'Data recovery & backup',             am: 'ዳታ ማስመለስ እና ባክአፕ',              om: 'Daataa deebisuu fi backup' }
];

/* Other services. */
window.OTHER = [
  { i: 'globe',   en: 'Website development',               am: 'ድረ-ገጽ ልማት',                   om: 'Misoomsa marsariitii',
    d: { en: 'Fast, modern websites for shops and businesses.', am: 'ለሱቆች እና ለንግዶች ፈጣን እና ዘመናዊ ድረ-ገጾች።', om: 'Marsariitiiwwan saffisaa fi ammayyaawaa kuusaa fi daldalaaf.' } },
  { i: 'app',     en: 'Custom mobile apps',                am: 'በፍላጎት የሚሰሩ የሞባይል አፕሊኬሽኖች',   om: 'Appii mobaayilaa kan barbaaddan',
    d: { en: 'Apps built around how your business works.', am: 'ንግድዎ በሚሰራበት መንገድ የሚሰሩ አፖች።', om: 'Appiiwwan akka daldalli keessan hojjetu hojjetaman.' } },
  { i: 'cctv',    en: 'Security camera installation',      am: 'የደህንነት ካሜራ ተከላ',              om: 'Kaameraa nageenyaa dhaabuu',
    d: { en: 'CCTV for homes, shops and offices, with phone viewing.', am: 'ለቤት፣ ለሱቅ እና ለቢሮ ካሜራ በስልክ መከታተል።', om: 'CCTV mana, suuqii fi ofiisaaf, bilbilaan ilaaluu.' } },
  { i: 'wifi',    en: 'Network & Wi-Fi setup',             am: 'የኔትወርክ እና ዋይፋይ ዝርጋታ',         om: 'Qophaa\'ina network fi Wi-Fi',
    d: { en: 'Strong, reliable internet across your space.', am: 'በሁሉም ቦታ ጠንካራ እና አስተማማኝ ኢንተርኔት።', om: 'Interneetii cimaa fi amanamaa iddoo hunda.' } },
  { i: 'pos',     en: 'Business & stock software',         am: 'የንግድ እና የክምችት ሶፍትዌር',        om: 'Sooftiweerii daldalaa fi kuusaa',
    d: { en: 'Track stock, sales and customers on your phone.', am: 'ክምችት፣ ሽያጭ እና ደንበኞችን በስልክ ይከታተሉ።', om: 'Kuusaa, gurgurtaa fi maamiltoota bilbilaan hordofaa.' } },
  { i: 'printer', en: 'Computer & printer setup',          am: 'የኮምፒውተር እና ፕሪንተር ዝግጅት',      om: 'Qophaa\'ina kompiitaraa fi printerii',
    d: { en: 'Installation, software and troubleshooting.', am: 'ተከላ፣ ሶፍትዌር እና ችግር ፈቺ።', om: 'Dhaabbii, sooftiweerii fi furmaata rakkoo.' } }
];

/* Brands shown in the moving strip (text only). */
window.BRANDS = ['Samsung', 'Apple', 'Xiaomi', 'Tecno', 'Infinix', 'itel', 'Oppo', 'Hisense', 'TCL', 'LG', 'JBL', 'Sony', 'HP', 'Lenovo'];
