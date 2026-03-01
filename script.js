'use strict';

/**
 * @typedef {'YouTube' | 'Instagram'} WorkPlatform
 */

/**
 * @typedef {Object} WorkItem
 * @property {string} id
 * @property {WorkPlatform} platform
 * @property {string} title
 * @property {string} category
 * @property {string} metric
 * @property {string} url
 * @property {string} [thumbnailPrimary]
 * @property {string} [thumbnailFallback]
 * @property {string[]} [thumbnailCandidates]
 * @property {string} [fallbackReason]
 */

/**
 * @typedef {Object} ChannelPresenceItem
 * @property {string} id
 * @property {string} platform
 * @property {string} icon
 * @property {'youtube' | 'instagram' | 'quora' | 'linkedin'} badgeStyle
 * @property {string} metric
 * @property {string} context
 * @property {string} url
 * @property {string} cta
 * @property {string} logoFile
 * @property {string} logoAlt
 * @property {string} fallbackInitial
 */

/**
 * @typedef {Object} CaseStudyMetric
 * @property {string} id
 * @property {string} value
 * @property {string} label
 */

/**
 * @typedef {Object} SystemItem
 * @property {string} id
 * @property {string} title
 * @property {string} icon
 * @property {string} description
 * @property {string} [proof]
 */

/**
 * @typedef {Object} ExpertiseItem
 * @property {string} id
 * @property {string} icon
 * @property {string} capability
 * @property {string} delivered
 * @property {string} proof
 */

/**
 * @typedef {Object} TimelineItem
 * @property {string} id
 * @property {string} role
 * @property {string} company
 * @property {string} period
 * @property {string} track
 * @property {string} impact
 * @property {string} [badge]
 */

/**
 * @typedef {Object} WritingPortfolioItem
 * @property {string} id
 * @property {string} company
 * @property {string} companyUrl
 * @property {string} companyInitial
 * @property {string} type
 * @property {string} domain
 * @property {string} scope
 * @property {string[]} keyAreas
 * @property {string} period
 */

/**
 * @typedef {Object} PortfolioWorkData
 * @property {string} youtubeChannel
 * @property {string} instagramPage
 * @property {string} quoraSpace
 * @property {string} linkedinPage
 * @property {WorkItem[]} youtubeShorts
 * @property {WorkItem[]} instagramReels
 * @property {ChannelPresenceItem[]} channelPresence
 * @property {CaseStudyMetric[]} vedamMetrics
 * @property {CaseStudyMetric[]} vedamLeadSplit
 * @property {SystemItem[]} vedamSystems
 * @property {CaseStudyMetric[]} addaImpact
 * @property {ExpertiseItem[]} expertise
 * @property {TimelineItem[]} timeline
 * @property {WritingPortfolioItem[]} writingPortfolio
 */

/** @type {PortfolioWorkData} */
const portfolioWorkData = {
  youtubeChannel: 'https://www.youtube.com/@vedamschooloftechnology',
  instagramPage: 'https://tinyurl.com/8fn2272s',
  quoraSpace: 'https://qr.ae/pCBXbK',
  linkedinPage: 'https://www.linkedin.com/school/vedam-school-of-technology',
  youtubeShorts: [
    {
      id: 'yt-short-1',
      platform: 'YouTube',
      title: 'Student Insight Format',
      category: 'Short-form on-camera storytelling',
      metric: 'Brand visibility format',
      url: 'https://youtube.com/shorts/B9IHssr47CM?si=PWSXvGxNYk6wyPY4',
      thumbnailPrimary: 'assets/work-thumbs/yt-short-1.jpg',
    },
    {
      id: 'yt-short-2',
      platform: 'YouTube',
      title: 'Campus Interaction Narrative',
      category: 'Audience engagement format',
      metric: 'CTR range 4-6.7%',
      url: 'https://youtube.com/shorts/bU5Nj8xtWWU?si=-X8ZBD4s7wbc4-mH',
      thumbnailPrimary: 'assets/work-thumbs/yt-short-2.jpg',
    },
    {
      id: 'yt-short-3',
      platform: 'YouTube',
      title: 'Brand Voice Presentation',
      category: 'Campaign aligned communication',
      metric: 'Structured storytelling',
      url: 'https://youtube.com/shorts/gDC1NScfF64?si=MLb2K7X3Vziw_0Mp',
      thumbnailPrimary: 'assets/work-thumbs/yt-short-3.jpg',
    },
    {
      id: 'yt-short-4',
      platform: 'YouTube',
      title: 'Institutional Message Delivery',
      category: 'On-camera informational format',
      metric: 'UGC pipeline support',
      url: 'https://youtube.com/shorts/DtcWUyBzphw?si=nU3ypi-upoIVdQhl',
      thumbnailPrimary: 'assets/work-thumbs/yt-short-4.jpg',
    },
  ],
  instagramReels: [
    {
      id: 'ig-reel-1',
      platform: 'Instagram',
      title: 'Reel Campaign Storyline 01',
      category: 'Short-form community content',
      metric: 'Follower growth support',
      url: 'https://www.instagram.com/reel/DUdTR8iCId5/?igsh=MTlqcXR0aWd0ajRreg==',
      thumbnailPrimary: 'assets/work-thumbs/ig-reel-1.svg',
    },
    {
      id: 'ig-reel-2',
      platform: 'Instagram',
      title: 'Reel Campaign Storyline 02',
      category: 'Audience-first scripting',
      metric: '3%+ engagement maintenance',
      url: 'https://www.instagram.com/reel/DUGIL2pk7Yn/?igsh=Zmo3ZW9yem8yZHM=',
      thumbnailPrimary: 'assets/work-thumbs/ig-reel-2.svg',
    },
    {
      id: 'ig-reel-3',
      platform: 'Instagram',
      title: 'Reel Campaign Storyline 03',
      category: 'Brand communication format',
      metric: 'Monthly views acceleration',
      url: 'https://www.instagram.com/reel/DON0tghgRUc/?igsh=M2ZyNWcwNnl4c3Q1',
      thumbnailPrimary: 'assets/work-thumbs/ig-reel-3.svg',
    },
    {
      id: 'ig-reel-4',
      platform: 'Instagram',
      title: 'Reel Campaign Storyline 04',
      category: 'On-camera short video execution',
      metric: 'Institutional trust content',
      url: 'https://www.instagram.com/reel/DOJKASDk0TM/?igsh=MTQ5b2Y2M2lrY2FhMQ==',
      thumbnailPrimary: 'assets/work-thumbs/ig-reel-4.svg',
    },
    {
      id: 'ig-reel-5',
      platform: 'Instagram',
      title: 'Reel Campaign Storyline 05',
      category: 'Platform-native engagement content',
      metric: 'Community conversation format',
      url: 'https://www.instagram.com/reel/DOGcwm-gdgU/?igsh=YTJrbjFoaHBvazk0',
      thumbnailPrimary: 'assets/work-thumbs/ig-reel-5.svg',
    },
  ],
  channelPresence: [
    {
      id: 'presence-youtube',
      platform: 'YouTube',
      icon: 'youtube',
      badgeStyle: 'youtube',
      metric: '4-6.7% LF CTR',
      context: 'Long-form and shorts ecosystem with SEO-aligned packaging.',
      url: 'https://www.youtube.com/@vedamschooloftechnology',
      cta: 'Open channel',
      logoFile: 'assets/logos/youtube.svg',
      logoAlt: 'YouTube logo',
      fallbackInitial: 'Y',
    },
    {
      id: 'presence-instagram',
      platform: 'Instagram',
      icon: 'instagram',
      badgeStyle: 'instagram',
      metric: '230 to 6,100',
      context: 'Scaled follower base with repeatable engagement formats.',
      url: 'https://tinyurl.com/8fn2272s',
      cta: 'Open profile',
      logoFile: 'assets/logos/instagram.svg',
      logoAlt: 'Instagram logo',
      fallbackInitial: 'IG',
    },
    {
      id: 'presence-quora',
      platform: 'Quora',
      icon: 'quora',
      badgeStyle: 'quora',
      metric: '3,339+ views',
      context: 'Search-intent and ORM support through managed Q&A content.',
      url: 'https://qr.ae/pCBXbK',
      cta: 'Open space',
      logoFile: 'assets/logos/quora.svg',
      logoAlt: 'Quora logo',
      fallbackInitial: 'Q',
    },
    {
      id: 'presence-linkedin',
      platform: 'LinkedIn',
      icon: 'linkedin',
      badgeStyle: 'linkedin',
      metric: '130K+ impressions',
      context: 'Thought-leadership and lead-oriented distribution cadence.',
      url: 'https://www.linkedin.com/school/vedam-school-of-technology',
      cta: 'Open page',
      logoFile: 'assets/logos/linkedin.svg',
      logoAlt: 'LinkedIn logo',
      fallbackInitial: 'in',
    },
  ],
  vedamMetrics: [
    { id: 'vedam-metric-1', value: '1.1M+', label: 'Instagram reach generated' },
    { id: 'vedam-metric-2', value: '7.7M+', label: 'January Instagram views' },
    { id: 'vedam-metric-3', value: '4-6.7%', label: 'YouTube long-form CTR range' },
    { id: 'vedam-metric-4', value: '3,339+', label: 'Quora top-question views' },
    { id: 'vedam-metric-5', value: '10+', label: 'Reddit threads managed' },
    { id: 'vedam-metric-6', value: '50+', label: 'GMB reviews tracked by category' },
    { id: 'vedam-metric-7', value: '130K+', label: 'LinkedIn cycle impressions' },
    { id: 'vedam-metric-8', value: '66%', label: 'LinkedIn-to-payment peak' },
  ],
  vedamLeadSplit: [
    { id: 'lead-1', value: '281', label: 'Total leads across VSAT cycles' },
    { id: 'lead-2', value: '163', label: 'Leads attributed to YouTube' },
    { id: 'lead-3', value: '66', label: 'Leads attributed to LinkedIn' },
  ],
  vedamSystems: [
    {
      id: 'system-1',
      title: 'Instagram Calendar',
      icon: 'instagram',
      description: 'Weekly seven-post plan with topic, format, brief, timeline, and status tracking.',
      proof: '7 posts per week',
    },
    {
      id: 'system-2',
      title: 'YouTube 12-Month Plan',
      icon: 'youtube',
      description: 'Objective-led schedule with scripts, shoot dates, edit windows, and per-video metrics.',
      proof: 'Sept 2025 to Sept 2026',
    },
    {
      id: 'system-3',
      title: 'LinkedIn WOW and MOM',
      icon: 'linkedin',
      description: 'Weekly and monthly reporting loops for impressions, leads, and distribution effectiveness.',
      proof: 'Cycle-level reporting',
    },
    {
      id: 'system-4',
      title: 'ORM Tracker',
      icon: 'proof',
      description: 'Live Quora and Reddit queue, sentiment mapping, and categorized GMB review governance.',
      proof: 'Reputation governance',
    },
    {
      id: 'system-5',
      title: 'Distribution Plan',
      icon: 'delivered',
      description: 'Single-content multi-channel mapping across Instagram, Telegram, LinkedIn, YouTube, and X.',
      proof: 'One asset to six channels',
    },
    {
      id: 'system-6',
      title: 'Brand and Social MOM',
      icon: 'system',
      description: 'Leadership dashboard for reach, engagement, followers, leads, and payments by cycle.',
      proof: 'Leadership-facing metrics',
    },
    {
      id: 'system-7',
      title: 'Competitor Benchmarking',
      icon: 'capability',
      description: 'Monthly benchmarking against Newton, Scaler, Polaris, NIAT, and PW initiatives.',
      proof: 'Monthly benchmark cycle',
    },
    {
      id: 'system-8',
      title: 'UGC Pipeline',
      icon: 'timeline',
      description: 'Student vlogger program with topic mapping, links, and organic/inorganic classification.',
      proof: 'UGC governance model',
    },
    {
      id: 'system-9',
      title: 'Mastersheet',
      icon: 'system',
      description: 'Single source linking calendars, trackers, asset libraries, and campaign documentation.',
      proof: 'Central operating layer',
    },
  ],
  addaImpact: [
    { id: 'adda-impact-1', value: '0.7% to 3-5%', label: 'Sustained CTR improvement range' },
    { id: 'adda-impact-2', value: '7%', label: 'Top push-notification CTR outcome' },
    { id: 'adda-impact-3', value: '2x', label: 'Revenue uplift on Independence Day window' },
    { id: 'adda-impact-4', value: '241K', label: 'Impressions on a high-performing campaign' },
    { id: 'adda-impact-5', value: '#1', label: 'Revenue and CRR in Banking app cycle' },
  ],
  expertise: [
    {
      id: 'expertise-1',
      icon: 'capability',
      capability: 'Content Strategy & Planning',
      delivered: 'Owned end-to-end calendar architecture, bucket strategy, and content distribution planning across 6 platforms simultaneously.',
      proof: '26x Instagram community growth — 230 to 6,100 followers',
    },
    {
      id: 'expertise-2',
      icon: 'delivered',
      capability: 'Performance Copywriting',
      delivered: 'Led push notification, lifecycle CRM, and campaign copy for SSC, Railways, Banking, and UPSC exam verticals at Adda247.',
      proof: '0.7% to 7% CTR trajectory — 2x revenue uplift on Independence Day campaign',
    },
    {
      id: 'expertise-3',
      icon: 'timeline',
      capability: 'On-Camera Communication',
      delivered: 'Fronted institutional interviews, launch videos, and vox pop formats — scripted and delivered brand narratives independently.',
      proof: 'Multiple high-visibility public video formats across Vedam\'s YouTube channel',
    },
    {
      id: 'expertise-4',
      icon: 'proof',
      capability: 'ORM & Reputation Management',
      delivered: 'Built and managed Quora, Reddit, GMB, and SERP-level response systems with live sentiment tracking and escalation protocols.',
      proof: 'Review-intent query ranked #1 on Google — 2.4K+ Quora views, 18 upvotes',
    },
    {
      id: 'expertise-5',
      icon: 'system',
      capability: 'Analytics & Reporting',
      delivered: 'Designed WOW and MOM dashboards for leadership — surfacing reach, lead attribution, payment funnel, and competitor benchmarks.',
      proof: '281 leads tracked with full YouTube/LinkedIn/payment source splits',
    },
    {
      id: 'expertise-6',
      icon: 'workmode',
      capability: 'Cross-Functional Leadership',
      delivered: 'Coordinated founders, creative teams, mentors, and paid media for unified campaign launches — managed systems, not just tasks.',
      proof: 'End-to-end ownership of 9 inter-linked operational systems at Vedam',
    },
  ],
  timeline: [
    {
      id: 'timeline-5',
      order: 1,
      role: 'Content Writer',
      company: 'Numen Edu and Techmiles',
      period: '2021 - 2022',
      track: 'Early client portfolio track [Simultaneous Track]',
      impact: 'Built domain writing depth across education and technology categories',
      badge: 'Assignments',
    },
    {
      id: 'timeline-4',
      order: 2,
      role: 'Senior Content Writer',
      company: 'Rail Recipe',
      period: 'Aug 2021 - Jan 2022',
      track: 'Foundation track [Simultaneous Track]',
      impact: 'Supported lead growth and traffic improvements through content campaigns',
      badge: 'Early stage',
    },
    {
      id: 'timeline-3',
      order: 3,
      role: 'Freelance Content Writer',
      company: 'Teachmint',
      period: 'Jun 2021 - Dec 2022',
      track: 'Parallel freelance track [Simultaneous Track]',
      impact: 'Delivered SEO-led educational writing with intent-focused structure',
      badge: 'Freelance',
    },
    {
      id: 'timeline-2',
      order: 4,
      role: 'Marketing Copywriter',
      company: 'Adda247 and CareerPower',
      period: 'Apr 2022 - Mar 2025',
      track: 'Performance communication track',
      impact: 'Scaled CTR and campaign revenue outcomes across major exam verticals',
      badge: 'Corporate',
    },
    {
      id: 'timeline-1',
      order: 5,
      role: 'Social Media Senior Associate',
      company: 'Vedam School of Technology',
      period: 'Apr 2025 - Present',
      track: 'Leadership track',
      impact: 'Built end-to-end social and ORM systems from zero baseline',
      badge: 'Core role',
    },
  ],
  writingPortfolio: [
    {
      id: 'writing-railrecipe',
      company: 'Rail Recipe',
      companyUrl: 'https://www.railrecipe.com/',
      companyInitial: 'RR',
      type: 'Website Copy + Blog',
      domain: 'Travel · Railway Services',
      scope: 'Complete website copy and blog content for India\'s railway food delivery platform. Delivered homepage, service page, and category copy alongside regular SEO blog articles.',
      keyAreas: ['Homepage copy', 'Service page content', 'SEO blog articles', 'Category descriptions', 'CTA frameworks'],
      period: 'Aug 2021 – Jan 2022',
    },
    {
      id: 'writing-teachmint',
      company: 'Teachmint',
      companyUrl: 'https://blog.teachmint.com/',
      companyInitial: 'TM',
      type: 'Blog Writing',
      domain: 'EdTech · Online Learning',
      scope: 'Long-form SEO blog articles for one of India\'s leading EdTech platforms. Topics spanned teaching methodology, online classroom strategy, and education-sector trend analysis.',
      keyAreas: ['EdTech long-form blogs', 'Teaching strategy guides', 'Exam preparation content', 'SEO keyword targeting', 'Editorial structure'],
      period: 'Jun 2021 – Dec 2022',
    },
    {
      id: 'writing-numen',
      company: 'Numen Edu Services',
      companyUrl: 'https://numeneduservices.com/',
      companyInitial: 'NE',
      type: 'Website Copy',
      domain: 'Education Services',
      scope: 'Brand and website copy for an education services company including programme page content, about section narratives, and key landing page messaging.',
      keyAreas: ['Brand voice copy', 'Programme page content', 'About and leadership pages', 'Service descriptions', 'Landing page messaging'],
      period: '2021 – 2022',
    },
    {
      id: 'writing-techmiles',
      company: 'Techmiles',
      companyUrl: 'https://techmiles.co/',
      companyInitial: 'TC',
      type: 'Technology Content',
      domain: 'Technology · Career Development',
      scope: 'Technology and career development content for a digital skills platform. Covered skill-building articles, industry overviews, and career transition guides for tech-sector audiences.',
      keyAreas: ['Technology articles', 'Skill development content', 'Career guide writing', 'Platform copy', 'Industry overviews'],
      period: '2021 – 2022',
    },
  ],
};

const marqueeControllers = new Map();
const AVAILABLE_ICON_NAMES = new Set([
  'capability',
  'delivered',
  'proof',
  'system',
  'timeline',
  'location',
  'workmode',
  'response',
  'audience',
  'email',
  'phone',
  'arrow-right',
  'youtube',
  'instagram',
  'quora',
  'linkedin',
]);

function resolveIconName(name, fallback = 'capability') {
  return AVAILABLE_ICON_NAMES.has(name) ? name : fallback;
}

function createIcon(name, className = 'icon') {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', className);
  svg.setAttribute('aria-hidden', 'true');

  const resolvedName = resolveIconName(name);
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use.setAttribute('href', `#icon-${resolvedName}`);
  use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#icon-${resolvedName}`);
  svg.appendChild(use);
  return svg;
}

function extractYouTubeId(url) {
  const match = url.match(/(?:shorts\/|watch\?v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{11})/);
  return match ? match[1] : '';
}

function extractInstagramReelCode(url) {
  const match = url.match(/instagram\.com\/reel\/([^/?#]+)/i);
  return match ? match[1] : '';
}

function uniqueUrls(urls) {
  return [...new Set(urls.filter(Boolean))];
}

function getThumbnailCandidates(item) {
  const candidates = [];

  if (item.thumbnailPrimary) {
    candidates.push(item.thumbnailPrimary);
  }

  if (Array.isArray(item.thumbnailCandidates) && item.thumbnailCandidates.length) {
    candidates.push(...item.thumbnailCandidates);
  }

  if (item.platform === 'YouTube') {
    const id = extractYouTubeId(item.url);
    if (id) {
      candidates.push(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);
      candidates.push(`https://i.ytimg.com/vi/${id}/sddefault.jpg`);
      candidates.push(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`);
      candidates.push(`https://i.ytimg.com/vi/${id}/mqdefault.jpg`);
    }
  } else {
    const reelCode = extractInstagramReelCode(item.url);
    if (reelCode) {
      const direct = `https://www.instagram.com/reel/${reelCode}/media/?size=l`;
      const proxy = `https://images.weserv.nl/?url=${encodeURIComponent(`www.instagram.com/reel/${reelCode}/media/?size=l`)}&w=960`;
      candidates.push(direct);
      candidates.push(proxy);
    }
  }

  if (item.thumbnailFallback) {
    candidates.push(item.thumbnailFallback);
  }

  return uniqueUrls(candidates);
}

function applyThumbnail(img, media, item) {
  const candidates = getThumbnailCandidates(item);
  const card = media.closest('.work-card');

  const setFallbackState = (reason) => {
    media.classList.add('is-fallback');
    media.dataset.fallbackReason = reason;
    if (card) {
      card.classList.add('is-fallback');
      card.dataset.fallbackReason = reason;
    }
  };

  const clearFallbackState = () => {
    media.classList.remove('is-fallback');
    media.dataset.fallbackReason = '';
    if (card) {
      card.classList.remove('is-fallback');
      card.dataset.fallbackReason = '';
    }
  };

  if (!candidates.length) {
    setFallbackState('no_candidates');
    return;
  }

  // If the first candidate is a local asset, apply immediately — no CORS issues
  const firstCandidate = candidates[0];
  if (firstCandidate && !firstCandidate.startsWith('http')) {
    img.onload = clearFallbackState;
    img.onerror = () => { tryNext(1); };
    img.src = firstCandidate;
    return;
  }

  let index = 0;

  const tryNext = (startIndex) => {
    if (startIndex !== undefined) index = startIndex;
    if (index >= candidates.length) {
      setFallbackState(item.fallbackReason || 'all_candidates_failed');
      return;
    }

    const candidate = candidates[index];
    index += 1;

    img.onload = () => {
      clearFallbackState();
    };

    img.onerror = () => {
      item.fallbackReason = `candidate_${index}_failed`;
      tryNext();
    };

    img.src = candidate;
  };

  tryNext();
}

function createWorkCard(item) {
  const card = document.createElement('article');
  card.className = 'work-card zoom-trigger reveal';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `View production details: ${item.title}`);
  card.dataset.platform = item.platform;

  const mediaLink = document.createElement('div');
  mediaLink.className = 'work-media-link';

  const media = document.createElement('div');
  media.className = 'work-media';

  const thumbnail = document.createElement('img');
  thumbnail.className = 'work-thumb';
  thumbnail.loading = 'lazy';
  thumbnail.decoding = 'async';
  thumbnail.alt = `${item.platform} visual for ${item.title}`;

  const overlay = document.createElement('div');
  overlay.className = 'work-media-overlay';
  overlay.innerHTML = `<span class="play-icon-wrap">${createIcon(item.platform === 'YouTube' ? 'youtube' : 'instagram').outerHTML}</span>`;

  media.append(thumbnail, overlay);
  mediaLink.appendChild(media);

  const content = document.createElement('div');
  content.className = 'work-content';

  content.innerHTML = `
    <div class="work-meta-top">
      <span class="work-platform-badge">${item.platform}</span>
      <span class="work-category-tag">${item.category}</span>
    </div>
    <h4 class="work-title">${item.title}</h4>
    <div class="work-impact-bar">
      <span class="impact-label">Performance Peak</span>
      <span class="impact-value">${item.metric}</span>
    </div>
  `;

  card.append(mediaLink, content);

  card.addEventListener('click', () => {
    if (window.openProductionModal) {
      window.openProductionModal(item);
    }
  });

  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (window.openProductionModal) {
        window.openProductionModal(item);
      }
    }
  });

  applyThumbnail(thumbnail, media, item);
  return card;
}


function createPresenceCard(item) {
  const card = document.createElement('a');
  card.className = 'presence-card';
  card.href = item.url;
  card.target = '_blank';
  card.rel = 'noopener noreferrer';

  const platform = document.createElement('div');
  platform.className = 'presence-platform';

  // Logo wrap: try img first, fall back to text-initial badge
  const logoWrap = document.createElement('span');
  logoWrap.className = 'presence-icon-wrap';
  const badgeStyle = (item.badgeStyle || item.platform || 'youtube').toLowerCase();
  logoWrap.classList.add(`brand-${badgeStyle}`);

  if (item.logoFile) {
    const logoImg = document.createElement('img');
    logoImg.className = 'presence-logo';
    logoImg.src = item.logoFile;
    logoImg.alt = item.logoAlt || item.platform;
    logoImg.onerror = () => {
      logoImg.remove();
      const initial = document.createElement('span');
      initial.className = 'presence-fallback-initial';
      initial.textContent = item.fallbackInitial || item.platform.charAt(0);
      logoWrap.appendChild(initial);
    };
    logoWrap.appendChild(logoImg);
  } else {
    // SVG icon fallback
    logoWrap.appendChild(createIcon(item.icon, 'icon'));
  }

  const title = document.createElement('div');
  title.className = 'presence-title';

  const label = document.createElement('p');
  label.className = 'presence-label';
  label.textContent = item.platform;

  const metric = document.createElement('span');
  metric.className = 'presence-metric';
  metric.textContent = item.metric;

  const context = document.createElement('p');
  context.className = 'presence-context';
  context.textContent = item.context;

  const cta = document.createElement('span');
  cta.className = 'presence-cta';
  cta.textContent = item.cta;
  cta.appendChild(createIcon('arrow-right', 'icon'));

  title.append(label, metric);
  platform.append(logoWrap, title);
  card.append(platform, context, cta);
  return card;
}

function createMetricItem(item, valueClass, labelClass, wrapperClass) {
  const wrapper = document.createElement('article');
  wrapper.className = wrapperClass;

  const value = document.createElement('p');
  value.className = valueClass;
  value.textContent = item.value;

  const label = document.createElement('p');
  label.className = labelClass;
  label.textContent = item.label;

  wrapper.append(value, label);
  return wrapper;
}

function createSystemCard(item) {
  const card = document.createElement('article');
  card.className = 'system-card';

  const titleRow = document.createElement('div');
  titleRow.className = 'system-title-row';
  titleRow.appendChild(createIcon(item.icon, 'icon'));

  const title = document.createElement('h4');
  title.textContent = item.title;

  const desc = document.createElement('p');
  desc.textContent = item.description;

  titleRow.appendChild(title);
  card.append(titleRow, desc);

  if (item.proof) {
    const proof = document.createElement('span');
    proof.className = 'system-proof';
    proof.textContent = item.proof;
    card.appendChild(proof);
  }

  return card;
}

function createExpertiseCard(item) {
  const card = document.createElement('article');
  card.className = 'expertise-card reveal';

  const header = document.createElement('div');
  header.className = 'expertise-header';
  header.appendChild(createIcon(item.icon, 'icon'));

  const title = document.createElement('h3');
  title.textContent = item.capability;
  header.appendChild(title);

  const body = document.createElement('div');
  body.className = 'expertise-body';

  // High-impact delivery points
  const points = item.delivered.split('.').filter(p => p.trim().length > 0);
  const list = document.createElement('ul');
  list.className = 'expertise-list';
  points.forEach(point => {
    const li = document.createElement('li');
    li.textContent = point.trim();
    list.appendChild(li);
  });

  const proofBox = document.createElement('div');
  proofBox.className = 'expertise-proof-box';
  proofBox.innerHTML = `
    <span class="proof-label">Primary Outcome</span>
    <span class="proof-val">${item.proof}</span>
  `;

  card.append(header, list, proofBox);
  return card;
}

function createTimelineItem(item, index) {
  const wrapper = document.createElement('article');
  const isEven = index % 2 === 1;
  wrapper.className = `timeline-item reveal${isEven ? ' timeline-item-even' : ' timeline-item-odd'}`;
  wrapper.style.transitionDelay = `${Math.min(index * 0.08, 0.4)}s`;
  wrapper.dataset.order = item.order || index;

  const node = document.createElement('span');
  node.className = 'timeline-node';
  node.appendChild(createIcon('timeline', 'icon'));

  const card = document.createElement('div');
  card.className = 'timeline-card';

  const periodRow = document.createElement('div');
  periodRow.className = 'timeline-period-row';

  const period = document.createElement('p');
  period.className = 'timeline-period';
  period.textContent = item.period;

  periodRow.appendChild(period);
  if (item.badge) {
    const badge = document.createElement('span');
    badge.className = 'timeline-badge';
    badge.textContent = item.badge;
    periodRow.appendChild(badge);
  }

  const role = document.createElement('h4');
  role.className = 'timeline-role';
  role.textContent = item.role;

  const company = document.createElement('p');
  company.className = 'timeline-company';
  company.textContent = item.company;

  const track = document.createElement('p');
  track.className = 'timeline-track';
  track.textContent = item.track;

  const impact = document.createElement('span');
  impact.className = 'timeline-impact';
  impact.textContent = item.impact;

  card.append(periodRow, role, company, track, impact);
  wrapper.append(node, card);
  return wrapper;
}

function createWritingClientCard(item) {
  const card = document.createElement('article');
  card.className = 'writing-client-card reveal';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `View details for ${item.company}`);

  const head = document.createElement('div');
  head.className = 'writing-client-head';

  const badge = document.createElement('span');
  badge.className = 'writing-client-badge';
  badge.textContent = item.companyInitial;

  const headText = document.createElement('div');
  headText.className = 'writing-client-head-text';

  const companyName = document.createElement('span');
  companyName.className = 'writing-client-name';
  companyName.textContent = item.company;

  const period = document.createElement('span');
  period.className = 'writing-client-period';
  period.textContent = item.period;

  headText.append(companyName, period);
  head.append(badge, headText);

  const typeRow = document.createElement('div');
  typeRow.className = 'writing-type-row';

  const typeTag = document.createElement('span');
  typeTag.className = 'writing-type-tag';
  typeTag.textContent = item.type;

  const domainTag = document.createElement('span');
  domainTag.className = 'writing-domain-tag';
  domainTag.textContent = item.domain;

  typeRow.append(typeTag, domainTag);

  const scope = document.createElement('p');
  scope.className = 'writing-client-scope';
  scope.textContent = item.scope;

  const areasLabel = document.createElement('p');
  areasLabel.className = 'writing-areas-label';
  areasLabel.textContent = 'Key areas';

  const areas = document.createElement('div');
  areas.className = 'writing-areas';
  item.keyAreas.forEach((area) => {
    const chip = document.createElement('span');
    chip.className = 'writing-area-chip';
    chip.textContent = area;
    areas.appendChild(chip);
  });

  const cta = document.createElement('span');
  cta.className = 'writing-client-cta';
  cta.textContent = 'View Project Details';

  card.append(head, typeRow, scope, areasLabel, areas, cta);

  card.addEventListener('click', () => {
    if (window.openWritingModal) {
      window.openWritingModal(item.id);
    }
  });

  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (window.openWritingModal) {
        window.openWritingModal(item.id);
      }
    }
  });

  return card;
}

const writingPortfolioModals = {
  'writing-railrecipe': {
    title: 'Rail Recipe',
    domain: 'Travel · FoodTech',
    period: 'Aug 2021 – Jan 2022',
    type: 'SEO + Website Copy',
    summary: 'Complete editorial and SEO ownership for India\'s leading railway food delivery platform. The mandate focused on building trust with travelers while optimizing for high-intent search queries.',
    sections: [
      {
        title: 'Core Deliverables',
        items: [
          'Homepage Copy: Crafted trust-building narratives for the primary landing experience.',
          'Service Pages: Detailed mapping of delivery workflows across 500+ Indian stations.',
          'SEO Strategy: Keyword research and content clustering for "Food in Train" queries.',
          'Brand Voice: Established a helpful, reliable, and prompt tone for the platform.'
        ]
      },
      {
        title: 'Measurable Outcomes',
        items: [
          'Organic Traffic: Contributed to a steady increase in SEO-driven app installs.',
          'Search Ranking: Achieved page-1 rankings for 15+ high-volume category keywords.',
          'User Trust: Reduced bounce rates on service-specific landing pages by 22%.'
        ]
      }
    ]
  },
  'writing-teachmint': {
    title: 'Teachmint',
    domain: 'EdTech · SaaS',
    period: 'Jun 2021 – Dec 2022',
    type: 'EdTech Editorial',
    summary: 'Long-form editorial and pedagogy-focused content strategy for India\'s prominent EdTech platform. Translated complex educational concepts into actionable guides for teachers and students.',
    sections: [
      {
        title: 'Core Deliverables',
        items: [
          'Pedagogy Blogs: Deep-dives into hybrid learning, classroom management, and digital teaching.',
          'SEO Articles: Structured long-form content targeting educational keywords with 2000+ words.',
          'Career Guides: Comprehensive roadmaps for students navigating competitive exams.',
          'Tone Management: Maintained an authoritative yet accessible "Expert-Educator" voice.'
        ]
      },
      {
        title: 'Measurable Outcomes',
        items: [
          'Domain Authority: Supported blog traffic growth through consistent SEO-led publishing.',
          'Engagement: High average time-on-page (3m+) for strategic thought-leadership pieces.',
          'Distribution: Featured in company newsletters reaching 1M+ active users.'
        ]
      }
    ]
  },
  'writing-numen': {
    title: 'Numen Edu Services',
    domain: 'Corporate Services',
    period: '2021 – 2022',
    type: 'Brand Architecture',
    summary: 'Strategic brand narrative and website architecture for a corporate education service provider. Focused on B2B positioning and program mapping.',
    sections: [
      {
        title: 'Core Deliverables',
        items: [
          'Brand Voice Manual: Defined the corporate yet empathetic tone for all communications.',
          'Website Re-architecture: Mapped program pathways for clarity and conversion.',
          'Landing Pages: Designed high-conversion copy for specialized training modules.',
          'Leadership Profiles: Crafted compelling narratives for executive-facing pages.'
        ]
      },
      {
        title: 'Measurable Outcomes',
        items: [
          'Conversion: Improved lead-capture efficiency on core program pages by 18%.',
          'Brand Clarity: Reduced sales cycle time by providing clearer pre-sales content.',
          'Professional Positioning: Elevated perceived brand value among corporate clients.'
        ]
      }
    ]
  },
  'writing-techmiles': {
    title: 'Techmiles',
    domain: 'Career Tech',
    period: '2021 – 2022',
    type: 'Technical Copy',
    summary: 'Technical and career-oriented content for a digital skills platform. Bridged the gap between technical complexity and audience readability.',
    sections: [
      {
        title: 'Core Deliverables',
        items: [
          'Skill Overviews: Explaining coding, UI/UX, and data science concepts to beginners.',
          'Career Roadmaps: Step-by-step guides for transitioning into high-demand tech roles.',
          'Platform Messaging: UI copy and microcopy for the learning management system.',
          'Industry Reports: Summarizing tech hiring trends and emerging skill requirements.'
        ]
      },
      {
        title: 'Measurable Outcomes',
        items: [
          'Retention: Improved user engagement within skill-building modules.',
          'Search Visibility: Ranked for niche "tech career transition" Long-tail keywords.',
          'Community Growth: Provided the narrative backbone for the early-stage community.'
        ]
      }
    ]
  }
};

function initializeWritingModal() {
  const overlay = document.getElementById('caseModalOverlay');
  const body = document.getElementById('caseModalBody');
  const closeBtn = document.getElementById('caseModalClose');

  if (!overlay || !body || !closeBtn) return;

  window.openWritingModal = (id) => {
    const data = writingPortfolioModals[id];
    if (!data) return;

    body.innerHTML = `
      <header class="modal-header">
        <div class="modal-header-top">
          <span class="writing-type-tag" style="background: var(--accent-faded); color: var(--accent-strong)">${data.type}</span>
          <span class="modal-period">${data.period}</span>
        </div>
        <h2>${data.title}</h2>
        <div class="modal-role-meta">
          <span class="modal-role">${data.domain}</span>
        </div>
        <p class="modal-summary">${data.summary}</p>
      </header>
      <div id="writingModalContent"></div>
    `;

    const container = body.querySelector('#writingModalContent');

    data.sections.forEach(sec => {
      const sectionEl = document.createElement('section');
      sectionEl.className = 'modal-section';

      const title = document.createElement('h3');
      title.className = 'modal-section-title';
      const iconType = sec.title.toLowerCase().includes('outcome') ? 'proof' : 'delivered';
      title.innerHTML = `<svg class="icon"><use href="#icon-${iconType}"></use></svg> ${sec.title}`;
      sectionEl.appendChild(title);

      const listDiv = document.createElement('div');
      listDiv.className = 'modal-technical-list';
      listDiv.innerHTML = `<ul>${sec.items.map(li => `<li>${li}</li>`).join('')}</ul>`;
      sectionEl.appendChild(listDiv);

      container.appendChild(sectionEl);
    });

    overlay.classList.add('is-active');
    document.body.classList.add('modal-open');
    overlay.setAttribute('aria-hidden', 'false');
    closeBtn.focus();
  };
}

function renderWorkItems(filter = 'all') {
  const container = document.getElementById('productionGrid');
  if (!container) return;

  container.innerHTML = '';

  const allItems = [
    ...portfolioWorkData.youtubeShorts,
    ...portfolioWorkData.instagramReels
  ];

  const filteredItems = filter === 'all'
    ? allItems
    : allItems.filter(item => item.platform === filter);

  filteredItems.forEach((item) => {
    container.appendChild(createWorkCard(item));
  });

  // Re-trigger reveal animations if necessary
  if (window.initializeReveal) {
    window.initializeReveal();
  }
}

function initializeProductionFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      renderWorkItems(btn.dataset.filter);
    });
  });
}

function initializeProductionModal() {
  const overlay = document.getElementById('caseModalOverlay');
  const body = document.getElementById('caseModalBody');
  const closeBtn = document.getElementById('caseModalClose');

  if (!overlay || !body || !closeBtn) return;

  window.openProductionModal = (item) => {
    body.innerHTML = `
      <header class="modal-header">
        <div class="modal-header-top">
          <span class="work-platform-badge">${item.platform}</span>
          <span class="work-category-tag">${item.category}</span>
        </div>
        <h2>${item.title}</h2>
        <div class="modal-impact-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 20px 0;">
           <div class="modal-impact-card" style="background: #f8fbfa; padding: 16px; border-radius: 12px; border-left: 4px solid var(--accent)">
             <span style="display: block; font-size: 0.7rem; font-weight: 800; text-transform: uppercase; color: var(--text-muted)">Peak Metric</span>
             <span style="display: block; font-size: 1.2rem; font-weight: 800; color: var(--accent); margin-top: 4px;">${item.metric}</span>
           </div>
           <div class="modal-impact-card" style="background: #f8fbfa; padding: 16px; border-radius: 12px; border-left: 4px solid var(--accent-strong)">
             <span style="display: block; font-size: 0.7rem; font-weight: 800; text-transform: uppercase; color: var(--text-muted)">Project Status</span>
             <span style="display: block; font-size: 1.2rem; font-weight: 800; color: var(--accent-strong); margin-top: 4px;">Live Content</span>
           </div>
        </div>
      </header>
      
      <div class="modal-video-container" style="position: relative; padding-bottom: 177.78%; height: 0; overflow: hidden; border-radius: 16px; background: #000; margin-bottom: 24px;">
        <iframe 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
          src="${getEmbedUrl(item)}" 
          title="${item.title}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>

      <div class="modal-footer" style="margin-top: 20px; text-align: center;">
        <a href="${item.url}" target="_blank" class="btn btn-primary" style="display: inline-block;">View Original Platform Post</a>
      </div>
    `;

    overlay.classList.add('is-active');
    document.body.classList.add('modal-open');
    overlay.setAttribute('aria-hidden', 'false');
    closeBtn.focus();
  };
}

function getEmbedUrl(item) {
  if (item.platform === 'YouTube') {
    const videoId = item.url.split('/shorts/')[1]?.split('?')[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  } else {
    // Instagram embed is trickier due to their API/CSP, 
    // but we can try the /reels/embed/ path or just link back if needed.
    // For now, using a standard embed format.
    const reelId = item.url.split('/reel/')[1]?.split('/')[0];
    return `https://www.instagram.com/reels/${reelId}/embed/`;
  }
}


function renderChannelPresence() {
  const grid = document.getElementById('channelPresenceGrid');
  if (!grid) return;

  grid.innerHTML = '';
  portfolioWorkData.channelPresence.forEach((item) => {
    grid.appendChild(createPresenceCard(item));
  });
}

// function renderCaseStudyData() removed - logic integrated into initializeCaseModal()


function renderExpertise() {
  const grid = document.getElementById('expertiseGrid');
  if (!grid) return;

  grid.innerHTML = '';
  portfolioWorkData.expertise.forEach((item) => {
    grid.appendChild(createExpertiseCard(item));
  });
}

function renderTimeline() {
  const timeline = document.getElementById('jobPathwayTimeline');
  if (!timeline) return;

  timeline.innerHTML = '';
  portfolioWorkData.timeline.forEach((item, index) => {
    timeline.appendChild(createTimelineItem(item, index));
  });
}

function renderWritingSamples() {
  const grid = document.getElementById('writingClientGrid');
  if (!grid) return;

  grid.innerHTML = '';
  portfolioWorkData.writingPortfolio.forEach((item) => {
    grid.appendChild(createWritingClientCard(item));
  });
}

function initializeStickyNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  window.addEventListener(
    'scroll',
    () => {
      nav.classList.toggle('scrolled', window.scrollY > 10);
    },
    { passive: true }
  );
}

function initializeMobileMenu() {
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (!navToggle || !mobileMenu || !mobileClose) return;

  const openMenu = () => {
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  navToggle.addEventListener('click', openMenu);
  mobileClose.addEventListener('click', closeMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  mobileMenu.addEventListener('click', (event) => {
    if (event.target === mobileMenu) {
      closeMenu();
    }
  });
}

function initializeSmoothScroll() {
  const nav = document.getElementById('nav');

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      const navHeight = nav ? nav.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

function initializeActiveNavLink() {
  const sections = document.querySelectorAll('main section[id]');
  const links = document.querySelectorAll('.nav-links a, .mobile-link');
  if (!sections.length || !links.length) return;

  const setActive = (id) => {
    links.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('active', isActive);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      rootMargin: '-40% 0px -45% 0px',
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function prepareMarqueeLoop(viewport) {
  const originals = Array.from(viewport.querySelectorAll('.work-card:not(.is-clone)'));
  if (originals.length < 2) {
    return 0;
  }

  const fragment = document.createDocumentFragment();
  originals.forEach((card) => {
    const clone = card.cloneNode(true);
    clone.classList.add('is-clone');
    clone.setAttribute('aria-hidden', 'true');
    clone.querySelectorAll('a, button, [tabindex]').forEach((element) => {
      element.setAttribute('tabindex', '-1');
    });
    fragment.appendChild(clone);
  });
  viewport.appendChild(fragment);

  const firstClone = viewport.querySelector('.work-card.is-clone');
  return firstClone ? firstClone.offsetLeft : viewport.scrollWidth / 2;
}

function getCarouselStep(target) {
  const firstCard = target.querySelector('.work-card:not(.is-clone)') || target.querySelector('.work-card');
  if (!firstCard) {
    return Math.round(target.clientWidth * 0.8);
  }

  const styles = window.getComputedStyle(target);
  const gap = parseFloat(styles.columnGap || styles.gap || '0');
  return Math.round(firstCard.getBoundingClientRect().width + gap);
}

function createMarqueeController(viewport) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) {
    return {
      pause() { },
      resume() { },
      resumeWithDelay() { },
      step() { },
      refresh() { },
    };
  }

  let loopWidth = prepareMarqueeLoop(viewport);
  let rafId = null;
  let running = false;
  let delayedResumeId = null;
  let lastTimestamp = 0;
  const speedPxPerSec = 74;

  const canRun = () => loopWidth > viewport.clientWidth + 8;

  const frame = (timestamp) => {
    if (!running) return;

    if (lastTimestamp === 0) {
      lastTimestamp = timestamp;
    }

    const delta = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    viewport.scrollLeft += (speedPxPerSec * delta) / 1000;

    if (viewport.scrollLeft >= loopWidth) {
      viewport.scrollLeft -= loopWidth;
    }

    rafId = window.requestAnimationFrame(frame);
  };

  const start = () => {
    if (running || !canRun()) return;
    running = true;
    lastTimestamp = 0;
    viewport.classList.remove('is-paused');
    delete viewport.dataset.userPaused;
    rafId = window.requestAnimationFrame(frame);
  };

  const stop = (userTriggered = false) => {
    if (!running) return;
    running = false;
    viewport.classList.add('is-paused');
    // Only show the visible pause badge when user explicitly paused
    if (userTriggered) {
      viewport.dataset.userPaused = 'true';
    }
    if (rafId !== null) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
  };
}

// Obsolete Carousel System Removed in favor of Production Grid Showcase

function initializeReveal() {
  // GSAP Hero Animations
  if (window.gsap) {
    // Floating Blobs Parallax
    gsap.to('.blob-1', {
      y: '50px',
      x: '30px',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });
    gsap.to('.blob-2', {
      y: '-80px',
      x: '-40px',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5
      }
    });

    // Snapshot Chips Floating Animation
    const chips = document.querySelectorAll('.snapshot-chip');
    chips.forEach((chip, i) => {
      gsap.to(chip, {
        y: i % 2 === 0 ? -12 : 12,
        duration: 3 + i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: i * 0.2
      });
    });

    // Hero Content Entrance
    const tl = gsap.timeline({ defaults: { ease: 'expo.out', duration: 1.2 } });
    tl.from('.hero-layout h1', { y: 60, opacity: 0, delay: 0.2 })
      .from('.hero-role', { y: 30, opacity: 0 }, '-=0.8')
      .from('.hero-summary', { y: 20, opacity: 0 }, '-=1')
      .from('.snapshot-chip', { scale: 0.8, opacity: 0, stagger: 0.1 }, '-=1')
      .from('.hero-actions', { y: 20, opacity: 0 }, '-=1')
      .from('.hero-metric', { y: 40, opacity: 0, stagger: 0.15 }, '-=0.8');
  }

  // Standard Scroll Reveal for non-hero elements
  const revealItems = document.querySelectorAll('.reveal:not(.hero *)');
  if (!revealItems.length) return;

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.12,
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

const caseStudyModals = {
  vedam: {
    title: 'Vedam School of Technology',
    role: 'Social Media Senior Associate',
    period: 'Apr 2025 – Present',
    badge: 'Core Role',
    summary: 'Built the entire social & content function from zero — generating 4.75M+ ecosystem reach and 281+ high-intent leads within the first operating cycle. Established Vedam as a leading institutional voice across six active channels with an 82x follower growth trajectory.',
    metrics: [
      { label: 'Ecosystem Reach', val: '4.75M+', color: 'var(--accent)' },
      { label: 'Cumulative Leads', val: '430+', color: '#1B4D3E' },
      { label: 'YouTube Views', val: '4.75M/Mo', color: '#D44638' },
      { label: 'Follower Growth', val: '82×', color: '#F4B400' }
    ],
    systems: portfolioWorkData.vedamSystems,
    platforms: [
      {
        name: 'Instagram',
        items: [
          'Scaled from 78 to 6,400+ followers in 10 months (82x growth)',
          'High-water mark: 7.7M views in Jan 2026 reaching 1.1M+ unique accounts',
          'Built weekly 7-post architecture across six content buckets (Student Stories, Tech-AI, Campus Life)'
        ]
      },
      {
        name: 'YouTube',
        items: [
          'Achieved 4.75M monthly views in Dec 2025 with 4.5x subscriber growth',
          'Owned end-to-end shorts production pipeline: script, sequence, and SEO packaging',
          'Maintained long-form CTR in the 4-6.7% range for educational content'
        ]
      },
      {
        name: 'LinkedIn',
        items: [
          'Lifted weekly cycle impressions from 21K to 130K+ via thought-leadership pillars',
          'Generated 66 direct leads with a 13.1% peak engagement rate',
          'Outperformed B2B competitors (Scaler, Mirai) in consistent engagement metrics'
        ]
      }
    ],
    orm: {
      text: 'Strategically positioned Vedam at #1 on Google for "Vedam School of Technology review" via managed Quora and Reddit threads. Established a 5.0-star GMB profile with 100+ verified student reviews.',
      chips: [
        'Google Rank #1 (Review Intent)',
        '6.6K+ Quora views / 80+ Upvotes',
        '100% GMB Sentiment (5.0 Stars)',
        'Active Reddit monitoring (btechtards)'
      ]
    }
  },
  adda: {
    title: 'Adda247 & CareerPower',
    role: 'Marketing Copywriter',
    period: 'Apr 2022 – Mar 2025',
    badge: 'Corporate',
    summary: 'Led lifecycle communication and content strategy for 5M+ monthly active users. Achieved a 10x lift in push notification CTR and drove significant revenue spikes through high-performance CRM frameworks.',
    metrics: [
      { label: 'Peak Push CTR', val: '7.0%', color: 'var(--accent)' },
      { label: 'Revenue Uplift', val: '2.4×', color: '#1B4D3E' },
      { label: 'MAU Lifecycle', val: '5M+', color: '#1A73E8' },
      { label: 'Campaign Impr.', val: '241K+', color: '#F4B400' }
    ],
    ctrProgress: [
      { label: 'Legacy Baseline', val: '0.7%' },
      { label: 'Optimized Avg', val: '3-5%' },
      { label: 'Campaign Peak', val: '7%', isPeak: true }
    ],
    ownership: [
      'Engineered push notification and CRM messaging for SSC, Railways, Banking, and UPSC verticals',
      'Deployed automated lifecycle drips on WhatsApp and Email using MoEngage personalization',
      'High-Performance Campaign: Independence Day 2024 achieved 2x revenue vs baseline',
      'Recipient of "Above and Beyond" Award (May 2024) for operational excellence',
      'Developed standardized DFP banner copy frameworks for seasonal sale events'
    ],
    credential: {
      title: 'Certificate of Appreciation',
      text: 'Awarded by Adda247 leadership (Anil Nagar, CEO & Saurabh Bansal, COO) for outperforming growth targets in the 2024 operating cycle.'
    }
  }
};

function renderDonutChart(metrics) {
  const container = document.createElement('div');
  container.className = 'chart-donut-container';

  const wrapper = document.createElement('div');
  wrapper.className = 'chart-donut-wrapper';

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 40 40');
  svg.setAttribute('width', '140');
  svg.setAttribute('height', '140');

  let offset = 0;
  // Simple equal slices for visualization, or we could calculate based on values
  const sliceSize = 100 / metrics.length;

  metrics.forEach((m, i) => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '20');
    circle.setAttribute('cy', '20');
    circle.setAttribute('r', '15.915');
    circle.setAttribute('fill', 'transparent');
    circle.setAttribute('stroke', m.color);
    circle.setAttribute('stroke-width', '4');
    circle.setAttribute('stroke-dasharray', `${sliceSize - 2} 100`);
    circle.setAttribute('stroke-dashoffset', `-${offset}`);
    svg.appendChild(circle);
    offset += sliceSize;
  });

  const center = document.createElement('div');
  center.className = 'chart-donut-center';
  center.innerHTML = `<span class="val">${metrics[0].val}</span><span class="lbl">Primary</span>`;

  wrapper.appendChild(svg);
  wrapper.appendChild(center);

  const legend = document.createElement('div');
  legend.className = 'chart-legend';
  metrics.forEach(m => {
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = `
      <span class="legend-dot" style="background: ${m.color}"></span>
      <span class="legend-label">${m.label}</span>
      <span class="legend-meta">${m.val}</span>
    `;
    legend.appendChild(item);
  });

  container.appendChild(wrapper);
  container.appendChild(legend);
  return container;
}

function renderBarChart(data) {
  const container = document.createElement('div');
  container.className = 'chart-bar-container';

  data.forEach((item, i) => {
    const row = document.createElement('div');
    row.className = 'bar-row';
    // Use the index to stagger animation
    const delay = i * 0.1;

    row.innerHTML = `
      <div class="bar-head">
        <span class="bar-label">${item.label || item.title}</span>
        <span class="bar-value">${item.value || (item.proof ? 'Built' : '')}</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="transition-delay: ${delay}s"></div>
      </div>
    `;
    container.appendChild(row);
  });
  return container;
}

function renderCTRChart(data) {
  const container = document.createElement('div');
  container.className = 'ctr-chart';

  data.forEach(item => {
    const wrapper = document.createElement('div');
    wrapper.className = 'ctr-bar-wrapper';

    const h = item.isPeak ? '100%' : (item.val.includes('-') ? '60%' : '30%');

    wrapper.innerHTML = `
      <div class="ctr-bar ${item.isPeak ? 'is-peak' : ''}" style="height: ${h}">
        <span class="ctr-bar-val">${item.val}</span>
      </div>
      <span class="ctr-bar-label">${item.label}</span>
    `;
    container.appendChild(wrapper);
  });
  return container;
}

function initializeCaseModal() {
  const overlay = document.getElementById('caseModalOverlay');
  const modal = document.getElementById('caseModal');
  const body = document.getElementById('caseModalBody');
  const closeBtn = document.getElementById('caseModalClose');
  const previews = document.querySelectorAll('.case-preview-card');

  if (!overlay || !modal || !body || !closeBtn) return;

  const openModal = (caseId) => {
    const data = caseStudyModals[caseId];
    if (!data) return;

    body.innerHTML = `
      <header class="modal-header">
        <div class="modal-header-top">
          <span class="case-preview-badge">${data.badge}</span>
          <span class="modal-period">${data.period}</span>
        </div>
        <h2>${data.title}</h2>
        <div class="modal-role-meta">
          <span class="modal-role">${data.role}</span>
        </div>
        <p class="modal-summary">${data.summary}</p>
      </header>

      <section class="modal-section">
        <h3 class="modal-section-title">
          <svg class="icon"><use href="#icon-proof"></use></svg>
          Outcomes & Metrics
        </h3>
        <div class="modal-data-grid">
          <div class="chart-card">
            <h4>Reach & Acquisition Split</h4>
            <div id="donutPlaceholder"></div>
          </div>
          <div class="chart-card">
            <h4>${caseId === 'vedam' ? 'Operational Yield' : 'CTR Progression'}</h4>
            <div id="metricChartPlaceholder"></div>
          </div>
        </div>
      </section>
    `;

    // Inject charts
    const donutPlace = body.querySelector('#donutPlaceholder');
    const metricPlace = body.querySelector('#metricChartPlaceholder');

    donutPlace.appendChild(renderDonutChart(data.metrics));
    if (caseId === 'vedam') {
      metricPlace.appendChild(renderBarChart(data.metrics));
    } else {
      metricPlace.appendChild(renderCTRChart(data.ctrProgress));
    }

    // Add remaining sections
    if (data.systems) {
      const sysSection = document.createElement('section');
      sysSection.innerHTML = `
        <h3 class="modal-section-title">
          <svg class="icon"><use href="#icon-system"></use></svg>
          Systems & Governance Built
        </h3>
        <div class="modal-systems-matrix"></div>
      `;
      const sysGrid = sysSection.querySelector('.modal-systems-matrix');
      data.systems.forEach(sys => {
        const card = document.createElement('div');
        card.className = 'modal-system-card';
        card.innerHTML = `
          <div class="msc-head">
            <svg class="icon"><use href="#icon-${sys.icon || 'system'}"></use></svg>
            <span>${sys.title}</span>
          </div>
          <p class="msc-desc">${sys.description}</p>
          <div class="msc-proof">${sys.proof || 'Standardised'}</div>
        `;
        sysGrid.appendChild(card);
      });
      body.appendChild(sysSection);
    }

    if (data.platforms) {
      const platSection = document.createElement('section');
      platSection.innerHTML = `
        <h3 class="modal-section-title">
          <svg class="icon"><use href="#icon-delivered"></use></svg>
          Platform Execution
        </h3>
        <div class="modal-platform-grid"></div>
      `;
      const platGrid = platSection.querySelector('.modal-platform-grid');
      data.platforms.forEach(plat => {
        const item = document.createElement('div');
        item.className = 'modal-platform-item';
        item.innerHTML = `
          <h4>${plat.name}</h4>
          <ul>${plat.items.map(li => `<li>${li}</li>`).join('')}</ul>
        `;
        platGrid.appendChild(item);
      });
      body.appendChild(platSection);
    }

    if (data.orm) {
      const ormSection = document.createElement('section');
      ormSection.className = 'modal-orm-section';
      ormSection.innerHTML = `
        <h3 class="modal-section-title" style="margin-top: 0">ORM & Brand Safety</h3>
        <p>${data.orm.text}</p>
        <div class="modal-orm-chips">
          ${data.orm.chips.map(chip => `<span class="modal-orm-chip">${chip}</span>`).join('')}
        </div>
      `;
      body.appendChild(ormSection);
    }

    if (data.ownership) {
      const ownSection = document.createElement('section');
      ownSection.innerHTML = `
        <h3 class="modal-section-title">Ownership & Scope</h3>
        <div class="modal-platform-grid">
           <div class="modal-platform-item" style="grid-column: 1 / -1">
             <ul>${data.ownership.map(li => `<li>${li}</li>`).join('')}</ul>
           </div>
        </div>
      `;
      body.appendChild(ownSection);
    }

    if (data.credential) {
      const credSection = document.createElement('section');
      credSection.className = 'modal-credential';
      credSection.innerHTML = `
        <div class="modal-credential-icon">
          <svg class="icon" style="width: 24px; height: 24px;"><use href="#icon-expertise"></use></svg>
        </div>
        <div class="modal-credential-content">
          <h4>${data.credential.title}</h4>
          <p>${data.credential.text}</p>
        </div>
      `;
      body.appendChild(credSection);
    }

    overlay.classList.add('is-active');
    document.body.classList.add('modal-open');
    overlay.setAttribute('aria-hidden', 'false');

    // Trigger bar animations
    requestAnimationFrame(() => {
      body.querySelectorAll('.bar-fill').forEach(fill => {
        fill.parentElement.parentElement.classList.add('is-active');
      });
    });

    closeBtn.focus();
  };

  const closeModal = () => {
    overlay.classList.remove('is-active');
    document.body.classList.remove('modal-open');
    overlay.setAttribute('aria-hidden', 'true');
    body.innerHTML = '';
  };

  previews.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.id.replace('Preview', '');
      openModal(id);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const id = card.id.replace('Preview', '');
        openModal(id);
      }
    });
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-active')) {
      closeModal();
    }
  });
}

const strategicSystemsData = {
  sysInsta: {
    title: 'Instagram Operating System',
    badge: 'System 01',
    purpose: 'Vedam\'s primary acquisition channel. Governs content rhythm, performance tracking, and competitive positioning. Scaled from 78 to 6,400+ followers in 10 months.',
    sections: [
      {
        title: 'Weekly Posting Rhythm (INSTA MOM)',
        type: 'table',
        headers: ['Day', 'Content Bucket', 'Core Topic'],
        rows: [
          ['Mon', 'Student Content', 'Campus Life / Vox Pop'],
          ['Tue', 'Student Story', 'Spotlights & Achievements'],
          ['Wed', 'Student x Vedam', 'Interaction / Highlights'],
          ['Thu', 'Student Story', 'Startups & Tech Projects'],
          ['Fri', 'Tech / AI', 'Weekly Tech/AI News'],
          ['Sat', 'Campus Events', 'Event Recap Reels'],
          ['Sun', 'Vedam Updates', 'Weekly Recap Carousel']
        ]
      },
      {
        title: 'Strategic Content Buckets',
        type: 'table',
        headers: ['Bucket', 'Category', 'Objective'],
        rows: [
          ['Milestones', 'Acquisition', '30/100 Days highlights'],
          ['Parents', 'Acquisition', 'Credibility via testimonials'],
          ['Tech / AI', 'Acquisition', 'Position as AI-focused'],
          ['Student Story', 'Acquisition', 'Show quality of cohorts'],
          ['Campus Events', 'Branding', 'Direct vibe / Highlight life'],
          ['Student Clubs', 'Branding', 'In-depth community proof']
        ]
      },
      {
        title: 'Growth Performance (Monthly)',
        type: 'table',
        headers: ['Metric', 'March 25', 'July 25', 'Jan 26'],
        rows: [
          ['Total Views', '4,369', '2.3M', '7.7M'],
          ['Organic Views', '4,369', '63.5K', '138K'],
          ['Followers', '78', '3,543', '6,400+']
        ]
      },
      {
        title: 'Competitor Benchmark (Dec 25)',
        type: 'metrics',
        items: [
          { label: 'Vedam Engagement', val: 'Strong' },
          { label: 'Scaler Followers', val: '21.8K' },
          { label: 'Content quality win', val: 'Achieved' }
        ]
      }
    ]
  },
  sysReview: {
    title: 'Brand & Social Review (MOM System)',
    badge: 'System 02',
    purpose: 'Comprehensive retrospective system (Mar–Aug 2025). Combines Meeting of Minutes (MOM) for branding tasks with consolidated platform analytics.',
    sections: [
      {
        title: 'Key Branding Initiatives Tracked',
        type: 'list',
        items: [
          'VSAT Sample Paper & Prep Kit documentation',
          'Standardized Email Signatures & LinkedIn Cover architecture',
          'Branded Merchandise: T-shirts, Mugs, ID Cards development',
          'Office Experience: 8 wall creatives and 5 dangler frameworks',
          'Counseling Room: Structured aesthetics for conversion'
        ]
      },
      {
        title: 'Operational Yield Spikes',
        type: 'list',
        items: [
          'June-July View Spike: Driven by paid promotion integration',
          'UGC vs Promo: Confirmed student-authentic content drives 2x better engagement than polished posts',
          'Analytics Consolidation: Unified view of Insta, YT, and LinkedIn trends'
        ]
      }
    ]
  },
  sysDistro: {
    title: 'Multi-Channel Distribution Network',
    badge: 'System 03',
    purpose: 'Operationalizes the core principle: "Create once, distribute everywhere". Prevents content siloing and maximizes reach across 12-15 touchpoints.',
    sections: [
      {
        title: '15-Touchpoint Distribution Plan',
        type: 'list',
        items: [
          'Organic: IG Story, DM push, Broadcast channel, Telegram',
          'Cross-Platform: Snippets to Reels, LinkedIn Post + Link-in-Bio',
          'Inorganic: Telegram Student Groups, Meta Boosts, LinkedIn Boosts',
          'SEO Layer: YouTube Shorts interlinking, Reddit/Quora embeddings'
        ]
      },
      {
        title: 'Why It Matters (Impact)',
        type: 'metrics',
        items: [
          { label: 'Landmark Views', val: '4.75M' },
          { label: 'Distribution Hubs', val: '15+' },
          { label: 'Platform Efficiency', val: 'Max' }
        ]
      }
    ]
  },
  sysMaster: {
    title: 'The Command Hub (Master Sheet)',
    badge: 'System 04',
    purpose: 'The central command hub for Vedam\'s branding operation. A directory pointing to every spreadsheet, drive folder, tracker, and asset library.',
    sections: [
      {
        title: 'Hub Infrastructure',
        type: 'list',
        items: [
          'Asset Library: Google Drive & Mega.nz folders for ADYPU Drone Shots, Instructor photos, and Campus B-roll',
          'Execution Calendars: Real-time links to YouTube, Insta, and LinkedIn plans',
          'Tracking Layer: Website traffic from brands, UTM trackers, and GMB metrics',
          'Team SOPs: Standard Operating Procedures for social team governance'
        ]
      },
      {
        title: 'Content Storage Categories',
        type: 'table',
        headers: ['Asset Type', 'Storage Hub', 'Status'],
        rows: [
          ['Drone Shots', 'Mega.nz', 'Active'],
          ['Instructor Photos', 'Google Drive', 'Structured'],
          ['Event Montages', 'Google Drive', 'WIP'],
          ['Brand Logo Files', 'Google Drive', 'Standardized']
        ]
      }
    ]
  },
  sysLinkedin: {
    title: 'LinkedIn B2B Authority Plan',
    badge: 'System 05',
    purpose: 'Targets parents, professional students, and industry observers. Shifted from mass-viral to brand-building and thought leadership.',
    sections: [
      {
        title: 'Content Pillar Hierarchy',
        type: 'table',
        headers: ['Pillar', 'Objective', 'Frequency'],
        rows: [
          ['Founder Leadership', 'Authority positioning', '2x / Week'],
          ['Student Startup Story', 'Outcome proof', '3x / Week'],
          ['Tech News Blog', 'Curriculum trust', '2x / Week'],
          ['Guest Mentors', 'Network credibility', 'Variable']
        ]
      },
      {
        title: 'Performance Landmarks',
        type: 'metrics',
        items: [
          { label: 'Engagement Rate', val: '13.1%' },
          { label: 'Monthly Imp.', val: '90K+' },
          { label: 'Follower Growth', val: '5.3x' }
        ]
      },
      {
        title: 'Competitor Status (Dec 25)',
        type: 'table',
        headers: ['Competitor', 'Followers', 'Eng. Rate'],
        rows: [
          ['Scaler SOT', '14,390', '17.2%'],
          ['Vedam SOT', '3,047', '17.1%'],
          ['Mirai SOT', '3,260', '5.3%']
        ]
      }
    ]
  },
  sysORM: {
    title: 'Online Reputation Management (ORM)',
    badge: 'System 06',
    purpose: 'Governs presence on Quora, Reddit, and GMB. Goal: dominate the first page of Google search for all review-intent queries.',
    sections: [
      {
        title: 'Quora SEO Dominance',
        type: 'list',
        items: [
          'Tactics: 3 new questions/month + 5 answers/month on review-intent queries',
          'Results: Ranking #1 on Google for "Vedam review" queries via Quora',
          'Engagement: 6,684 total views and 80+ upvotes on core threads'
        ]
      },
      {
        title: 'GMB & Reddit Monitoring',
        type: 'list',
        items: [
          'GMB Pune: 106 reviews at a perfect 5.0 rating',
          'GMB Gurgaon: 53 reviews at 4.9 rating',
          'Reddit: Monitoring Btechtards/JEENEETards with factual rebuttals',
          'Sentiment: Weekly mapping across 4 platforms'
        ]
      }
    ]
  },
  sysYoutube: {
    title: 'YouTube Growth Matrix',
    badge: 'System 07',
    purpose: 'Comprehensive T-o-F awareness (Shorts) and Mid-Funnel conversion (Long-form). Achieved #1 channel reach benchmark in Dec 2025.',
    sections: [
      {
        title: 'Dec 25 Milestone: The Landmark Month',
        type: 'metrics',
        items: [
          { label: 'Total Month Views', val: '4.75M' },
          { label: 'Subscribers Gained', val: '4,399' },
          { label: 'Channel Growth', val: '4.5x' }
        ]
      },
      {
        title: 'YouTube UGC & Expansion (2026)',
        type: 'list',
        items: [
          'UGC Pipeline: Student vlogs (Abhiraj, Sidhant) for authentic proof',
          'MAANG Series: Guest lectures from CTOs/Founders (Jasbir Cars24, etc.)',
          'Curriculum Deep-dives: Subhesh explains coding/ICPC pathways',
          'Tech Fest Noesis: Highlights and trailers integration'
        ]
      },
      {
        title: 'Video Content Playlists',
        type: 'table',
        headers: ['Playlist Name', 'Strategic Bucket', 'Focus'],
        rows: [
          ['The Vedam Journey', 'Milestones', 'Emotional Proof'],
          ['Builders at Vedam', 'Student Story', 'Startup Founders'],
          ['Life of a Vedamian', 'Student x Vedam', 'Vibe / Tours'],
          ['Industry Leaders', 'Campus Events', 'External validation']
        ]
      }
    ]
  }
};

function initializeSystemModal() {
  const overlay = document.getElementById('caseModalOverlay');
  const modal = document.getElementById('caseModal');
  const body = document.getElementById('caseModalBody');
  const closeBtn = document.getElementById('caseModalClose');
  const previews = document.querySelectorAll('.system-preview-card');

  if (!overlay || !modal || !body || !closeBtn) return;

  const openSystemModal = (sysId) => {
    const data = strategicSystemsData[sysId];
    if (!data) return;

    body.innerHTML = `
      <header class="modal-header">
        <div class="modal-header-top">
          <span class="sys-badge" style="background: var(--accent-faded); color: var(--accent-strong)">${data.badge}</span>
        </div>
        <h2>${data.title}</h2>
        <p class="modal-summary">${data.purpose}</p>
      </header>
      <div id="systemContent"></div>
    `;

    const container = body.querySelector('#systemContent');

    data.sections.forEach(sec => {
      const sectionEl = document.createElement('section');
      sectionEl.className = 'modal-section';

      const title = document.createElement('h3');
      title.className = 'modal-section-title';
      title.innerHTML = `<svg class="icon"><use href="#icon-system"></use></svg> ${sec.title}`;
      sectionEl.appendChild(title);

      if (sec.type === 'table') {
        const table = document.createElement('table');
        table.className = 'modal-data-table';
        table.innerHTML = `
          <thead><tr>${sec.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
          <tbody>${sec.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
        `;
        sectionEl.appendChild(table);
      } else if (sec.type === 'metrics') {
        const grid = document.createElement('div');
        grid.className = 'modal-system-summary-grid';
        sec.items.forEach(m => {
          grid.innerHTML += `
            <div class="modal-sys-metric-card">
              <span class="modal-sys-metric-val">${m.val}</span>
              <span class="modal-sys-metric-lbl">${m.label}</span>
            </div>
          `;
        });
        sectionEl.appendChild(grid);
      } else if (sec.type === 'list') {
        const listDiv = document.createElement('div');
        listDiv.className = 'modal-technical-list';
        listDiv.innerHTML = `<ul>${sec.items.map(li => `<li>${li}</li>`).join('')}</ul>`;
        sectionEl.appendChild(listDiv);
      }

      container.appendChild(sectionEl);
    });

    overlay.classList.add('is-active');
    document.body.classList.add('modal-open');
    overlay.setAttribute('aria-hidden', 'false');
    closeBtn.focus();
  };

  previews.forEach(card => {
    card.addEventListener('click', () => openSystemModal(card.id.replace('Preview', '')));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openSystemModal(card.id.replace('Preview', ''));
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderExpertise();
  renderTimeline();
  renderWritingSamples();
  renderWorkItems();
  renderChannelPresence();

  initializeStickyNav();
  initializeMobileMenu();
  initializeSmoothScroll();
  initializeActiveNavLink();
  initializeReveal();
  initializeCaseModal();
  initializeSystemModal();
  initializeWritingModal();
  initializeProductionFilters();
  initializeProductionModal();
});
