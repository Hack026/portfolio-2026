const RESUME_URL = "https://drive.google.com/file/d/1zG5Cz3mahu6sG-uubQaCVUhBP08eTS1B/view?usp=sharing";
// TODO: Replace with the final YouTube URL for the video resume.
const VIDEO_RESUME_URL = "";

// PROJECT DATA: this single collection drives cards and the scroll journey.
const PROJECTS = [
  {
    id: "foundertruth",
    title: "foundertruth",
    category: "AI STARTUP INTELLIGENCE PLATFORM",
    description: "Building and evolving an AI-powered platform for early-stage founders.",
    tags: ["PRODUCT", "STRATEGY", "AI", "GROWTH"],
    metrics: ["160+ registered users", "2.9K+ page views"],
    url: "https://foundertruth.in/",
    linkedin: "https://www.linkedin.com/company/foundertruth/home",
    image: ""
  },
  {
    id: "jubashakti",
    title: "JubaShakti",
    category: "YOUTH OPPORTUNITY & ELIGIBILITY PLATFORM",
    description: "A browser-based platform helping West Bengal youth discover government schemes, check eligibility, find opportunities and prepare applications.",
    tags: ["PRODUCT", "HTML", "CSS", "JAVASCRIPT"],
    metrics: [],
    url: "https://jubashakti.online/",
    linkedin: "",
    image: ""
  },
  {
    id: "govguide",
    title: "GovGuide India",
    category: "PUBLIC TECHNOLOGY",
    description: "A platform designed to simplify access to government schemes and public resources.",
    tags: ["AI", "PUBLIC TECHNOLOGY"],
    metrics: ["Top 15 national builds in Google's Build the Future Showcase."],
    url: "",
    linkedin: "",
    image: ""
  },
  {
    id: "atliq",
    title: "AtliQ Hardwares",
    category: "SALES · FINANCE · ANALYTICS",
    description: "Sales and finance analysis using Excel, Power Query and Power Pivot.",
    tags: ["SALES", "FINANCE", "ANALYTICS"],
    metrics: ["1M+ rows", "40% reduction in reporting and analysis time"],
    url: "",
    linkedin: "",
    image: ""
  }
].flatMap((project, index) => {
  const valid = project && typeof project.id === 'string' && project.id.trim()
    && typeof project.title === 'string' && project.title.trim()
    && typeof project.category === 'string' && project.category.trim()
    && typeof project.description === 'string' && project.description.trim()
    && Array.isArray(project.tags) && project.tags.every((tag) => typeof tag === 'string');
  if (!valid) {
    console.warn(`[Selected Work] Invalid project at index ${index}`);
    return [];
  }
  return [{
    ...project,
    tags: project.tags.filter(Boolean),
    metrics: Array.isArray(project.metrics) ? project.metrics.filter((metric) => typeof metric === 'string' && metric.trim()) : [],
    url: typeof project.url === 'string' ? project.url.trim() : '',
    linkedin: typeof project.linkedin === 'string' ? project.linkedin.trim() : '',
    image: typeof project.image === 'string' ? project.image.trim() : ''
  }];
});

// HOW I WORK: the same renderer and stack physics support any number of principles.
const HOW_I_WORK = [
  { id: 'find', number: '01', title: 'FIND THE PROBLEM', eyebrow: 'WORKING PRINCIPLE', body: 'Start with what is actually broken, confusing or missing.' },
  { id: 'talk', number: '02', title: 'TALK TO PEOPLE', eyebrow: 'WORKING PRINCIPLE', body: 'User feedback is usually more useful than assumptions.' },
  { id: 'build', number: '03', title: 'BUILD', eyebrow: 'WORKING PRINCIPLE', body: 'Make something simple enough to test.' },
  { id: 'change', number: '04', title: 'CHANGE IT', eyebrow: 'WORKING PRINCIPLE', body: 'Keep what works. Remove what doesn’t.' }
];

// WRITING: one archive data source drives both the reading index and its motion.
const WRITING = [
  {
    title: "Why Juspay Exists",
    description: "A look at the problem the company set out to solve.",
    url: "https://www.linkedin.com/pulse/why-juspay-exists-startup-solved-problem-most-businesses-das-rlb1f"
  },
  {
    title: "Why Cashfree Exists",
    description: "A look at what happens after a payment succeeds.",
    url: "https://www.linkedin.com/pulse/why-cashfree-exists-what-happens-after-payment-succeeds-padmanava-das-gbrhf"
  },
  {
    title: "Why Open Exists",
    description: "A look at the problem hiding inside business banking.",
    url: "https://www.linkedin.com/pulse/why-open-exists-startup-saw-problem-hiding-inside-business-das-zknnf"
  },
  {
    title: "Why Pine Labs Exists",
    description: "A look at the problem hidden behind payments.",
    url: "https://www.linkedin.com/pulse/why-pine-labs-exists-startup-hidden-behind-payment-padmanava-das-1cayc"
  },
  {
    title: "Why M2P Fintech Exists",
    description: "A look at the infrastructure behind India's financial products.",
    url: "https://www.linkedin.com/pulse/why-m2p-fintech-exists-infrastructure-behind-indias-financial-das-ag10c"
  },
  {
    title: "Why Fi Money Exists",
    description: "A look at why the company wanted to make money easier to understand.",
    url: "https://www.linkedin.com/pulse/why-fi-money-exists-company-wanted-make-easier-understand-das-waflf"
  },
  {
    title: "Why Signzy Exists",
    description: "A look at the problem of trusting a customer you have never met.",
    url: "https://www.linkedin.com/pulse/why-signzy-exists-problem-trusting-customer-you-never-padmanava-das-bwhxf"
  },
  {
    title: "Why Perfios Exists",
    description: "A look at why the product is only the beginning.",
    url: "https://www.linkedin.com/pulse/why-perfios-exists-product-only-beginning-padmanava-das-n1wff"
  },
  {
    title: "Why Yubi Exists: The Startup Behind the Parts of Credit You Never See",
    description: "A look at the infrastructure behind the parts of credit most people never see.",
    url: "https://www.linkedin.com/pulse/why-yubi-exists-startup-behind-parts-credit-you-never-padmanava-das-673gf"
  }
];

const CERTIFICATES = [
  {
    title: "Excel: Mother of Business Intelligence",
    issuer: "Codebasics",
    year: "2025",
    date: "Apr 09, 2025",
    type: "CERTIFICATE",
    description: "Completed an Excel-focused program covering real-time business requirements and analysis using a dataset with more than 1 million records.",
    url: "https://codebasics.io/certificate/CB-51-351310",
    image: ""
  },
  {
    title: "McKinsey.org Forward Program",
    issuer: "McKinsey & Company",
    year: "2025",
    date: "Dec 2025",
    type: "LEARNING · DIGITAL BADGE",
    description: "Completed the McKinsey.org Forward online learning program focused on practical problem-solving, communication, adaptability, resilience, and foundational digital skills.",
    url: "https://www.credly.com/badges/7bf9a86f-e366-4b19-ac5f-f634f24d3194/public_url",
    image: "",
    skills: ["Business Communication Skills", "Product Management", "+3 additional skills"]
  },
  {
    title: "GFS Certificate",
    issuer: "Scaler × Google for Startups",
    type: "PROGRAM",
    description: "A hands-on program focused on building AI-first products through prompt engineering, deep research workflows, rapid prototyping with Google AI Studio, multimodal tools, GitHub, and Cloud Run.",
    image: ""
  }
];

document.documentElement.classList.add('js-ready');

const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#site-menu');
const menuLinks = [...menu.querySelectorAll('a[href^="#"]')];

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('is-open', open);
  menu.inert = !open;
  if (open) menuLinks[0]?.focus();
  else menuButton.focus();
}

menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});
menuLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false);
});

const revealTargets = [...document.querySelectorAll(
  '.section-heading, .hero-content, .about-grid, .method-heading, .writing-heading, .certificate-heading, .contact-content'
)].filter((element) => !element.closest('#method .method-intro'));
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const certificateRevealObserver = 'IntersectionObserver' in window && !reducedMotion
  ? new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 })
  : null;
if ('IntersectionObserver' in window && !reducedMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((element) => element.classList.add('reveal'));
  revealTargets.forEach((element) => revealObserver.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add('is-visible'));
}

const sections = [...document.querySelectorAll('main section[id]')];
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      menuLinks.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach((section) => sectionObserver.observe(section));
}

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const documentTop = (element) => element.getBoundingClientRect().top + window.scrollY;

function renderWritingIndex() {
  if (!writingIndex || !WRITING.length) return;
  writingItems = WRITING.map((entry, index) => {
    const item = document.createElement('li');
    item.className = 'writing-item';
    item.dataset.writingIndex = String(index);

    const article = document.createElement('article');
    article.className = 'writing-article';
    article.setAttribute('aria-labelledby', `writing-title-${index + 1}`);

    const backgroundNumber = document.createElement('span');
    backgroundNumber.className = 'writing-background-number';
    backgroundNumber.setAttribute('aria-hidden', 'true');
    backgroundNumber.textContent = `${String(index + 1).padStart(2, '0')}.`;

    const ordinal = document.createElement('span');
    ordinal.className = 'writing-ordinal';
    ordinal.textContent = String(index + 1).padStart(2, '0');

    const title = document.createElement('h3');
    title.className = 'writing-article-title';
    title.id = `writing-title-${index + 1}`;
    title.textContent = entry.title;

    const description = document.createElement('p');
    description.className = 'writing-article-description';
    description.textContent = entry.description;

    const action = document.createElement('div');
    action.className = 'writing-article-action';
    const safeUrl = typeof entry.url === 'string' ? entry.url.trim() : '';
    if (/^(https?:\/\/|mailto:)/i.test(safeUrl)) {
      const link = document.createElement('a');
      link.className = 'writing-read';
      link.href = safeUrl;
      link.append(document.createTextNode('READ '));
      const arrow = document.createElement('b');
      arrow.setAttribute('aria-hidden', 'true');
      arrow.textContent = '↗';
      link.append(arrow);
      if (/^https?:\/\//i.test(safeUrl)) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
      action.append(link);
    } else {
      const status = document.createElement('span');
      status.className = 'writing-read writing-read-unavailable';
      status.textContent = 'READ';
      action.append(status);
    }

    const copy = document.createElement('div');
    copy.className = 'writing-article-copy';
    copy.append(title, description, action);
    article.append(backgroundNumber, ordinal, copy);
    item.append(article);
    return item;
  });
  writingIndex.replaceChildren(...writingItems);
  writingActiveIndex = -1;
  writingJourney?.style.setProperty('--writing-count', String(WRITING.length));
  if (writingCounter) writingCounter.textContent = `01 / ${String(WRITING.length).padStart(2, '0')}`;
  if (writingCurrentTitle) writingCurrentTitle.textContent = WRITING[0].title;
}

const certificateList = document.querySelector('.certificate-list');
const certificateCount = document.querySelector('.certificate-count');

function renderCertificate(certificate, index) {
  const number = String(index + 1).padStart(2, '0');
  const item = document.createElement('li');
  item.className = 'certificate-item';
  item.style.transitionDelay = `${Math.min(index, 5) * 45}ms`;

  const record = document.createElement('article');
  record.className = 'certificate-record';
  record.tabIndex = 0;
  record.setAttribute('aria-labelledby', `certificate-title-${index + 1}`);

  const ordinal = document.createElement('span');
  ordinal.className = 'certificate-number';
  ordinal.setAttribute('aria-hidden', 'true');
  ordinal.textContent = number;

  const metadata = document.createElement('div');
  metadata.className = 'certificate-metadata';
  const mainMetadata = [certificate.type, certificate.year].filter(Boolean).join(' · ');
  if (mainMetadata) {
    const label = document.createElement('span');
    label.className = 'certificate-type';
    label.textContent = mainMetadata;
    metadata.append(label);
  }
  if (certificate.date) {
    const date = document.createElement('span');
    date.className = 'certificate-date';
    date.textContent = `ISSUED ${certificate.date}`;
    metadata.append(date);
  }

  const copy = document.createElement('div');
  copy.className = 'certificate-copy';
  const title = document.createElement('h3');
  title.className = 'certificate-title';
  title.id = `certificate-title-${index + 1}`;
  title.textContent = certificate.title;

  const issuer = document.createElement('p');
  issuer.className = 'certificate-issuer';
  issuer.textContent = certificate.issuer;

  const description = document.createElement('p');
  description.className = 'certificate-description';
  description.textContent = certificate.description;
  copy.append(title, issuer, description);

  if (Array.isArray(certificate.skills) && certificate.skills.length) {
    const skills = document.createElement('ul');
    skills.className = 'certificate-skills';
    skills.setAttribute('aria-label', 'Skills');
    certificate.skills.filter(Boolean).forEach((skill) => {
      const skillItem = document.createElement('li');
      skillItem.textContent = skill;
      skills.append(skillItem);
    });
    copy.append(skills);
  }

  const side = document.createElement('div');
  side.className = 'certificate-side';
  const preview = document.createElement('div');
  preview.className = 'certificate-preview';
  const imageUrl = typeof certificate.image === 'string' ? certificate.image.trim() : '';
  if (imageUrl) {
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = `${certificate.issuer} ${certificate.title} certificate for Padmanava Das`;
    image.loading = 'lazy';
    preview.append(image);
  } else {
    const fallback = document.createElement('div');
    fallback.className = 'certificate-document-fallback';
    fallback.setAttribute('aria-hidden', 'true');
    const fallbackNumber = document.createElement('span');
    fallbackNumber.className = 'certificate-fallback-number';
    fallbackNumber.textContent = number;
    const fallbackIssuer = document.createElement('span');
    fallbackIssuer.className = 'certificate-fallback-issuer';
    fallbackIssuer.textContent = certificate.issuer;
    const fallbackType = document.createElement('span');
    fallbackType.className = 'certificate-fallback-type';
    fallbackType.textContent = certificate.type || 'ARCHIVE RECORD';
    const fallbackDate = document.createElement('span');
    fallbackDate.className = 'certificate-fallback-date';
    fallbackDate.textContent = certificate.date || certificate.year || '';
    fallback.append(fallbackNumber, fallbackIssuer, fallbackType, fallbackDate);
    preview.append(fallback);
  }
  side.append(preview);

  const safeUrl = typeof certificate.url === 'string' ? certificate.url.trim() : '';
  if (/^https?:\/\//i.test(safeUrl)) {
    const link = document.createElement('a');
    link.className = 'certificate-view';
    link.href = safeUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.append(document.createTextNode('VIEW '));
    const arrow = document.createElement('span');
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '↗';
    link.append(arrow);
    side.append(link);
  }

  record.append(ordinal, metadata, copy, side);
  item.append(record);
  if (certificateRevealObserver) certificateRevealObserver.observe(item);
  else item.classList.add('is-visible');
  return item;
}

function renderCertificates() {
  if (!certificateList) return;
  certificateList.replaceChildren(...CERTIFICATES.map(renderCertificate));
  if (certificateCount) certificateCount.textContent = `${String(CERTIFICATES.length).padStart(2, '0')} RECORDS`;
}

function isWritingStaticLayout() {
  return reducedMotion || window.matchMedia('(max-width: 720px)').matches;
}

function writingSlot(index, anchor) {
  const step = Math.min(132, Math.max(96, window.innerHeight * 0.17));
  const rest = Math.max(54, step * 0.5);
  if (index === anchor) return 0;
  if (index < anchor) return -step - Math.max(0, anchor - index - 1) * rest;
  return step + Math.max(0, index - anchor - 1) * rest;
}

function updateWritingIndex() {
  if (!writingItems.length) return;
  const lastIndex = WRITING.length - 1;
  const staticLayout = isWritingStaticLayout();
  let progress;
  if (staticLayout && scene.writing.mobileStops.length === WRITING.length) {
    const readingPosition = scene.smoothScroll + window.innerHeight * 0.55;
    progress = progressAcross(scene.writing.mobileStops, readingPosition) * lastIndex;
  } else {
    progress = clamp((scene.smoothScroll - scene.writing.start) / Math.max(1, scene.writing.scrollSpan), 0, 1) * lastIndex;
  }
  const activeIndex = clamp(Math.round(progress), 0, lastIndex);
  if (!staticLayout && writingStageBody) {
    const focusPercent = 25.4 + (progress / Math.max(1, lastIndex)) * 49.2;
    writingStageBody.style.setProperty('--writing-focus', `${focusPercent.toFixed(2)}%`);
  } else {
    writingStageBody?.style.removeProperty('--writing-focus');
  }
  if (activeIndex !== writingActiveIndex) {
    writingItems.forEach((item, index) => {
      item.classList.toggle('is-active', index === activeIndex);
      if (index === activeIndex) item.setAttribute('aria-current', 'step');
      else item.removeAttribute('aria-current');
      const link = item.querySelector('.writing-read[href]');
      if (link) link.tabIndex = staticLayout || index === activeIndex ? 0 : -1;
    });
    if (writingCounter) writingCounter.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(WRITING.length).padStart(2, '0')}`;
    if (writingCurrentTitle) writingCurrentTitle.textContent = WRITING[activeIndex].title;
    writingActiveIndex = activeIndex;
    if (staticLayout) scene.measureDirty = true;
  }

  writingItems.forEach((item, index) => {
    if (staticLayout) {
      item.style.removeProperty('--writing-y');
      item.style.removeProperty('--writing-scale');
      item.style.removeProperty('--writing-opacity');
      return;
    }
    const lowerAnchor = Math.floor(progress);
    const upperAnchor = Math.min(lastIndex, lowerAnchor + 1);
    const blend = progress - lowerAnchor;
    const y = writingSlot(index, lowerAnchor) * (1 - blend) + writingSlot(index, upperAnchor) * blend;
    const distance = Math.abs(index - progress);
    item.style.setProperty('--writing-y', `${y.toFixed(2)}px`);
    item.style.setProperty('--writing-scale', String((1 - Math.min(0.08, distance * 0.025)).toFixed(3)));
    item.style.setProperty('--writing-opacity', String(Math.max(0.5, 1 - distance * 0.16).toFixed(3)));
  });

  if (writingMarker) {
    if (staticLayout && scene.writing.mobileStops.length === WRITING.length) {
      writingMarker.style.top = `${Math.max(0, scene.writing.mobileStops[activeIndex] - scene.writing.mobileListTop)}px`;
    } else {
      writingMarker.style.top = `${20 + (progress / Math.max(1, lastIndex)) * 60}%`;
    }
  }
}

const careerStage = document.querySelector('.timeline-stage');
const careerRows = [...document.querySelectorAll('.timeline-row')];
const careerSvg = document.querySelector('.career-track');
const careerPath = document.querySelector('.career-road-center');
const careerVehicle = document.querySelector('.career-vehicle');
const careerStationDots = [...document.querySelectorAll('[data-career-station]')];
const methodJourney = document.querySelector('.method-journey');
const methodStage = document.querySelector('.method-stage');
const methodList = document.querySelector('.method-list');
const methodStateLabel = document.querySelector('.method-state span');
let methodCards = [];
function renderMethodCards() {
  if (!methodList || !HOW_I_WORK.length) return;
  methodList.replaceChildren(...HOW_I_WORK.map((principle) => {
    const card = document.createElement('article');
    card.className = 'method-row';
    card.dataset.methodId = principle.id;
    card.setAttribute('aria-hidden', 'true');
    const title = document.createElement('h3');
    title.textContent = principle.title;
    const body = document.createElement('p');
    body.textContent = principle.body;
    const index = document.createElement('span');
    index.className = 'method-card-number';
    index.setAttribute('aria-hidden', 'true');
    index.textContent = principle.number;
    const accent = document.createElement('span');
    accent.className = 'method-card-accent';
    accent.setAttribute('aria-hidden', 'true');
    card.append(title, body, index, accent);
    return card;
  }));
  methodCards = [...methodList.children];
  methodJourney.style.setProperty('--method-count', String(HOW_I_WORK.length));
  methodJourney.style.setProperty('--method-journey-height', `${Math.max(255, (HOW_I_WORK.length - 1) * 95 + 255)}svh`);
  methodJourney.classList.add('method-motion-ready');
}
if (!reducedMotion) renderMethodCards();
const writingJourney = document.querySelector('[data-writing-journey]');
const writingStage = document.querySelector('[data-writing-stage]');
const writingStageBody = document.querySelector('.writing-stage-body');
const writingIndex = document.querySelector('.writing-index');
const writingCounter = document.querySelector('.writing-counter');
const writingCurrentTitle = document.querySelector('.writing-current-title');
const writingReadingLine = document.querySelector('.writing-reading-line');
const writingMarker = document.querySelector('.writing-reading-marker');
let writingItems = [];
let writingActiveIndex = -1;
const metroJourney = document.querySelector('.metro-journey');
const metroStage = document.querySelector('.metro-stage');
const metroTrain = document.querySelector('.metro-train');
const metroInterior = document.querySelector('.metro-interior');
const metroTrack = document.querySelector('.metro-track');
const metroStationBackground = document.querySelector('.metro-station-background');
const metroStationForeground = document.querySelector('.metro-station-foreground');
const metroStationStop = document.querySelector('.metro-station-stop');
let activeProjectIndex = -1;
let selectedWorkFailed = false;
const staticWorkFallbackCard = metroInterior?.querySelector('[data-static-fallback]')?.cloneNode(true) || null;

const metroDoorLeft = [...document.querySelectorAll('.metro-door-leaf-left')];
const metroDoorRight = [...document.querySelectorAll('.metro-door-leaf-right')];
const metroStateLabel = document.querySelector('.metro-state span');
const hero = document.querySelector('.hero');
const heroMarker = document.querySelector('.hero-travel-marker');
const heroTrack = document.querySelector('.hero-travel-track');
const about = document.querySelector('.about');
const aboutPath = document.querySelector('.about-route-line');
const aboutMarker = document.querySelector('.about-route-marker');
const contact = document.querySelector('.contact');
const contactPath = document.querySelector('.contact-route-line');
const contactMarker = document.querySelector('.contact-route-marker');
const imageSlots = [...document.querySelectorAll('.project-image-slot')];

const scene = {
  rawScroll: window.scrollY,
  smoothScroll: window.scrollY,
  scrollVelocity: 0,
  scrollDirection: 0,
  lastRawScroll: window.scrollY,
  lastFrame: 0,
  frame: 0,
  measureDirty: true,
  career: { position: 0, velocity: 0, acceleration: 0, lastValidPosition: 0, pathAngle: 0, pathAngularVelocity: 0, active: -1 },
  method: { start: 0, scrollSpan: 1, progress: 0 },
  writing: { start: 0, scrollSpan: 1, mobileStops: [], mobileListTop: 0 },
  metro: { position: 0, velocity: 0, acceleration: 0, target: 0, friction: 1.15, door: 0, doorFrom: 0, doorTarget: 0, doorElapsed: 0, pendingProjectIndex: -1, bodyAngle: 0, angularVelocity: 0, initialized: false, stops: [], start: 0, end: 0, stageWidth: 0, stageHeight: 0, trainWidth: 0, trainHeight: 0, pageStart: 0, scrollSpan: 1, stickyOffset: 0 },
  careerStations: [],
  routeLength: 0,
  routeScaleX: 1,
  routeScaleY: 1,
  routeTop: 0,
  routeCarWidth: 64,
  routeCarHeight: 64,
  heroTop: 0,
  heroHeight: 1,
  heroLength: 0,
  careerProgress: 0,
  aboutTop: 0,
  aboutHeight: 1,
  aboutLength: 0,
  contactTop: 0,
  contactHeight: 1,
  contactLength: 0
};

function progressAcross(stations, position) {
  if (stations.length < 2 || position <= stations[0]) return 0;
  if (position >= stations[stations.length - 1]) return 1;
  for (let index = 0; index < stations.length - 1; index++) {
    const start = stations[index];
    const end = stations[index + 1];
    if (position <= end) {
      const segment = clamp((position - start) / Math.max(1, end - start), 0, 1);
      const eased = segment * segment * (3 - 2 * segment);
      return (index + eased) / (stations.length - 1);
    }
  }
  return 1;
}

function activeStation(stations, position) {
  if (!stations.length) return -1;
  let closest = 0;
  for (let index = 1; index < stations.length; index++) {
    if (Math.abs(stations[index] - position) < Math.abs(stations[closest] - position)) closest = index;
  }
  return closest;
}

function setStationState(rows, index, previous) {
  if (index === previous) return false;
  rows.forEach((row, rowIndex) => {
    row.classList.toggle('is-active', rowIndex === index);
    row.classList.toggle('is-past', rowIndex < index);
    if (rowIndex === index) row.setAttribute('aria-current', 'step');
    else row.removeAttribute('aria-current');
  });
  return true;
}

function setStationDotState(dots, index) {
  dots.forEach((dot, dotIndex) => dot.classList.toggle('is-active', dotIndex === index));
}

function createMetroTimeline(projectCount) {
  return { count: Math.max(1, projectCount) };
}

const metroTimeline = createMetroTimeline(PROJECTS.length);

function metroBeatAt(progress) {
  const count = metroTimeline.count;
  const clampedProgress = clamp(progress, 0, 1);
  if (clampedProgress >= 1) {
    return { state: 'TRAIN_EXITED', stop: -1, projectIndex: -1, phase: 1, doorsOpen: false, position: scene.metro.end };
  }

  const scaledProgress = clampedProgress * count;
  const stop = Math.min(count - 1, Math.floor(scaledProgress));
  const phase = scaledProgress - stop;
  const number = String(stop + 1).padStart(2, '0');
  const ease = (value) => {
    const t = clamp(value, 0, 1);
    return t * t * (3 - 2 * t);
  };
  const previousPosition = stop === 0 ? scene.metro.start : scene.metro.stops[stop - 1];
  const stopPosition = scene.metro.stops[stop];
  let position = stopPosition;
  let state = `ARRIVE_${number}`;
  let doorsOpen = false;

  if (phase < 0.24) {
    position = previousPosition + (stopPosition - previousPosition) * ease(phase / 0.24);
    state = `ARRIVE_${number}`;
  } else if (phase < 0.66) {
    state = `OPEN_${number}`;
    doorsOpen = true;
  } else if (stop === count - 1 && phase >= 0.82) {
    const departure = ease((phase - 0.82) / 0.18);
    position = stopPosition + (scene.metro.end - stopPosition) * departure;
    state = 'FINAL_DEPARTURE';
  } else {
    state = `SETTLE_${number}`;
  }

  return { state, stop, projectIndex: stop, phase, doorsOpen, position };
}

function metroTargetAt(progress) {
  return metroBeatAt(progress).position;
}

// RENDERING: project objects are the sole source for every active card.
function createSelectedWorkCard(project, index) {
  const card = document.createElement('article');
  card.className = 'project-row project-card';
  card.id = `project-${project.id}`;
  card.dataset.projectId = project.id;
  card.dataset.projectIndex = String(index);
  card.setAttribute('aria-labelledby', `project-title-${project.id}`);

  const number = document.createElement('span');
  number.className = 'project-number';
  number.textContent = String(index + 1).padStart(2, '0');

  const main = document.createElement('div');
  main.className = 'project-main';
  const title = document.createElement('h3');
  title.id = `project-title-${project.id}`;
  title.textContent = project.title;
  const description = document.createElement('p');
  description.textContent = project.description;
  const tags = document.createElement('span');
  tags.className = 'project-tags';
  tags.textContent = project.tags.join(' · ');
  main.append(title, description, tags);

  if (project.image) {
    const slot = document.createElement('div');
    slot.className = 'project-image-slot';
    const image = document.createElement('img');
    image.className = 'project-image';
    image.alt = `${project.title} project interface`;
    image.decoding = 'async';
    image.addEventListener('load', () => { slot.hidden = image.naturalWidth === 0; }, { once: true });
    image.addEventListener('error', () => { slot.hidden = true; }, { once: true });
    image.src = project.image;
    slot.append(image);
    main.append(slot);
  }

  const detail = document.createElement('div');
  detail.className = 'project-detail';
  const category = document.createElement('span');
  category.textContent = project.category;
  detail.append(category);
  if (project.metrics.length) {
    const metrics = document.createElement('p');
    project.metrics.forEach((line, lineIndex) => {
      if (lineIndex) metrics.append(document.createElement('br'));
      metrics.append(document.createTextNode(line));
    });
    detail.append(metrics);
  }
  const links = [
    project.url ? { label: 'VIEW PROJECT', url: project.url, className: 'project-cta' } : null,
    project.linkedin ? { label: 'COMPANY LINKEDIN', url: project.linkedin, className: 'company-link' } : null
  ].filter(Boolean);
  links.forEach((item) => {
    const link = document.createElement('a');
    link.className = item.className;
    link.href = item.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.append(document.createTextNode(item.label));
    const arrow = document.createElement('b');
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '↗';
    link.append(arrow);
    detail.append(link);
  });

  card.append(number, main, detail);
  return card;
}

function setSelectedWorkStatus(index) {
  if (!metroStateLabel) return;
  const project = PROJECTS[index];
  metroStateLabel.textContent = project
    ? `${String(index + 1).padStart(2, '0')} / ${String(PROJECTS.length).padStart(2, '0')} · ${project.title}`
    : `${PROJECTS.length} STOPS · ONE JOURNEY`;
}

function renderSelectedWorkProject(index) {
  if (!metroInterior) return false;
  const nextIndex = Number.isInteger(index) && index >= 0 && index < PROJECTS.length ? index : -1;
  if (activeProjectIndex === nextIndex) return true;
  const project = PROJECTS[nextIndex];
  const card = project ? createSelectedWorkCard(project, nextIndex) : null;
  activeProjectIndex = nextIndex;
  metroInterior.replaceChildren(...(card ? [card] : []));
  metroInterior.style.pointerEvents = 'none';
  metroInterior.inert = true;
  setSelectedWorkStatus(nextIndex);
  return true;
}

function renderSelectedWorkFallback() {
  if (!metroJourney || !metroInterior) return false;
  const cards = PROJECTS.map((project, index) => createSelectedWorkCard(project, index));
  if (!cards.length && staticWorkFallbackCard) cards.push(staticWorkFallbackCard.cloneNode(true));
  metroInterior.replaceChildren(...cards);
  metroInterior.classList.remove('is-sweeping');
  metroInterior.style.removeProperty('--project-scale');
  metroInterior.style.removeProperty('--project-opacity');
  metroInterior.style.removeProperty('--project-blur');
  metroInterior.style.pointerEvents = 'auto';
  metroInterior.inert = false;
  metroJourney.classList.add('is-fallback');
  metroJourney.style.removeProperty('--work-journey-height');
  activeProjectIndex = -1;
  setSelectedWorkStatus(-1);
  return true;
}

function disableSelectedWorkMotion() {
  if (selectedWorkFailed) return;
  selectedWorkFailed = true;
  document.documentElement.classList.remove('metro-motion-ready');
  try {
    if (renderSelectedWorkFallback()) return;
  } catch (_) {
    // Keep the pre-rendered foundertruth card available if data rendering also fails.
  }
  if (metroJourney) metroJourney.classList.add('is-fallback');
  if (metroInterior && staticWorkFallbackCard) {
    metroInterior.replaceChildren(staticWorkFallbackCard.cloneNode(true));
    metroInterior.inert = false;
    metroInterior.style.pointerEvents = 'auto';
  }
}

function initializeSelectedWorkMotion() {
  if (!metroJourney || !metroStage || !metroTrain || !metroTrack || !metroInterior || !PROJECTS.length) {
    disableSelectedWorkMotion();
    return false;
  }
  if (reducedMotion) {
    disableSelectedWorkMotion();
    return false;
  }
  try {
    renderSelectedWorkProject(0);
    const journeyStages = Math.max(6.2, PROJECTS.length * 1.42 + 0.52);
    metroJourney.style.setProperty('--work-journey-height', `${(journeyStages * 100).toFixed(0)}svh`);
    document.documentElement.classList.add('metro-motion-ready');
    return true;
  } catch (_) {
    disableSelectedWorkMotion();
    return false;
  }
}
// ANIMATION ENGINE: measure the single rail composition; card and doors use CSS geometry.
function measureMetro() {
  if (selectedWorkFailed || !metroJourney || !metroStage || !metroTrain || !metroTrack) return;
  try {
    const stageWidth = metroStage.clientWidth;
    const stageHeight = metroStage.offsetHeight;
    const trainWidth = metroTrain.getBoundingClientRect().width;
    const trainHeight = metroTrain.getBoundingClientRect().height;
    const stickyOffset = Number.parseFloat(window.getComputedStyle(metroStage).top) || 0;
    if (!stageWidth || !stageHeight || !trainWidth || !PROJECTS.length) return;

    const centeredTrainX = (stageWidth - trainWidth) * 0.5;
    const cardWidth = metroInterior.getBoundingClientRect().width;
    const stopRange = Math.max(0, Math.min(stageWidth * 0.045, (stageWidth - cardWidth) * 0.5 - 20));
    const stops = PROJECTS.map((project, index) => {
      const progress = PROJECTS.length < 2 ? 0.5 : index / (PROJECTS.length - 1);
      const stationDrift = (progress - 0.5) * 2 * stopRange;
      return centeredTrainX + stationDrift;
    });
    const start = -trainWidth - 70;
    const end = stageWidth + 70;
    const pageStart = documentTop(metroJourney) - stickyOffset;
    const scrollSpan = Math.max(1, metroJourney.offsetHeight - stageHeight);
    const changed = !scene.metro.initialized
      || Math.abs(scene.metro.stageWidth - stageWidth) > 2
      || Math.abs(scene.metro.stageHeight - stageHeight) > 2
      || Math.abs(scene.metro.trainWidth - trainWidth) > 2
      || Math.abs(scene.metro.trainHeight - trainHeight) > 2;

    scene.metro.stops = stops;
    scene.metro.start = start;
    scene.metro.end = end;
    scene.metro.stageWidth = stageWidth;
    scene.metro.stageHeight = stageHeight;
    scene.metro.trainWidth = trainWidth;
    scene.metro.trainHeight = trainHeight;
    scene.metro.pageStart = pageStart;
    scene.metro.scrollSpan = scrollSpan;
    scene.metro.stickyOffset = stickyOffset;
    if (changed) {
      const progress = clamp((scene.rawScroll - pageStart) / scrollSpan, 0, 1);
      scene.metro.target = metroTargetAt(progress);
      scene.metro.position = scene.metro.target;
      scene.metro.velocity = 0;
      scene.metro.acceleration = 0;
      scene.metro.initialized = true;
    }
  } catch (_) {
    disableSelectedWorkMotion();
  }
}
function drawMetroTrain() {
  if (!metroTrain || selectedWorkFailed) return;
  const suspension = clamp(Math.abs(scene.metro.acceleration) * 0.00004 + Math.abs(scene.metro.velocity) * 0.0011, 0, 2.2);
  metroTrain.style.transform = `translate3d(${scene.metro.position.toFixed(2)}px, ${suspension.toFixed(2)}px, 0) rotate(${scene.metro.bodyAngle.toFixed(2)}deg)`;
  metroStationBackground?.style.setProperty('transform', `translate3d(${(-scene.metro.position * 0.035).toFixed(2)}px, 0, 0)`);
  metroStationForeground?.style.setProperty('transform', `translate3d(${(-scene.metro.position * 0.075).toFixed(2)}px, 0, 0)`);
  const door = scene.metro.door;
  const glow = clamp(Math.sin(Math.PI * Math.min(1, door)) * 0.58, 0, 0.58);
  metroDoorLeft.forEach((panel) => {
    panel.style.setProperty('--door-slide', `${(-door * 102).toFixed(2)}%`);
    panel.style.setProperty('--door-glow', glow.toFixed(3));
  });
  metroDoorRight.forEach((panel) => {
    panel.style.setProperty('--door-slide', `${(door * 102).toFixed(2)}%`);
    panel.style.setProperty('--door-glow', glow.toFixed(3));
  });
  const reveal = clamp(door / 0.96, 0, 1);
  metroStage?.style.setProperty('--door-glow', glow.toFixed(3));
  metroInterior?.parentElement?.style.setProperty('--door-glow', glow.toFixed(3));
  metroInterior?.style.setProperty('--project-scale', (0.99 + reveal * 0.01).toFixed(4));
  metroInterior?.style.setProperty('--project-opacity', reveal.toFixed(3));
  metroInterior?.style.setProperty('--project-blur', `${((1 - reveal) * 0.9).toFixed(2)}px`);
  if (metroInterior) {
    metroInterior.style.pointerEvents = door > 0.98 ? 'auto' : 'none';
    metroInterior.inert = door <= 0.98;
  }
}

// SCROLL CONTROLLER: progress selects one data-backed stop; the engine handles arrival/reveal timing.
function updateMetro(dt) {
  if (selectedWorkFailed || reducedMotion || !metroJourney || !metroStage || !metroTrain) return false;
  const progress = clamp((scene.rawScroll - scene.metro.pageStart) / scene.metro.scrollSpan, 0, 1);
  const beat = metroBeatAt(progress);
  const state = beat.state;
  const requestedTarget = beat.position;
  const doorClearanceRequired = scene.metro.door > 0.003 && Math.abs(requestedTarget - scene.metro.position) > 1;
  scene.metro.target = doorClearanceRequired ? scene.metro.position : requestedTarget;

  const acceleration = (scene.metro.target - scene.metro.position) * 30 - scene.metro.velocity * (9.2 + scene.metro.friction);
  scene.metro.acceleration = acceleration;
  scene.metro.velocity += acceleration * dt;
  scene.metro.position += scene.metro.velocity * dt;
  if (Math.abs(scene.metro.target - scene.metro.position) < 0.22 && Math.abs(scene.metro.velocity) < 1.6) {
    scene.metro.position = scene.metro.target;
    scene.metro.velocity = 0;
    scene.metro.acceleration = 0;
  }

  const targetStop = beat.stop;
  const nearStop = targetStop >= 0
    && Math.abs(scene.metro.position - scene.metro.stops[targetStop]) < Math.max(12, scene.metro.stageWidth * 0.018);
  const requestedProjectIndex = beat.projectIndex;
  if (requestedProjectIndex >= 0 && requestedProjectIndex !== activeProjectIndex) {
    scene.metro.pendingProjectIndex = requestedProjectIndex;
  } else if (requestedProjectIndex < 0) {
    scene.metro.pendingProjectIndex = -1;
  } else {
    scene.metro.pendingProjectIndex = -1;
  }

  if (scene.metro.pendingProjectIndex >= 0 && scene.metro.door <= 0.003 && scene.metro.doorTarget === 0) {
    renderSelectedWorkProject(scene.metro.pendingProjectIndex);
    scene.metro.pendingProjectIndex = -1;
  }

  let doorTarget = 0;
  if (beat.doorsOpen && targetStop >= 0 && activeProjectIndex === targetStop && scene.metro.pendingProjectIndex < 0) {
    const stopPosition = scene.metro.stops[targetStop];
    const tolerance = Math.max(5, scene.metro.stageWidth * 0.008);
    if (Math.abs(scene.metro.position - stopPosition) < tolerance && Math.abs(scene.metro.velocity) < 55) doorTarget = 1;
  }
  if (state === 'FINAL_DEPARTURE' || state === 'TRAIN_EXITED') {
    doorTarget = 0;
    if (scene.metro.door <= 0.003 && scene.metro.doorTarget === 0 && activeProjectIndex >= 0) renderSelectedWorkProject(-1);
  }

  if (doorTarget !== scene.metro.doorTarget) {
    const previousTarget = scene.metro.doorTarget;
    scene.metro.doorTarget = doorTarget;
    scene.metro.doorFrom = scene.metro.door;
    scene.metro.doorElapsed = 0;
    const activeCard = metroInterior?.querySelector('.project-card');
    if (doorTarget === 0 && previousTarget === 1) activeCard?.classList.add('is-exiting');
    if (metroInterior) {
      metroInterior.classList.remove('is-sweeping');
      if (doorTarget === 1) {
        activeCard?.classList.remove('is-exiting');
        void metroInterior.offsetWidth;
        metroInterior.classList.add('is-sweeping');
      }
    }
  }

  const doorDuration = doorTarget === 1 ? 0.68 : 0.78;
  scene.metro.doorElapsed = Math.min(doorDuration, scene.metro.doorElapsed + dt);
  const t = clamp(scene.metro.doorElapsed / doorDuration, 0, 1);
  const ease = doorTarget === 1
    ? 1 - Math.pow(1 - t, 3)
    : t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  scene.metro.door = clamp(scene.metro.doorFrom + (doorTarget - scene.metro.doorFrom) * ease, 0, 1);

  const angleTarget = clamp(-scene.metro.acceleration * 0.000035, -0.75, 0.75);
  springAngle(scene.metro, angleTarget, 100, 22, dt, 'bodyAngle');
  metroStage.dataset.doorsUnlocked = String(doorTarget > 0 && scene.metro.door > 0.08);
  const currentState = metroStage.dataset.trainState;
  if (currentState !== state) {
    metroStage.dataset.trainState = state;
    metroStage.setAttribute('aria-label', `Selected Work train journey: ${state.toLowerCase().replaceAll('_', ' ')}`);
  }
  const activeStop = targetStop >= 0 && state.startsWith('OPEN_') && nearStop && Math.abs(scene.metro.velocity) < 70;
  metroStationStop?.classList.toggle('is-active', activeStop);
  drawMetroTrain();

  const moving = Math.abs(scene.metro.target - scene.metro.position) > 0.25 || Math.abs(scene.metro.velocity) > 1.8;
  const doorsMoving = Math.abs(doorTarget - scene.metro.door) > 0.003;
  return moving || doorsMoving || Math.abs(scene.metro.bodyAngle) > 0.02 || Math.abs(scene.metro.angularVelocity) > 0.03;
}

function updateMetroSafely(dt) {
  if (selectedWorkFailed) return false;
  try { return updateMetro(dt); } catch (_) {
    disableSelectedWorkMotion();
    return false;
  }
}
function measureRoutes() {
  scene.measureDirty = false;
  scene.careerStations = careerRows.map((row) => documentTop(row) + row.offsetHeight / 2);

  if (careerStage && careerSvg && careerPath) {
    const stageRect = careerStage.getBoundingClientRect();
    const svgRect = careerSvg.getBoundingClientRect();
    scene.routeTop = stageRect.top + window.scrollY;
    scene.routeScaleX = svgRect.width / 80;
    scene.routeScaleY = svgRect.height / 1000;
    scene.routeLength = careerPath.getTotalLength();
    scene.routeCarWidth = careerVehicle?.offsetWidth || scene.routeCarWidth;
    scene.routeCarHeight = careerVehicle?.offsetHeight || scene.routeCarHeight;
    careerStationDots.forEach((dot, index) => {
      const row = careerRows[index];
      if (!row) return;
      const stationProgress = index / Math.max(1, careerRows.length - 1);
      const point = careerPath.getPointAtLength(scene.routeLength * stationProgress);
      dot.setAttribute('cx', String(point.x));
      dot.setAttribute('cy', String(point.y));
    });
  }

  if (methodJourney && methodStage) {
    scene.method.start = documentTop(methodJourney);
    scene.method.scrollSpan = Math.max(1, methodJourney.offsetHeight - window.innerHeight);
  }

  if (writingJourney && writingStage && writingIndex && writingItems.length) {
    const staticLayout = isWritingStaticLayout();
    if (staticLayout) {
      writingJourney.style.removeProperty('height');
      scene.writing.mobileListTop = documentTop(writingIndex);
      scene.writing.mobileStops = writingItems.map((item) => documentTop(item) + item.offsetHeight / 2);
      if (writingReadingLine && writingStageBody) {
        writingReadingLine.style.top = `${scene.writing.mobileListTop - documentTop(writingStageBody)}px`;
        writingReadingLine.style.height = `${writingIndex.offsetHeight}px`;
        writingReadingLine.style.bottom = 'auto';
      }
      scene.writing.start = documentTop(writingJourney);
      scene.writing.scrollSpan = Math.max(1, writingJourney.offsetHeight - writingStage.offsetHeight);
    } else {
      writingReadingLine?.style.removeProperty('top');
      writingReadingLine?.style.removeProperty('height');
      writingReadingLine?.style.removeProperty('bottom');
      const travel = Math.max(1, WRITING.length - 1) * window.innerHeight * 0.72;
      writingJourney.style.height = `${Math.ceil(writingStage.offsetHeight + travel)}px`;
      scene.writing.start = documentTop(writingJourney);
      scene.writing.scrollSpan = Math.max(1, writingJourney.offsetHeight - writingStage.offsetHeight);
      scene.writing.mobileStops = [];
    }
  }

  scene.aboutTop = about ? documentTop(about) : 0;
  scene.aboutHeight = about ? about.offsetHeight : 1;
  scene.aboutLength = aboutPath ? aboutPath.getTotalLength() : 0;
  scene.heroTop = hero ? documentTop(hero) : 0;
  scene.heroHeight = hero ? hero.offsetHeight : 1;
  scene.heroLength = heroTrack ? heroTrack.getTotalLength() : 0;
  scene.contactTop = contact ? documentTop(contact) : 0;
  scene.contactHeight = contact ? contact.offsetHeight : 1;
  scene.contactLength = contactPath ? contactPath.getTotalLength() : 0;
  if (aboutPath) aboutPath.style.strokeDasharray = `${scene.aboutLength}`;
  if (heroTrack) heroTrack.style.strokeDasharray = `${scene.heroLength}`;
  if (contactPath) contactPath.style.strokeDasharray = `${scene.contactLength}`;
  measureMetro();


}

function spring(body, target, stiffness, damping, dt, maxSpeed = Infinity) {
  body.target = target;
  const difference = body.target - body.position;
  body.acceleration = difference * stiffness - body.velocity * (damping + (body.friction || 0));
  body.velocity = clamp(body.velocity + body.acceleration * dt, -maxSpeed, maxSpeed);
  body.position += body.velocity * dt;
  if (Math.abs(target - body.position) < 0.03 && Math.abs(body.velocity) < 0.08) {
    body.position = target;
    body.velocity = 0;
    body.acceleration = 0;
  }
  return Math.abs(target - body.position) > 0.03 || Math.abs(body.velocity) > 0.08;
}

function springAngle(body, target, stiffness, damping, dt, angleKey = 'angle', velocityKey = 'angularVelocity') {
  const angle = body[angleKey];
  const difference = angleKey === 'pathAngle' ? ((target - angle + 540) % 360) - 180 : target - angle;
  const acceleration = difference * stiffness - body[velocityKey] * damping;
  body[velocityKey] += acceleration * dt;
  body[angleKey] += body[velocityKey] * dt;
  if (Math.abs(difference) < 0.015 && Math.abs(body[velocityKey]) < 0.04) {
    body[angleKey] = target;
    body[velocityKey] = 0;
  }
  const remaining = angleKey === 'pathAngle' ? ((target - body[angleKey] + 540) % 360) - 180 : target - body[angleKey];
  return Math.abs(remaining) > 0.015 || Math.abs(body[velocityKey]) > 0.04;
}

function updateExperienceCar(progress, dt, animate = true) {
  if (!careerPath || !careerVehicle || !Number.isFinite(scene.routeLength) || scene.routeLength <= 0) {
    return { moving: false, pathTurning: false };
  }

  const car = scene.career;
  let moving = false;
  let pathTurning = false;

  if (animate) {
    const targetDistance = clamp(Number.isFinite(progress) ? progress : 0, 0, 1) * scene.routeLength;
    moving = spring(car, targetDistance, 72, 19, dt, Math.max(96, scene.routeLength * 0.34));
    if (![car.position, car.velocity, car.acceleration].every(Number.isFinite)) {
      car.position = Number.isFinite(car.lastValidPosition) ? clamp(car.lastValidPosition, 0, scene.routeLength) : 0;
      car.velocity = 0;
      car.acceleration = 0;
      return { moving: false, pathTurning: false };
    }
    car.position = clamp(car.position, 0, scene.routeLength);
    if ((car.position === 0 && car.velocity < 0) || (car.position === scene.routeLength && car.velocity > 0)) car.velocity = 0;
  } else {
    car.position = 0;
    car.velocity = 0;
    car.acceleration = 0;
    car.lastValidPosition = 0;
  }

  if (!Number.isFinite(car.position)) {
    return { moving: false, pathTurning: false };
  }
  let point;
  let pointBefore;
  let pointAfter;
  try {
    const currentLength = clamp(car.position, 0, scene.routeLength);
    const tangentDistance = Math.max(1, scene.routeLength * 0.002);
    point = careerPath.getPointAtLength(currentLength);
    pointBefore = careerPath.getPointAtLength(Math.max(0, currentLength - tangentDistance));
    pointAfter = careerPath.getPointAtLength(Math.min(scene.routeLength, currentLength + tangentDistance));
  } catch (_) {
    return { moving: false, pathTurning: false };
  }
  if (![point?.x, point?.y, pointBefore?.x, pointBefore?.y, pointAfter?.x, pointAfter?.y].every(Number.isFinite)) {
    return { moving: false, pathTurning: false };
  }

  const tangentX = (pointAfter.x - pointBefore.x) * scene.routeScaleX;
  const tangentY = (pointAfter.y - pointBefore.y) * scene.routeScaleY;
  if (Number.isFinite(tangentX) && Number.isFinite(tangentY) && (tangentX || tangentY)) {
    const pathAngleTarget = Math.atan2(tangentY, tangentX) * (180 / Math.PI) - 90;
    if (animate) pathTurning = springAngle(car, pathAngleTarget, 76, 19, dt, 'pathAngle', 'pathAngularVelocity');
    else {
      car.pathAngle = pathAngleTarget;
      car.pathAngularVelocity = 0;
    }
  }
  if (!Number.isFinite(car.pathAngle)) return { moving: false, pathTurning: false };

  const x = point.x * scene.routeScaleX - scene.routeCarWidth / 2;
  const y = point.y * scene.routeScaleY - scene.routeCarHeight / 2;
  const rotation = car.pathAngle;
  if ([x, y, rotation].every(Number.isFinite)) {
    careerVehicle.style.transform = `translate3d(${x.toFixed(3)}px, ${y.toFixed(3)}px, 0) rotate(${rotation.toFixed(3)}deg)`;
    car.lastValidPosition = car.position;
  }

  return { moving, pathTurning };
}

function drawMethodStack(travelled) {
  if (!methodCards.length) return false;
  const viewport = window.innerHeight;
  const entryDistance = viewport * 0.9;
  const stepDistance = viewport * 0.95;
  const momentum = clamp(scene.scrollVelocity * 0.008, -14, 14);
  const beforeFirst = travelled < entryDistance;
  const entryProgress = clamp(travelled / entryDistance, 0, 1);
  const easedEntryProgress = 1 - Math.pow(1 - entryProgress, 3);
  const journeyPosition = beforeFirst ? 0 : clamp((travelled - entryDistance) / stepDistance, 0, HOW_I_WORK.length - 1);
  const currentStackTop = Math.min(HOW_I_WORK.length - 1, Math.floor(journeyPosition));
  const phase = beforeFirst || currentStackTop === HOW_I_WORK.length - 1 ? 0 : journeyPosition - currentStackTop;
  const current = beforeFirst ? 0 : (phase >= 0.75 ? currentStackTop + 1 : currentStackTop);
  methodCards.forEach((card, index) => {
    let stackY;
    let scale;
    let opacity;
    let z;
    if (beforeFirst) {
      const depth = index;
      stackY = index === 0 ? 12 * (1 - easedEntryProgress) : viewport + depth * 24;
      scale = 1 - Math.min(depth, 3) * 0.03;
      opacity = index === 0 ? 1 : Math.max(0.78, 1 - depth * 0.065);
      z = index === 0 ? 1001 : 700 + index;
    } else if (index < currentStackTop) {
      const depth = currentStackTop - index + phase;
      stackY = -depth * 24;
      scale = 1 - Math.min(depth, 3) * 0.03;
      opacity = Math.max(0.76, 1 - depth * 0.065);
      z = 850 + index;
    } else if (index === currentStackTop) {
      stackY = -phase * 24 + momentum * 0.3;
      scale = 1 - phase * 0.03;
      opacity = 1 - phase * 0.065;
      z = 990;
    } else if (index === currentStackTop + 1 && phase > 0) {
      stackY = viewport * (1 - phase) - momentum;
      scale = 1 - (1 - phase) * 0.03;
      opacity = 1 - (1 - phase) * 0.065;
      z = 1001;
    } else {
      const depth = index - currentStackTop - 1;
      stackY = viewport + depth * 24;
      scale = 1 - Math.min(depth, 3) * 0.03;
      opacity = Math.max(0.76, 1 - depth * 0.065);
      z = 700 + index;
    }
    card.style.setProperty('--stack-y', `${stackY.toFixed(2)}px`);
    card.style.setProperty('--stack-scale', scale.toFixed(4));
    card.style.setProperty('--stack-opacity', opacity.toFixed(3));
    card.style.zIndex = String(z);
    card.classList.toggle('is-active', index === current);
    card.setAttribute('aria-hidden', String(index !== current));
  });
  if (methodStateLabel) {
    const principle = HOW_I_WORK[current];
    methodStateLabel.textContent = `${principle.number} / ${String(HOW_I_WORK.length).padStart(2, '0')} · ${principle.title}`;
  }
  scene.method.progress = travelled / Math.max(1, scene.method.scrollSpan);
  return true;
}

function paintMarkers(focus) {
  if (hero && heroMarker && heroTrack) {
    const progress = clamp((scene.smoothScroll - scene.heroTop) / Math.max(1, scene.heroHeight), 0, 1);
    const point = heroTrack.getPointAtLength(scene.heroLength * progress);
    heroMarker.setAttribute('cx', String(point.x));
    heroTrack.style.strokeDashoffset = `${scene.heroLength * (1 - progress)}`;
  }

  if (aboutPath && aboutMarker) {
    const progress = clamp((focus - scene.aboutTop) / Math.max(1, scene.aboutHeight), 0, 1);
    const point = aboutPath.getPointAtLength(scene.aboutLength * progress);
    aboutPath.style.strokeDashoffset = `${scene.aboutLength * (1 - progress)}`;
    aboutMarker.setAttribute('cx', String(point.x));
    aboutMarker.setAttribute('cy', String(point.y));
  }

  if (contactPath && contactMarker) {
    const progress = clamp((focus - scene.contactTop) / Math.max(1, scene.contactHeight), 0, 1);
    const point = contactPath.getPointAtLength(scene.contactLength * progress);
    contactPath.style.strokeDashoffset = `${scene.contactLength * (1 - progress)}`;
    contactMarker.setAttribute('cx', String(point.x));
    contactMarker.classList.toggle('is-arrived', progress >= 0.98);
  }
}

function renderScene(timestamp) {
  scene.frame = 0;
  if (scene.measureDirty) measureRoutes();
  const elapsed = scene.lastFrame ? (timestamp - scene.lastFrame) / 1000 : 1 / 60;
  const dt = clamp(elapsed, 1 / 240, 1 / 30);
  scene.lastFrame = timestamp;

  const scrollAcceleration = (scene.rawScroll - scene.smoothScroll) * 48 - scene.scrollVelocity * 13.2;
  scene.scrollVelocity += scrollAcceleration * dt;
  scene.smoothScroll += scene.scrollVelocity * dt;
  if (Math.abs(scene.rawScroll - scene.smoothScroll) < 0.15 && Math.abs(scene.scrollVelocity) < 0.5) {
    scene.smoothScroll = scene.rawScroll;
    scene.scrollVelocity = 0;
  }
  const focus = scene.smoothScroll + window.innerHeight * 0.56;

  const careerProgress = progressAcross(scene.careerStations, focus);
  const nextCareerStop = activeStation(scene.careerStations, focus);
  setStationState(careerRows, nextCareerStop, scene.career.active);
  setStationDotState(careerStationDots, nextCareerStop);
  scene.career.active = nextCareerStop;
  const careerMotion = updateExperienceCar(careerProgress, dt);

  const methodTravelled = clamp(scene.smoothScroll - scene.method.start, 0, scene.method.scrollSpan);
  drawMethodStack(methodTravelled);
  updateWritingIndex();

  const metroMoving = updateMetroSafely(dt);
  paintMarkers(focus);

  const scrollMoving = Math.abs(scene.rawScroll - scene.smoothScroll) > 0.2 || Math.abs(scene.scrollVelocity) > 0.5;
  if (scrollMoving || careerMotion.moving || careerMotion.pathTurning || metroMoving) {
    scene.frame = requestAnimationFrame(renderScene);
  } else {
    scene.lastFrame = 0;
  }
}

function requestSceneFrame() {
  if (!reducedMotion && !scene.frame) scene.frame = requestAnimationFrame(renderScene);
}

function markLayoutDirty() {
  scene.measureDirty = true;
  if (!reducedMotion) requestSceneFrame();
  else {
    measureRoutes();
    updateExperienceCar(0, 0, false);
    updateWritingIndex();
    paintMarkers(scene.rawScroll + window.innerHeight * 0.56);
  }
}

window.addEventListener('scroll', () => {
  const nextScroll = window.scrollY;
  scene.scrollDirection = Math.sign(nextScroll - scene.rawScroll) || scene.scrollDirection;
  scene.lastRawScroll = scene.rawScroll;
  scene.rawScroll = nextScroll;
  requestSceneFrame();
}, { passive: true });
window.addEventListener('resize', markLayoutDirty, { passive: true });
window.addEventListener('load', markLayoutDirty, { once: true });

if ('ResizeObserver' in window) {
  const layoutObserver = new ResizeObserver(markLayoutDirty);
  [careerStage, metroStage, about, contact, writingJourney, document.querySelector('.certificates')].filter(Boolean).forEach((element) => layoutObserver.observe(element));
}

renderWritingIndex();
renderCertificates();

try {
  initializeSelectedWorkMotion();
} catch (_) {
  disableSelectedWorkMotion();
}

if (!reducedMotion) {
  try { measureRoutes(); } catch (_) { disableSelectedWorkMotion(); }
  requestSceneFrame();
} else {
  revealTargets.forEach((element) => element.classList.add('is-visible'));
  updateExperienceCar(0, 0, false);
  setStationState(careerRows, 0, -1);
  setStationDotState(careerStationDots, 0);
  updateWritingIndex();
  paintMarkers(scene.rawScroll + window.innerHeight * 0.56);
}

// Resume links and floating video resume are independent of the portfolio motion systems.
(() => {
  const resumeLink = document.querySelector('#resume-link');
  if (resumeLink) resumeLink.href = RESUME_URL;

  const widget = document.querySelector('[data-video-resume]');
  if (!widget) return;

  const openButton = widget.querySelector('[data-video-resume-open]');
  const closeButton = widget.querySelector('[data-video-resume-close]');
  const dismissButton = widget.querySelector('[data-video-resume-dismiss]');
  const panel = widget.querySelector('#video-resume-panel');
  const screen = widget.querySelector('[data-video-resume-screen]');
  const placeholder = widget.querySelector('[data-video-resume-placeholder]');
  const tileStatus = widget.querySelector('[data-video-resume-status]');
  let embedUrl = '';
  let isOpen = false;

  function youtubeEmbedUrl(value) {
    if (!value) return '';
    try {
      const parsed = new URL(value);
      const host = parsed.hostname.replace(/^www\./, '').toLowerCase();
      let id = '';
      if (host === 'youtu.be') id = parsed.pathname.split('/').filter(Boolean)[0] || '';
      if (host === 'youtube.com' || host === 'm.youtube.com') {
        if (parsed.pathname === '/watch') id = parsed.searchParams.get('v') || '';
        else if (/^\/(?:shorts|embed)\//.test(parsed.pathname)) id = parsed.pathname.split('/')[2] || '';
      }
      if (!/^[A-Za-z0-9_-]{11}$/.test(id)) return '';
      return `https://www.youtube-nocookie.com/embed/${id}?rel=0&autoplay=0`;
    } catch (_) {
      return '';
    }
  }

  function setOpen(nextOpen, restoreFocus = false) {
    isOpen = nextOpen;
    widget.classList.toggle('is-open', isOpen);
    openButton.setAttribute('aria-expanded', String(isOpen));
    panel.setAttribute('aria-hidden', String(!isOpen));
    panel.inert = !isOpen;
    if (isOpen) {
      if (embedUrl && !screen.querySelector('iframe')) {
        const frame = document.createElement('iframe');
        frame.src = embedUrl;
        frame.title = 'Padmanava Das — Video Resume';
        frame.allow = 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        frame.allowFullscreen = true;
        frame.referrerPolicy = 'strict-origin-when-cross-origin';
        screen.replaceChildren(frame);
      }
      closeButton.focus();
    } else {
      if (screen.querySelector('iframe')) screen.replaceChildren(placeholder);
      if (restoreFocus) openButton.focus();
    }
  }

  try {
    if (sessionStorage.getItem('videoResumeDismissed') === 'true') {
      widget.hidden = true;
      return;
    }
  } catch (_) {
    // The compact tile remains available if session storage is blocked.
  }

  embedUrl = youtubeEmbedUrl(VIDEO_RESUME_URL);
  if (embedUrl) {
    tileStatus.textContent = 'OPEN TO WATCH';
    placeholder.hidden = true;
  }

  openButton.addEventListener('click', () => setOpen(!isOpen));
  closeButton.addEventListener('click', () => setOpen(false, true));
  dismissButton.addEventListener('click', () => {
    try { sessionStorage.setItem('videoResumeDismissed', 'true'); } catch (_) { /* Keep this dismissal local to the page. */ }
    widget.hidden = true;
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen) setOpen(false, true);
  });
})();
