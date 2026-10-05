// ---------- DATA ----------
const services = [
  { id:"api-supply", icon:"diagram-project", color:"#2f6fed", title:"API Supply", desc:"High quality Active Pharmaceutical Ingredients, essential medicines, intermediates & more, sourced from GMP-certified manufacturers.", products:["Essential medicine APIs","Oncology & specialty APIs","Generic APIs","Custom sourcing on request","Regulatory documentation (DMF/CEP)"] },
  { id:"essences-natural-oils", icon:"leaf", color:"#2f9e44", title:"Essences & Natural Oils", desc:"Natural essential oils and aromatic ingredients for food, fragrance and personal care applications.", products:["Citrus essential oils","Floral essences","Herbal & botanical oils","Aromatic compounds","Natural flavor bases"] },
  { id:"extracts", icon:"flask", color:"#12b3a8", title:"Extracts", desc:"Botanical and plant-based extracts for pharmaceutical, nutraceutical and food industries.", products:["Standardized herbal extracts","Fruit & vegetable extracts","Nutraceutical actives","Antioxidant extracts","Custom extraction ratios"] },
  { id:"intermediates", icon:"dna", color:"#7c4dff", title:"Intermediates", desc:"Pharma and food grade chemical intermediates sourced from a vetted global supplier network.", products:["Pharma-grade intermediates","Food-grade intermediates","Fine chemicals","Custom synthesis sourcing","Batch documentation & COA"] },
  { id:"finished-products", icon:"box-open", color:"#4a5fc1", title:"Finished Products", desc:"Pharmaceutical, healthcare and consumer health finished products ready for market.", products:["OTC pharmaceuticals","Nutraceutical formulations","Healthcare consumables","Private label finished goods","Contract-packed products"] },
  { id:"contract-manufacturing", icon:"industry", color:"#e8862e", title:"Contract Manufacturing", desc:"Flexible and reliable contract manufacturing solutions across pharma and nutrition categories.", products:["Tablet & capsule manufacturing","Liquid & syrup formulations","Powder blends & sachets","Private label production","Small & large batch runs"] },
  { id:"technology-transfer", icon:"file-signature", color:"#1f4e9c", title:"Technology Transfer", desc:"End-to-end technology transfer support, including complex molecules such as Enoxaparin.", products:["Enoxaparin technology transfer","Process documentation","Analytical method transfer","Scale-up support","Technical training"] },
  { id:"regulatory-affairs", icon:"shield-halved", color:"#0e8f8f", title:"Regulatory Affairs", desc:"Regulatory strategy, compliance and market access support for international markets.", products:["Regulatory strategy consulting","Compliance audits","Market access planning","Local agent representation","Post-approval variations"] },
  { id:"product-registration", icon:"file-invoice", color:"#c89b3c", title:"Product Registration", desc:"Global product registration and dossier submission across multiple regulatory jurisdictions.", products:["Dossier compilation (CTD/eCTD)","Registration submission","Renewal & variation filing","Labeling & artwork review","Regulatory correspondence"] },
  { id:"sport-nutrition", icon:"dumbbell", color:"#e2574c", title:"Sport Nutrition", desc:"Premium ingredients and finished products for the sports nutrition industry.", products:["Protein powders & blends","Amino acid formulations","Pre/post-workout products","Sports supplement ingredients","Private label sports nutrition"] },
  { id:"infant-baby-nutrition", icon:"baby", color:"#e0629b", title:"Infant Formula & Baby Nutrition", desc:"Complete sourcing and development solutions for infant formula and baby nutrition brands.", products:["Infant formula (stage 1-3)","Follow-on formula","Baby cereals","Specialty infant nutrition","Formula development support"] },
  { id:"pet-food", icon:"paw", color:"#c07a3e", title:"Pet Food & Animal Nutrition", desc:"High quality ingredients and finished solutions for the pet food and animal nutrition industry.", products:["Pet food ingredients","Companion animal supplements","Livestock feed additives","Veterinary nutrition support","Private label pet food"] },
  { id:"cbd-cannabinoids", icon:"cannabis", color:"#3aa655", title:"CBD & Cannabinoids", desc:"CBD isolates, distillates, oils and finished products sourced through a compliant global network.", products:["CBD isolate","Full & broad spectrum distillate","CBD oils & tinctures","Finished CBD products","Compliance & lab testing support"] },
  { id:"brand-acquisition", icon:"tags", color:"#caa23c", title:"Brand Acquisition", desc:"Build, grow and acquire powerful brands worldwide across health and nutrition categories.", products:["Brand acquisition advisory","Portfolio expansion","Brand licensing","Market entry brands","Rebranding support"] },
  { id:"exclusive-agency", icon:"handshake", color:"#3566c9", title:"Exclusive Agency", desc:"Exclusive representation from reliable manufacturing and brand partners in target markets.", products:["Exclusive distribution agreements","Market representation","Local registration support","Sales & marketing coordination","Partner vetting"] },
  { id:"international-business-dev", icon:"earth-europe", color:"#1fa6a0", title:"International Business Dev.", desc:"Expand your business into new territories through established global partnerships.", products:["Market entry strategy","Partner identification","Trade facilitation","Cross-border deal structuring","Ongoing account management"] },
  { id:"strategic-sourcing", icon:"boxes-packing", color:"#6c5ce7", title:"Strategic Sourcing", desc:"Global sourcing solutions built around quality, reliability and cost efficiency.", products:["Supplier qualification","Multi-source risk mitigation","Cost & quality benchmarking","Long-term supply contracts","Spot sourcing"] },
  { id:"supply-chain-solutions", icon:"truck-fast", color:"#22317a", title:"Supply Chain Solutions", desc:"End-to-end supply chain and logistics management for international trade.", products:["Freight & logistics coordination","Cold-chain handling","Customs & documentation","Warehousing solutions","Inventory planning"] }
];

const industries = [
  ["capsules","Pharmaceutical"],["heart-pulse","Healthcare"],["microscope","Biotechnology"],
  ["seedling","Food Ingredients"],["baby-carriage","Infant Nutrition"],["dumbbell","Sports Nutrition"],
  ["cannabis","CBD"],["kit-medical","Medical Devices"],["paw","Veterinary"]
];
const partners = ["INDIA","DSM","KERRY","Glanbia","LONZA","BASF","IFF","Arla","Fonterra","Kendamil","SILVERSON","OLIMP"];
const projects = [
  { title:"Enoxaparin Technology Transfer", desc:"Complete technology transfer for Enoxaparin production.", icon:"vial", grad:"linear-gradient(135deg,#1f4e9c,#0a1b3d)" },
  { title:"Dry Infant Formula Line", desc:"Turnkey solutions for infant formula manufacturing.", icon:"baby", grad:"linear-gradient(135deg,#e0629b,#7c3a63)" },
  { title:"CBD International Sourcing", desc:"Premium CBD ingredients sourced globally.", icon:"cannabis", grad:"linear-gradient(135deg,#3aa655,#0f4d29)" },
  { title:"Sports Nutrition Brand Dev.", desc:"From concept to market with strong global brands.", icon:"dumbbell", grad:"linear-gradient(135deg,#e2574c,#7a1f1a)" },
  { title:"Baby Formula Development", desc:"Custom formula development and regulatory support.", icon:"prescription-bottle", grad:"linear-gradient(135deg,#caa23c,#7a5a1a)" },
  { title:"API Strategic Sourcing", desc:"High quality APIs and intermediates worldwide.", icon:"boxes-packing", grad:"linear-gradient(135deg,#6c5ce7,#2a1f6e)" }
];
const news = [
  { date:"Aug 2026", title:"Niaz Net Tehran Expands API Sourcing Network", excerpt:"New supplier partnerships added across Europe to strengthen essential-medicine API supply." },
  { date:"Jul 2026", title:"New Partnership in Sports Nutrition", excerpt:"A fresh distribution agreement brings premium sports nutrition ingredients to regional brands." },
  { date:"Jun 2026", title:"Attending CPHI 2026", excerpt:"Meet our team at this year's CPHI exhibition to discuss API supply and technology transfer." }
];

// ---------- ELEMENTS ----------
const $ = id => document.getElementById(id);
const servicePage = $('servicePage');
const spIcon = $('spIcon'), spIconWrap = $('spIconWrap'), spEyebrow = $('spEyebrow');
const spTitle = $('spTitle'), spDesc = $('spDesc'), spList = $('spList');
const closeServiceBtn = $('closeServiceBtn');
const menuToggle = $('menuToggle'), mainNav = $('mainNav');
const servicesDropdown = $('servicesDropdown'), servicesTrigger = $('servicesTrigger'), servicesPanel = $('servicesPanel');
let lastFocused = null;

// ---------- RENDER ----------
const svcGrid = $('servicesGrid');
services.forEach(svc => {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'svc-card';
  card.dataset.service = svc.id;
  card.style.setProperty('--svc-color', svc.color);
  card.innerHTML = `<i class="fa-solid fa-${svc.icon}" aria-hidden="true"></i><span class="svc-title">${svc.title}</span><span class="svc-desc">${svc.desc}</span><span class="svc-more">View products <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>`;
  card.addEventListener('click', () => openServicePage(svc.id));
  svcGrid.appendChild(card);
});

industries.forEach(([icon, name]) => {
  $('industryRow').insertAdjacentHTML('beforeend', `<div class="ind-item"><i class="fa-solid fa-${icon}" aria-hidden="true"></i><span>${name}</span></div>`);
});

const pTrack = $('partnerTrack');
partners.forEach(name => pTrack.insertAdjacentHTML('beforeend', `<div class="partner-logo">${name}</div>`));

const projTrack = $('projectTrack');
projects.forEach(p => projTrack.insertAdjacentHTML('beforeend',
  `<div class="proj-card"><div class="proj-thumb" style="--proj-grad:${p.grad}"><i class="fa-solid fa-${p.icon}" aria-hidden="true"></i></div><h4>${p.title}</h4><p>${p.desc}</p></div>`));

news.forEach(n => $('newsGrid').insertAdjacentHTML('beforeend',
  `<div class="news-card"><span class="news-date">${n.date}</span><h4>${n.title}</h4><p>${n.excerpt}</p></div>`));

// ---------- SERVICES DROPDOWN ----------
services.forEach(svc => {
  const a = document.createElement('a');
  a.href = '#service/' + svc.id;
  a.innerHTML = `<i class="fa-solid fa-${svc.icon}" style="color:${svc.color}" aria-hidden="true"></i> <span>${svc.title}</span>`;
  a.addEventListener('click', e => {
    e.preventDefault();
    closeServicesDropdown();
    closeMobileNav();
    openServicePage(svc.id);
  });
  servicesPanel.appendChild(a);
});

function openServicesDropdown() { servicesDropdown.classList.add('open'); servicesTrigger.setAttribute('aria-expanded', 'true'); }
function closeServicesDropdown() { servicesDropdown.classList.remove('open'); servicesTrigger.setAttribute('aria-expanded', 'false'); }
servicesTrigger.addEventListener('click', e => {
  e.stopPropagation();
  servicesDropdown.classList.contains('open') ? closeServicesDropdown() : openServicesDropdown();
});
document.addEventListener('click', e => {
  if (!servicesDropdown.contains(e.target)) closeServicesDropdown();
  if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) closeMobileNav();
});

// ---------- CAROUSELS ----------
function buildDots(container, count, track) {
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const d = document.createElement('span');
    d.setAttribute('role', 'button');
    d.setAttribute('tabindex', '0');
    d.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    if (i === 0) d.classList.add('active');
    const go = () => {
      const max = track.scrollWidth - track.clientWidth;
      track.scrollTo({ left: count > 1 ? max * (i / (count - 1)) : 0, behavior: 'smooth' });
    };
    d.addEventListener('click', go);
    d.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
    container.appendChild(d);
  }
}
function syncDots(track, dotsId) {
  const dots = $(dotsId).children;
  if (!dots.length) return;
  const max = track.scrollWidth - track.clientWidth;
  const ratio = max > 0 ? track.scrollLeft / max : 0;
  const idx = Math.min(dots.length - 1, Math.round(ratio * (dots.length - 1)));
  [...dots].forEach((d, i) => d.classList.toggle('active', i === idx));
}
buildDots($('partnerDots'), Math.max(1, Math.ceil(partners.length / 3)), pTrack);
buildDots($('projectDots'), projects.length, projTrack);
pTrack.addEventListener('scroll', () => syncDots(pTrack, 'partnerDots'), { passive: true });
projTrack.addEventListener('scroll', () => syncDots(projTrack, 'projectDots'), { passive: true });

document.querySelectorAll('.car-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const track = $(btn.dataset.target);
    if (!track.firstElementChild) return;
    const step = track.firstElementChild.offsetWidth + 16;
    track.scrollBy({ left: btn.classList.contains('next') ? step : -step, behavior: 'smooth' });
  });
});

// ---------- MOBILE MENU ----------
function closeMobileNav() {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
}
menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
});
mainNav.querySelectorAll(':scope > a').forEach(a => a.addEventListener('click', closeMobileNav));
window.addEventListener('resize', () => { if (window.innerWidth > 1080) closeMobileNav(); });

// ---------- ACTIVE NAV LINK + BACK TO TOP ----------
const sectionIds = ['about', 'services', 'industries', 'partners', 'projects', 'news', 'contact'];
let ticking = false;
function onScroll() {
  ticking = false;
  $('toTop').classList.toggle('show', window.scrollY > 500);
  if (servicePage.classList.contains('active')) return;
  let current = 'top';
  if (window.scrollY > 60) {
    sectionIds.forEach(id => {
      const el = $(id);
      if (el && window.scrollY >= el.offsetTop - 110) current = id;
    });
  }
  mainNav.querySelectorAll(':scope > a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
}
window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();
$('toTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ---------- LANGUAGE (demo toggle) ----------
$('langBtn').addEventListener('click', () => {
  const l = $('langLabel');
  l.textContent = l.textContent === 'EN' ? 'FA' : 'EN';
});

// ---------- NEWSLETTER ----------
$('newsForm').addEventListener('submit', e => {
  e.preventDefault();
  const email = $('newsEmail').value.trim();
  const msg = $('newsMsg');
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  msg.textContent = valid ? "Thanks — you're subscribed!" : 'Please enter a valid email address.';
  msg.style.color = valid ? '#7cc98a' : '#e06c6c';
  if (valid) e.target.reset();
});

// ---------- DOWNLOAD PLACEHOLDERS ----------
['dlProfile', 'dlPresentation'].forEach(id => {
  $(id).addEventListener('click', e => {
    e.preventDefault();
    alert('Add the real file link to this button (id="' + id + '") in index.html once the PDF is ready — e.g. <a id="' + id + '" href="company-profile.pdf" download>.');
  });
});

// ---------- SERVICE DETAIL PAGE ----------
function openServicePage(id) {
  const svc = services.find(s => s.id === id);
  if (!svc) return;
  if (!servicePage.classList.contains('active')) lastFocused = document.activeElement;
  spIcon.className = 'fa-solid fa-' + svc.icon;
  spIconWrap.style.setProperty('--svc-color', svc.color);
  spEyebrow.textContent = 'Service';
  spTitle.textContent = svc.title;
  spDesc.textContent = svc.desc;
  spList.innerHTML = svc.products.map(p => `<li>${p}</li>`).join('');
  servicePage.classList.add('active');
  servicePage.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  if (location.hash !== '#service/' + id) history.pushState({ service: id }, '', '#service/' + id);
  servicePage.scrollTop = 0;
  closeServiceBtn.focus({ preventScroll: true });
}

function closeServicePage(keepHash) {
  if (!servicePage.classList.contains('active')) return;
  servicePage.classList.remove('active');
  servicePage.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (!keepHash && location.hash.startsWith('#service/')) {
    history.pushState({}, '', location.pathname + location.search);
  }
  if (lastFocused && lastFocused.focus) lastFocused.focus({ preventScroll: true });
}

closeServiceBtn.addEventListener('click', () => closeServicePage(false));
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  closeServicesDropdown();
  closeMobileNav();
  closeServicePage(false);
});

// any in-page anchor (header, footer, enquiry button) closes the overlay first
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a || a.getAttribute('href') === '#' || a.getAttribute('href').startsWith('#service/')) return;
  if (servicePage.classList.contains('active')) closeServicePage(true);
});

window.addEventListener('popstate', () => {
  const match = location.hash.match(/^#service\/(.+)$/);
  if (match && services.some(s => s.id === match[1])) openServicePage(match[1]);
  else closeServicePage(true);
});

document.querySelectorAll('.footer-svc-link').forEach(a => {
  a.addEventListener('click', e => { e.preventDefault(); openServicePage(a.dataset.service); });
});

// deep link: opening the site directly on #service/xxx
(function initFromHash() {
  const match = location.hash.match(/^#service\/(.+)$/);
  if (match && services.some(s => s.id === match[1])) openServicePage(match[1]);
})();
