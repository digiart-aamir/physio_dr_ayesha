/* ---------------- i18n ---------------- */
const DICT = {
  "brand.sub":{en:"Dr. Ayesha Zia — Physiotherapy &amp; Hijama",ur:"ڈاکٹر عائشہ ضیاء — فزیوتھراپی اور حجامہ"},
  "nav.about":{en:"About",ur:"تعارف"},
  "nav.services":{en:"Services",ur:"خدمات"},
  "nav.process":{en:"Process",ur:"طریقہ کار"},
  "nav.pricing":{en:"Pricing",ur:"قیمت"},
  "nav.faq":{en:"FAQ",ur:"سوالات"},
  "nav.contact":{en:"Contact",ur:"رابطہ"},
  "nav.book":{en:"Book Appointment",ur:"اپائنٹمنٹ بک کریں"},
  "hero.tag":{en:"Rawalpindi &amp; Islamabad · Home &amp; Clinic Visits",ur:"راولپنڈی اور اسلام آباد · گھر اور کلینک وزٹ"},
  "hero.title":{en:"Get back to moving.<br>Get back to <span class=\"accent\">feeling like yourself.</span>",ur:"دوبارہ حرکت میں آئیں۔<br>دوبارہ <span class=\"accent\">خود کو بہتر محسوس کریں۔</span>"},
  "hero.lead":{en:"Dr. Ayesha Zia treats pain, injury and heart-recovery patients with physiotherapy, cardiac rehab and certified hijama — at Prime Care clinic or at your doorstep.",ur:"ڈاکٹر عائشہ ضیاء درد، انجری اور دل کے مریضوں کا علاج فزیوتھراپی، کارڈیک بحالی اور سرٹیفائیڈ حجامہ سے کرتی ہیں — پرائم کیئر کلینک یا آپ کے گھر پر۔"},
  "hero.cta1":{en:"Book Appointment",ur:"اپائنٹمنٹ بک کریں"},
  "hero.cta2":{en:"Call Now",ur:"ابھی کال کریں"},
  "hero.stat1":{en:"Patients treated",ur:"علاج شدہ مریض"},
  "hero.stat2":{en:"Years of experience",ur:"سالوں کا تجربہ"},
  "hero.stat3":{en:"Home visits done",ur:"مکمل گھریلو وزٹس"},
  "hero.card1t":{en:"Certified Hijama",ur:"سرٹیفائیڈ حجامہ"},
  "hero.card1s":{en:"Sunnah cupping therapy",ur:"سنت کپنگ تھراپی"},
  "hero.card2t":{en:"Cardiac Rehab",ur:"کارڈیک بحالی"},
  "hero.card2s":{en:"Guided recovery plans",ur:"رہنمائی شدہ بحالی کا منصوبہ"},
  "trust.s1":{en:"Years in practice",ur:"سالوں کا تجربہ"},
  "trust.s2":{en:"Patients treated",ur:"علاج شدہ مریض"},
  "trust.s3":{en:"Home visits",ur:"گھریلو وزٹس"},
  "trust.s4":{en:"Patient satisfaction",ur:"مریضوں کی اطمینان"},
  "about.kicker":{en:"About Dr. Ayesha Zia",ur:"ڈاکٹر عائشہ ضیاء کے بارے میں"},
  "about.title":{en:"A clinician who treats the person, not just the diagnosis.",ur:"ایک معالج جو صرف بیماری نہیں بلکہ مریض کا علاج کرتی ہیں۔"},
  "about.body":{en:"Dr. Ayesha Zia is a physiotherapist and certified hijama practitioner based in Rawalpindi, serving patients across Rawalpindi and Islamabad. She combines evidence-based physiotherapy, cardiac rehabilitation and traditional cupping therapy into treatment plans built around each patient's daily life — at Prime Care clinic or in the comfort of their own home.",ur:"ڈاکٹر عائشہ ضیاء راولپنڈی میں مقیم فزیوتھراپسٹ اور سرٹیفائیڈ حجامہ پریکٹیشنر ہیں، جو راولپنڈی اور اسلام آباد کے مریضوں کو خدمات فراہم کرتی ہیں۔ وہ فزیوتھراپی، کارڈیک بحالی اور روایتی کپنگ تھراپی کو ملا کر ہر مریض کی روزمرہ زندگی کے مطابق علاج تیار کرتی ہیں۔"},
  "about.badge":{en:"years treating<br>pain &amp; recovery",ur:"سالوں کا درد اور<br>بحالی کا تجربہ"},
  "about.c1t":{en:"Doctor of Physical Therapy (DPT)",ur:"ڈاکٹر آف فزیکل تھراپی (DPT)"},
  "about.c1d":{en:"Placeholder — replace with her university &amp; graduation year.",ur:"عارضی معلومات — یونیورسٹی اور سال درج کریں۔"},
  "about.c2t":{en:"Certified Hijama (Cupping) Practitioner",ur:"سرٹیفائیڈ حجامہ (کپنگ) پریکٹیشنر"},
  "about.c2d":{en:"Placeholder — replace with certifying body &amp; year.",ur:"عارضی معلومات — سرٹیفیکیشن ادارہ اور سال درج کریں۔"},
  "about.c3t":{en:"Cardiac Rehabilitation Training",ur:"کارڈیک بحالی کی تربیت"},
  "about.c3d":{en:"Placeholder — replace with training institute.",ur:"عارضی معلومات — تربیتی ادارہ درج کریں۔"},
  "about.c4t":{en:"9+ years in clinical practice",ur:"9+ سالوں کا کلینیکل تجربہ"},
  "about.c4d":{en:"Placeholder — replace with real years / prior workplaces.",ur:"عارضی معلومات — اصل سال اور تجربہ درج کریں۔"},
  "services.kicker":{en:"What we treat",ur:"ہم کیا علاج کرتے ہیں"},
  "services.title":{en:"Three disciplines, one recovery plan",ur:"تین شعبے، ایک بحالی کا منصوبہ"},
  "services.sub":{en:"Physiotherapy, hijama and cardiac rehab — chosen and combined based on your condition, not a fixed package.",ur:"فزیوتھراپی، حجامہ اور کارڈیک بحالی — آپ کی حالت کے مطابق منتخب کی جاتی ہیں۔"},
  "s1.title":{en:"Physiotherapy",ur:"فزیوتھراپی"},
  "s1.desc":{en:"Manual therapy and guided exercise for back pain, joint pain, sports injuries and post-surgery recovery — with a plan you can follow at home between sessions.",ur:"کمر، جوڑوں کے درد، کھیل کی انجری اور سرجری کے بعد بحالی کے لیے مینوئل تھراپی اور مشقیں۔"},
  "s1.f1":{en:"Back, neck &amp; joint pain relief",ur:"کمر، گردن اور جوڑوں کے درد میں کمی"},
  "s1.f2":{en:"Post-surgery &amp; post-injury rehab",ur:"سرجری اور انجری کے بعد بحالی"},
  "s1.f3":{en:"Sports injury recovery",ur:"کھیل کی انجری کی بحالی"},
  "s1.f4":{en:"Personalised home exercise plan",ur:"ذاتی گھریلو ورزش کا منصوبہ"},
  "s1.from":{en:"Starting from",ur:"شروع قیمت"},
  "s1.cta":{en:"Book Physiotherapy",ur:"فزیوتھراپی بک کریں"},
  "s2.title":{en:"Hijama (Cupping Therapy)",ur:"حجامہ (کپنگ تھراپی)"},
  "s2.desc":{en:"Traditional wet and dry cupping performed with sterile, single-use equipment — used for circulation, detox and chronic pain relief, following Sunnah practice.",ur:"روایتی ویٹ اور ڈرائی کپنگ، جراثیم سے پاک اور یک بار استعمال ہونے والے آلات کے ساتھ، سنت کے مطابق۔"},
  "s2.f1":{en:"Wet &amp; dry cupping",ur:"ویٹ اور ڈرائی کپنگ"},
  "s2.f2":{en:"Sterile, single-use cups &amp; needles",ur:"جراثیم سے پاک، یک بار استعمال آلات"},
  "s2.f3":{en:"Chronic pain &amp; migraine relief",ur:"دائمی درد اور مائیگرین میں کمی"},
  "s2.f4":{en:"Female practitioner, private setting",ur:"خاتون پریکٹیشنر، نجی ماحول"},
  "s2.from":{en:"Starting from",ur:"شروع قیمت"},
  "s2.cta":{en:"Book Hijama",ur:"حجامہ بک کریں"},
  "s3.title":{en:"Cardiac Rehab &amp; Cardio Physiotherapy",ur:"کارڈیک بحالی اور کارڈیو فزیوتھراپی"},
  "s3.desc":{en:"Structured, monitored exercise and breathing therapy for patients recovering from a cardiac event or living with reduced stamina — paced to what your heart is ready for.",ur:"دل کے مریضوں کے لیے منظم ورزش اور سانس کی تھراپی، دل کی صلاحیت کے مطابق۔"},
  "s3.f1":{en:"Post-cardiac event recovery",ur:"دل کے دورے کے بعد بحالی"},
  "s3.f2":{en:"Breathing &amp; graded exercise therapy",ur:"سانس اور تدریجی ورزش تھراپی"},
  "s3.f3":{en:"Stamina &amp; mobility rebuilding",ur:"قوت اور حرکت کی بحالی"},
  "s3.f4":{en:"Monthly progress review",ur:"ماہانہ پیش رفت کا جائزہ"},
  "s3.from":{en:"Starting from",ur:"شروع قیمت"},
  "s3.cta":{en:"Book Cardiac Rehab",ur:"کارڈیک بحالی بک کریں"},
  "process.kicker":{en:"How it works",ur:"طریقہ کار"},
  "process.title":{en:"From first message to full recovery",ur:"پہلے پیغام سے مکمل بحالی تک"},
  "process.sub":{en:"The same clear path whether you visit the clinic or Dr. Ayesha visits you at home.",ur:"چاہے آپ کلینک آئیں یا ڈاکٹر عائشہ آپ کے گھر آئیں، طریقہ کار وہی ہے۔"},
  "p1.t":{en:"Book",ur:"بک کریں"}, "p1.d":{en:"WhatsApp, call or the form below.",ur:"واٹس ایپ، کال یا نیچے فارم سے۔"},
  "p2.t":{en:"Assess",ur:"جانچ"}, "p2.d":{en:"History, pain points &amp; goals reviewed.",ur:"تاریخ، درد اور مقاصد کا جائزہ۔"},
  "p3.t":{en:"Plan",ur:"منصوبہ"}, "p3.d":{en:"A treatment plan built for your case.",ur:"آپ کے کیس کے لیے علاج کا منصوبہ۔"},
  "p4.t":{en:"Treat",ur:"علاج"}, "p4.d":{en:"Sessions at clinic or your home.",ur:"کلینک یا گھر پر سیشنز۔"},
  "p5.t":{en:"Review",ur:"جائزہ"}, "p5.d":{en:"Progress checked &amp; plan adjusted.",ur:"پیش رفت کی جانچ اور منصوبے میں تبدیلی۔"},
  "pricing.kicker":{en:"Packages",ur:"پیکجز"},
  "pricing.title":{en:"Simple pricing, starting points",ur:"سادہ قیمتیں، ابتدائی حد"},
  "pricing.sub":{en:"Exact cost depends on condition &amp; location. These are starting-from ranges — confirmed after assessment.",ur:"حتمی قیمت حالت اور مقام پر منحصر ہے۔ یہ ابتدائی قیمتیں ہیں۔"},
  "pc1.t":{en:"Physiotherapy Session",ur:"فزیوتھراپی سیشن"}, "pc1.from":{en:"Starting from",ur:"شروع قیمت"},
  "pc1.l1":{en:"60-minute session",ur:"60 منٹ کا سیشن"}, "pc1.l2":{en:"Clinic or home visit",ur:"کلینک یا گھریلو وزٹ"}, "pc1.l3":{en:"Home exercise plan included",ur:"گھریلو ورزش کا منصوبہ شامل"},
  "pc2.tag":{en:"Most booked",ur:"سب سے زیادہ بک شدہ"}, "pc2.t":{en:"Hijama Session",ur:"حجامہ سیشن"}, "pc2.from":{en:"Starting from",ur:"شروع قیمت"},
  "pc2.l1":{en:"Wet or dry cupping",ur:"ویٹ یا ڈرائی کپنگ"}, "pc2.l2":{en:"Sterile single-use tools",ur:"جراثیم سے پاک آلات"}, "pc2.l3":{en:"Aftercare guidance",ur:"بعد از علاج رہنمائی"},
  "pc3.t":{en:"Cardiac Rehab Program",ur:"کارڈیک بحالی پروگرام"}, "pc3.from":{en:"Starting from",ur:"شروع قیمت"},
  "pc3.l1":{en:"Weekly monitored sessions",ur:"ہفتہ وار نگرانی شدہ سیشنز"}, "pc3.l2":{en:"Breathing &amp; stamina plan",ur:"سانس اور قوت کا منصوبہ"}, "pc3.l3":{en:"Monthly progress report",ur:"ماہانہ رپورٹ"},
  "pc.cta":{en:"Book This",ur:"بک کریں"},
  "pricing.note":{en:"Prices shown are placeholders — update with Prime Care's confirmed rates.",ur:"یہ قیمتیں عارضی ہیں — پرائم کیئر کی حتمی قیمتوں سے تبدیل کریں۔"},
  "test.kicker":{en:"Patients",ur:"مریض"},
  "test.title":{en:"What patients say after treatment",ur:"علاج کے بعد مریضوں کی رائے"},
  "faq.kicker":{en:"Good to know",ur:"ضروری معلومات"},
  "faq.title":{en:"Frequently asked questions",ur:"اکثر پوچھے گئے سوالات"},
  "faq1.q":{en:"Do you visit patients at home?",ur:"کیا آپ گھر پر وزٹ کرتے ہیں؟"},
  "faq1.a":{en:"Yes — Dr. Ayesha offers both clinic visits at Prime Care and home visits across Rawalpindi and Islamabad.",ur:"جی ہاں — ڈاکٹر عائشہ کلینک اور راولپنڈی و اسلام آباد میں گھریلو وزٹ دونوں فراہم کرتی ہیں۔"},
  "faq2.q":{en:"Is hijama (cupping) safe?",ur:"کیا حجامہ محفوظ ہے؟"},
  "faq2.a":{en:"Yes, when performed by a trained practitioner with sterile, single-use equipment — exactly how every hijama session at Prime Care is done.",ur:"جی ہاں، جب تربیت یافتہ ماہر جراثیم سے پاک آلات سے کرے — جیسا کہ پرائم کیئر میں کیا جاتا ہے۔"},
  "faq3.q":{en:"How long does a session take?",ur:"سیشن کتنا وقت لیتا ہے؟"},
  "faq3.a":{en:"Most physiotherapy and hijama sessions run 45–60 minutes; cardiac rehab sessions are scheduled weekly and reviewed monthly.",ur:"زیادہ تر سیشن 45-60 منٹ کے ہوتے ہیں؛ کارڈیک بحالی ہفتہ وار ہوتی ہے۔"},
  "faq4.q":{en:"Which areas do you cover?",ur:"آپ کون سے علاقوں میں خدمات دیتے ہیں؟"},
  "faq4.a":{en:"Rawalpindi and Islamabad, including home visits — message us your area to confirm availability.",ur:"راولپنڈی اور اسلام آباد، گھریلو وزٹ سمیت — اپنا علاقہ بتائیں تاکہ تصدیق ہو سکے۔"},
  "faq5.q":{en:"What should I bring to the first visit?",ur:"پہلی وزٹ پر کیا لانا چاہیے؟"},
  "faq5.a":{en:"Any previous reports, scans or prescriptions related to your condition, and comfortable clothing you can move in.",ur:"پرانی رپورٹس، سکینز یا نسخے اور آرام دہ لباس ساتھ لائیں۔"},
  "blog.kicker":{en:"Health tips",ur:"صحت کے مشورے"},
  "blog.title":{en:"From Dr. Ayesha's notes",ur:"ڈاکٹر عائشہ کے نوٹس سے"},
  "blog1.cat":{en:"Physiotherapy",ur:"فزیوتھراپی"}, "blog1.t":{en:"Five stretches for desk-job back pain",ur:"دفتری کمر درد کے لیے پانچ اسٹریچز"}, "blog1.d":{en:"Simple movements you can do at your desk to ease lower-back tension. Full article coming soon.",ur:"سادہ حرکات جو کمر کے تناؤ میں مدد دیتی ہیں۔ مکمل مضمون جلد آ رہا ہے۔"},
  "blog2.cat":{en:"Hijama",ur:"حجامہ"}, "blog2.t":{en:"What to expect at your first hijama session",ur:"پہلے حجامہ سیشن میں کیا توقع رکھیں"}, "blog2.d":{en:"A walkthrough of the process, aftercare and how soon results are usually felt. Full article coming soon.",ur:"عمل، بعد از علاج دیکھ بھال اور نتائج کا جائزہ۔ مکمل مضمون جلد آ رہا ہے۔"},
  "blog3.cat":{en:"Cardiac Rehab",ur:"کارڈیک بحالی"}, "blog3.t":{en:"Walking after a cardiac event — how much is safe?",ur:"دل کے دورے کے بعد چلنا — کتنا محفوظ ہے؟"}, "blog3.d":{en:"General pacing guidance for early recovery weeks. Full article coming soon.",ur:"ابتدائی بحالی کے ہفتوں کے لیے رہنمائی۔ مکمل مضمون جلد آ رہا ہے۔"},
  "contact.kicker":{en:"Get in touch",ur:"رابطہ کریں"},
  "contact.title":{en:"Let's plan your recovery",ur:"آئیں آپ کی بحالی کا منصوبہ بنائیں"},
  "contact.lead":{en:"Message on WhatsApp, call directly, or fill the form and we'll confirm your slot the same day.",ur:"واٹس ایپ پیغام کریں، کال کریں، یا فارم بھریں — ہم اسی دن تصدیق کریں گے۔"},
  "contact.wa":{en:"WhatsApp",ur:"واٹس ایپ"},
  "contact.call":{en:"Call",ur:"کال کریں"},
  "contact.area":{en:"Service area",ur:"خدمات کا علاقہ"},
  "contact.areaVal":{en:"Rawalpindi &amp; Islamabad",ur:"راولپنڈی اور اسلام آباد"},
  "form.title":{en:"Request an appointment",ur:"اپائنٹمنٹ کی درخواست کریں"},
  "form.name":{en:"Full name",ur:"پورا نام"},
  "form.phone":{en:"Phone / WhatsApp number",ur:"فون / واٹس ایپ نمبر"},
  "form.service":{en:"Service needed",ur:"مطلوبہ سروس"},
  "form.mode":{en:"Preferred visit type",ur:"وزٹ کی قسم"},
  "form.modeClinic":{en:"Clinic visit",ur:"کلینک وزٹ"},
  "form.modeHome":{en:"Home visit",ur:"گھریلو وزٹ"},
  "form.msg":{en:"Anything we should know? (optional)",ur:"مزید کوئی معلومات؟ (اختیاری)"},
  "form.submit":{en:"Send via WhatsApp",ur:"واٹس ایپ سے بھیجیں"},
  "form.note":{en:"This opens WhatsApp with your details pre-filled — nothing is sent until you press send there.",ur:"یہ واٹس ایپ کھولے گا، تفصیلات پہلے سے موجود ہوں گی — جب تک آپ خود نہ بھیجیں کچھ نہیں جائے گا۔"},
  "foot.about":{en:"Physiotherapy, hijama and cardiac rehab with Dr. Ayesha Zia — serving Rawalpindi &amp; Islamabad at the clinic or at home.",ur:"ڈاکٹر عائشہ ضیاء کے ساتھ فزیوتھراپی، حجامہ اور کارڈیک بحالی — راولپنڈی اور اسلام آباد میں۔"},
  "foot.linksT":{en:"Quick links",ur:"فوری روابط"},
  "foot.contactT":{en:"Contact",ur:"رابطہ"},
  "foot.copy":{en:"© 2026 Prime Care — Dr. Ayesha Zia. All rights reserved.",ur:"© 2026 پرائم کیئر — ڈاکٹر عائشہ ضیاء۔ جمیع حقوق محفوظ ہیں۔"},
  "foot.placeholder":{en:"Contact details on this page are placeholders — update before publishing.",ur:"اس صفحے پر رابطہ کی تفصیلات عارضی ہیں — پبلش کرنے سے پہلے تبدیل کریں۔"}
};

function setLanguage(lang){
  document.documentElement.lang = lang === 'ur' ? 'ur' : 'en';
  document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const entry = DICT[key];
    if(entry) el.innerHTML = entry[lang] || entry.en;
  });
  document.querySelectorAll('.lang-toggle button').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  localStorage.setItem('pc_lang', lang);
}
document.querySelectorAll('.lang-toggle button').forEach(btn=>{
  btn.addEventListener('click', ()=> setLanguage(btn.dataset.lang));
});

/* ---------------- Header scroll state ---------------- */
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', ()=>{
  header.classList.toggle('scrolled', window.scrollY > 40);
}, {passive:true});

/* ---------------- Mobile menu ---------------- */
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
burgerBtn.addEventListener('click', ()=> mobileMenu.classList.add('open'));
closeMenu.addEventListener('click', ()=> mobileMenu.classList.remove('open'));
mobileMenu.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> mobileMenu.classList.remove('open')));

/* ---------------- Scroll reveal ---------------- */
const revealEls = document.querySelectorAll('.reveal, .reveal-scale, .reveal-l, .reveal-r');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, {threshold:0.15});
revealEls.forEach(el=> io.observe(el));

/* ---------------- Counters ---------------- */
function animateCounter(el){
  const target = +el.dataset.target;
  const dur = 1400;
  const start = performance.now();
  function tick(now){
    const p = Math.min((now-start)/dur, 1);
    el.textContent = Math.floor(p * target);
    if(p < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  }
  requestAnimationFrame(tick);
}
const counterIo = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      animateCounter(entry.target);
      counterIo.unobserve(entry.target);
    }
  });
}, {threshold:0.5});
document.querySelectorAll('.counter').forEach(el=> counterIo.observe(el));

/* ---------------- Process step highlight ---------------- */
const processSteps = document.querySelectorAll('.p-step');
const processFill = document.getElementById('processFill');
const processIo = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      processFill.style.transform = 'scaleX(1)';
      processSteps.forEach((s,i)=> setTimeout(()=> s.classList.add('on'), i*180));
    }
  });
}, {threshold:0.4});
processIo.observe(document.getElementById('processSteps'));

/* ---------------- 3D tilt (skip on touch devices) ---------------- */
const isTouch = window.matchMedia('(pointer: coarse)').matches;

/* ---------------- Custom Cursor ---------------- */
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
if (!isTouch && cursorDot && cursorRing) {
  window.addEventListener('mousemove', (e) => {
    cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    // slight delay effect for ring
    setTimeout(() => {
      cursorRing.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }, 40);
  });
  
  document.querySelectorAll('a, button, input, textarea, select, .fab-btn').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

if(!isTouch){
  document.querySelectorAll('[data-tilt]').forEach(card=>{
    card.addEventListener('mousemove', (e)=>{
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left)/r.width - 0.5;
      const y = (e.clientY - r.top)/r.height - 0.5;
      card.style.transform = `rotateY(${x*16}deg) rotateX(${-y*16}deg)`;
    });
    card.addEventListener('mouseleave', ()=>{ card.style.transform = 'rotateY(0) rotateX(0)'; });
  });
  const heroVisual = document.getElementById('heroVisual');
  window.addEventListener('mousemove', (e)=>{
    const x = (e.clientX/window.innerWidth - 0.5) * 10;
    const y = (e.clientY/window.innerHeight - 0.5) * 10;
    heroVisual.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  }, {passive:true});
}

/* ---------------- FAQ accordion ---------------- */
document.querySelectorAll('.faq-item').forEach(item=>{
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  q.addEventListener('click', ()=>{
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(o=>{
      o.classList.remove('open'); o.querySelector('.faq-a').style.maxHeight = null;
    });
    if(!isOpen){ item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
  });
});

/* ---------------- Testimonials marquee ---------------- */
const testimonialData = [
  {name:"S. R.", role:"Back pain patient", initials:"SR", text:"Home visits made all the difference — I could barely stand for a week and now I walk without pain."},
  {name:"M. A.", role:"Hijama client", initials:"MA", text:"Very clean, very professional. Dr. Ayesha explained every step before starting."},
  {name:"F. K.", role:"Cardiac rehab patient", initials:"FK", text:"The breathing exercises after my procedure genuinely helped my stamina come back gradually."},
  {name:"N. H.", role:"Sports injury patient", initials:"NH", text:"Recovered from a knee injury faster than my surgeon expected, thanks to the home exercise plan."},
  {name:"A. Q.", role:"Migraine / hijama client", initials:"AQ", text:"My migraines have reduced noticeably since starting regular cupping sessions."}
];
const track = document.getElementById('marqueeTrack');
function starIcons(){ return "★★★★★"; }
function buildCard(t){
  const div = document.createElement('div');
  div.className = 't-card';
  div.innerHTML = `<div class="stars">${starIcons()}</div><p>"${t.text}"</p><div class="t-who"><div class="t-avatar">${t.initials}</div><div><b>${t.name}</b><span>${t.role}</span></div></div>`;
  return div;
}
[...testimonialData, ...testimonialData].forEach(t=> track.appendChild(buildCard(t)));

/* ---------------- Article Overlays ---------------- */
function openArticle(key) {
  const overlay = document.getElementById(`overlay-${key}`);
  if (!overlay) return;
  document.body.style.overflow = 'hidden';
  overlay.classList.add('open');
  // scroll the overlay to top
  const scroll = overlay.querySelector('.overlay-scroll');
  if (scroll) scroll.scrollTop = 0;
}
function closeArticle(key) {
  const overlay = document.getElementById(`overlay-${key}`);
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}
// Click on blog cards
document.querySelectorAll('[data-article]').forEach(card => {
  card.addEventListener('click', () => openArticle(card.dataset.article));
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openArticle(card.dataset.article); });
});
// Click on backdrop to close
document.querySelectorAll('.article-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      const key = overlay.id.replace('overlay-', '');
      closeArticle(key);
    }
  });
});
// Escape key to close
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.article-overlay.open').forEach(overlay => {
      const key = overlay.id.replace('overlay-', '');
      closeArticle(key);
    });
  }
});

/* ---------------- Booking form -> WhatsApp ---------------- */
document.getElementById('bookingForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('f_name').value;
  const phone = document.getElementById('f_phone').value;
  const service = document.getElementById('f_service').value;
  const mode = document.getElementById('f_mode').value;
  const msg = document.getElementById('f_msg').value;
  const text = `Hi Prime Care, I'd like to book an appointment.\nName: ${name}\nPhone: ${phone}\nService: ${service}\nVisit type: ${mode}\nNote: ${msg || '-'}`;
  window.open(`https://wa.me/923000000000?text=${encodeURIComponent(text)}`, '_blank');
});

/* ---------------- Restore saved language ---------------- */
const savedLang = localStorage.getItem('pc_lang');
if(savedLang === 'ur') setLanguage('ur');

/* ---------------- Doctor Avatar – Cursor-Tracking Eyes ---------------- */
(function() {
  const avatar   = document.getElementById('doctorAvatar');
  const pupilL   = document.getElementById('pupilLeft');
  const pupilR   = document.getElementById('pupilRight');
  const glintL   = document.getElementById('glintLeft');
  const glintR   = document.getElementById('glintRight');
  const blinkL   = document.getElementById('blinkLeft');
  const blinkR   = document.getElementById('blinkRight');
  const smile    = document.getElementById('drSmile');
  if (!avatar || !pupilL) return;

  // Eye centres in SVG coordinate space
  const EYES = [
    { pupil: pupilL, glint: glintL, blink: blinkL, cx: 157, cy: 166 },
    { pupil: pupilR, glint: glintR, blink: blinkR, cx: 203, cy: 166 }
  ];
  const MAX_TRAVEL = 6;

  // Convert page coords → SVG coords
  function toSVG(pageX, pageY) {
    const rect = avatar.getBoundingClientRect();
    const svgW = 320, svgH = 380;
    return {
      x: ((pageX - rect.left) / rect.width)  * svgW,
      y: ((pageY - rect.top)  / rect.height) * svgH
    };
  }

  window.addEventListener('mousemove', (e) => {
    const svgPos = toSVG(e.clientX, e.clientY);
    EYES.forEach(({ pupil, glint, cx, cy }) => {
      const dx = svgPos.x - cx;
      const dy = svgPos.y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const travel = Math.min(dist, MAX_TRAVEL * 10) / 10 * MAX_TRAVEL / Math.max(dist / 10, 1);
      // normalise to max travel
      const nx = (dx / dist) * Math.min(dist * 0.08, MAX_TRAVEL);
      const ny = (dy / dist) * Math.min(dist * 0.08, MAX_TRAVEL);
      pupil.setAttribute('cx', cx + nx);
      pupil.setAttribute('cy', cy + ny);
      glint.setAttribute('cx', cx + nx + 2);
      glint.setAttribute('cy', cy + ny - 2);
    });
  });

  // Smile when cursor is in the avatar area
  avatar.addEventListener('mouseenter', () => {
    smile.setAttribute('d', 'M156 205c10 16 44 16 52 0');
  });
  avatar.addEventListener('mouseleave', () => {
    smile.setAttribute('d', 'M162 200c9 10 38 10 46 0');
    // reset pupils to centre
    EYES.forEach(({ pupil, glint, cx, cy }) => {
      pupil.setAttribute('cx', cx); pupil.setAttribute('cy', cy);
      glint.setAttribute('cx', cx + 3); glint.setAttribute('cy', cy - 3);
    });
  });

  // Periodic blink
  function blink() {
    EYES.forEach(({ blink }) => {
      blink.setAttribute('height', '26');
      setTimeout(() => blink.setAttribute('height', '0'), 120);
    });
  }
  function scheduleBlink() {
    const delay = 2500 + Math.random() * 3000;
    setTimeout(() => { blink(); scheduleBlink(); }, delay);
  }
  scheduleBlink();

  // Sparkle float (already handled by CSS keyframes)
})();

/* ---------------- Chatbot Logic ---------------- */
const chatbotBtn = document.getElementById('chatbotBtn');
const chatWindow = document.getElementById('chatWindow');
const closeChat = document.getElementById('closeChat');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

const GROQ_API_KEY = "api will be here";
const MODEL_NAME = "openai/gpt-oss-120b";
const FALLBACK_MODEL = "llama3-8b-8192";

let conversationHistory = [
  { role: "system", content: "You are a helpful, professional virtual assistant for Prime Care, Dr. Ayesha Zia's clinic. Dr. Ayesha specializes in Physiotherapy, Hijama (Cupping), and Cardiac Rehab in Rawalpindi & Islamabad. Keep answers concise, empathetic, and professional." }
];

chatbotBtn.addEventListener('click', () => {
  chatWindow.classList.remove('hidden');
  chatInput.focus();
});

closeChat.addEventListener('click', () => {
  chatWindow.classList.add('hidden');
});

function appendMessage(role, text) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-msg ${role}-msg`;
  msgDiv.innerHTML = `<div class="msg-content">${text}</div>`;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return msgDiv;
}

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userText = chatInput.value.trim();
  if(!userText) return;

  appendMessage('user', userText);
  conversationHistory.push({ role: "user", content: userText });
  chatInput.value = '';

  const typingIndicator = appendMessage('ai', '<span class="typing-indicator">Typing...</span>');

  try {
    let response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: MODEL_NAME,
        messages: conversationHistory
      })
    });

    if (!response.ok) {
      console.warn("Primary model failed, trying fallback model...");
      response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: FALLBACK_MODEL,
          messages: conversationHistory
        })
      });
    }

    if (!response.ok) throw new Error("API Error");

    const data = await response.json();
    const aiText = data.choices[0].message.content;

    typingIndicator.remove();
    appendMessage('ai', aiText);
    conversationHistory.push({ role: "assistant", content: aiText });

  } catch (error) {
    console.error(error);
    typingIndicator.remove();
    appendMessage('ai', "I'm sorry, I encountered an error connecting to my servers. Please try again later or contact us via WhatsApp.");
  }
});