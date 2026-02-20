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
 * @typedef {'awaiting-url' | 'published'} WritingSampleStatus
 */

/**
 * @typedef {Object} WritingSample
 * @property {string} id
 * @property {string} publication
 * @property {string} title
 * @property {string} publishedDate
 * @property {string} keywordFocus
 * @property {string | null} url
 * @property {WritingSampleStatus} status
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
 * @property {WritingSample[]} writingSamples
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
    },
    {
      id: 'yt-short-2',
      platform: 'YouTube',
      title: 'Campus Interaction Narrative',
      category: 'Audience engagement format',
      metric: 'CTR range 4-6.7%',
      url: 'https://youtube.com/shorts/bU5Nj8xtWWU?si=-X8ZBD4s7wbc4-mH',
    },
    {
      id: 'yt-short-3',
      platform: 'YouTube',
      title: 'Brand Voice Presentation',
      category: 'Campaign aligned communication',
      metric: 'Structured storytelling',
      url: 'https://youtube.com/shorts/gDC1NScfF64?si=MLb2K7X3Vziw_0Mp',
    },
    {
      id: 'yt-short-4',
      platform: 'YouTube',
      title: 'Institutional Message Delivery',
      category: 'On-camera informational format',
      metric: 'UGC pipeline support',
      url: 'https://youtube.com/shorts/DtcWUyBzphw?si=nU3ypi-upoIVdQhl',
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
    },
    {
      id: 'ig-reel-2',
      platform: 'Instagram',
      title: 'Reel Campaign Storyline 02',
      category: 'Audience-first scripting',
      metric: '3%+ engagement maintenance',
      url: 'https://www.instagram.com/reel/DUGIL2pk7Yn/?igsh=Zmo3ZW9yem8yZHM=',
    },
    {
      id: 'ig-reel-3',
      platform: 'Instagram',
      title: 'Reel Campaign Storyline 03',
      category: 'Brand communication format',
      metric: 'Monthly views acceleration',
      url: 'https://www.instagram.com/reel/DON0tghgRUc/?igsh=M2ZyNWcwNnl4c3Q1',
    },
    {
      id: 'ig-reel-4',
      platform: 'Instagram',
      title: 'Reel Campaign Storyline 04',
      category: 'On-camera short video execution',
      metric: 'Institutional trust content',
      url: 'https://www.instagram.com/reel/DOJKASDk0TM/?igsh=MTQ5b2Y2M2lrY2FhMQ==',
    },
    {
      id: 'ig-reel-5',
      platform: 'Instagram',
      title: 'Reel Campaign Storyline 05',
      category: 'Platform-native engagement content',
      metric: 'Community conversation format',
      url: 'https://www.instagram.com/reel/DOGcwm-gdgU/?igsh=YTJrbjFoaHBvazk0',
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
      capability: 'Content Strategy and Planning',
      delivered: 'Built multi-platform calendar architecture, distribution mapping, and bucket strategy from scratch.',
      proof: '230 to 6,100 follower growth framework at Vedam',
    },
    {
      id: 'expertise-2',
      icon: 'delivered',
      capability: 'Performance Copywriting',
      delivered: 'Managed push, lifecycle, and campaign messaging for conversion and retention goals.',
      proof: '0.7% to 7% CTR trajectory and 2x campaign revenue uplift',
    },
    {
      id: 'expertise-3',
      icon: 'timeline',
      capability: 'On-Camera Communication',
      delivered: 'Fronted institutional interviews, vox pop formats, and launch communication videos.',
      proof: 'Brand-facing narrative ownership across multiple public video formats',
    },
    {
      id: 'expertise-4',
      icon: 'proof',
      capability: 'ORM and Reputation Governance',
      delivered: 'Handled Quora, Reddit, GMB, and SERP-focused response systems with sentiment tracking.',
      proof: 'Ranked review-intent query at #1 with supporting engagement evidence',
    },
    {
      id: 'expertise-5',
      icon: 'system',
      capability: 'Analytics and Reporting',
      delivered: 'Created WOW and MOM dashboards connecting content actions to reach, leads, and payments.',
      proof: '281 leads tracked with source splits and payment-funnel visibility',
    },
    {
      id: 'expertise-6',
      icon: 'workmode',
      capability: 'Cross-Functional Execution',
      delivered: 'Coordinated with founders, mentors, creative teams, and paid media for unified launches.',
      proof: 'Sustained multi-platform execution with consistent governance standards',
    },
  ],
  timeline: [
    {
      id: 'timeline-1',
      role: 'Social Media Senior Associate',
      company: 'Vedam School of Technology',
      period: 'Apr 2025 - Present',
      track: 'Leadership track',
      impact: 'Built end-to-end social and ORM systems from zero baseline',
      badge: 'Core role',
    },
    {
      id: 'timeline-2',
      role: 'Marketing Copywriter',
      company: 'Adda247 and CareerPower',
      period: 'Apr 2022 - Mar 2025',
      track: 'Performance communication track',
      impact: 'Scaled CTR and campaign revenue outcomes across major exam verticals',
      badge: 'Corporate',
    },
    {
      id: 'timeline-3',
      role: 'Freelance Content Writer',
      company: 'Teachmint',
      period: 'Jun 2021 - Dec 2022',
      track: 'Parallel freelance track',
      impact: 'Delivered SEO-led educational writing with intent-focused structure',
      badge: 'Freelance',
    },
    {
      id: 'timeline-4',
      role: 'Senior Content Writer',
      company: 'Rail Recipe',
      period: 'Aug 2021 - Jan 2022',
      track: 'Foundation track',
      impact: 'Supported lead growth and traffic improvements through content campaigns',
      badge: 'Early stage',
    },
    {
      id: 'timeline-5',
      role: 'Content Writer',
      company: 'Numen Edu and Techmiles',
      period: '2021 - 2022',
      track: 'Early client portfolio track',
      impact: 'Built domain writing depth across education and technology categories',
      badge: 'Assignments',
    },
  ],
  writingSamples: [
    {
      id: 'writing-1',
      publication: 'Teachmint',
      title: 'SEO Educational Article Sample',
      publishedDate: 'Publication date shared on request',
      keywordFocus: 'Exam preparation strategy',
      url: null,
      status: 'awaiting-url',
    },
    {
      id: 'writing-2',
      publication: 'Rail Recipe',
      title: 'Industry Content Campaign Sample',
      publishedDate: 'Publication date shared on request',
      keywordFocus: 'Travel category intent term',
      url: null,
      status: 'awaiting-url',
    },
    {
      id: 'writing-3',
      publication: 'Numen Edu / Techmiles',
      title: 'Technology Education Blog Sample',
      publishedDate: 'Publication date shared on request',
      keywordFocus: 'Skill development keyword cluster',
      url: null,
      status: 'awaiting-url',
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

  let index = 0;

  const tryNext = () => {
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
  card.className = 'work-card';
  card.setAttribute('role', 'listitem');

  const mediaLink = document.createElement('a');
  mediaLink.className = 'work-media-link';
  mediaLink.href = item.url;
  mediaLink.target = '_blank';
  mediaLink.rel = 'noopener noreferrer';
  mediaLink.setAttribute('aria-label', `Open ${item.platform} video: ${item.title}`);

  const media = document.createElement('div');
  media.className = 'work-media is-fallback';

  const thumbnail = document.createElement('img');
  thumbnail.className = 'work-thumb';
  thumbnail.loading = 'lazy';
  thumbnail.decoding = 'async';
  thumbnail.referrerPolicy = 'no-referrer';
  thumbnail.alt = `${item.platform} thumbnail for ${item.title}`;

  const fallback = document.createElement('div');
  fallback.className = 'work-thumb-fallback';

  const fallbackIcon = document.createElement('span');
  fallbackIcon.className = 'fallback-icon';
  fallbackIcon.appendChild(createIcon(item.platform === 'YouTube' ? 'youtube' : 'instagram'));

  const fallbackTitle = document.createElement('span');
  fallbackTitle.className = 'fallback-title';
  fallbackTitle.textContent = `${item.platform} preview`;

  const fallbackCopy = document.createElement('span');
  fallbackCopy.className = 'fallback-copy';
  fallbackCopy.textContent = 'Preview unavailable. Open original post.';

  fallback.append(fallbackIcon, fallbackTitle, fallbackCopy);

  const playTag = document.createElement('span');
  playTag.className = 'work-play-tag';
  playTag.textContent = 'Watch';

  media.append(thumbnail, fallback, playTag);
  mediaLink.appendChild(media);

  const platform = document.createElement('p');
  platform.className = 'work-platform';
  platform.textContent = item.platform;

  const title = document.createElement('h4');
  title.className = 'work-title';
  title.textContent = item.title;

  const category = document.createElement('p');
  category.className = 'work-category';
  category.textContent = item.category;

  const metric = document.createElement('span');
  metric.className = 'work-metric';
  metric.textContent = item.metric;

  const content = document.createElement('div');
  content.className = 'work-content';
  content.append(platform, title, category, metric);

  const link = document.createElement('a');
  link.className = 'work-link';
  link.href = item.url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = 'Open original post';

  card.append(mediaLink, content, link);

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

  const iconWrap = document.createElement('span');
  iconWrap.className = 'presence-icon-wrap';
  const badgeStyle = (item.badgeStyle || item.platform || 'youtube').toLowerCase();
  iconWrap.classList.add(`brand-${badgeStyle}`);
  iconWrap.appendChild(createIcon(item.icon, 'icon'));

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
  platform.append(iconWrap, title);
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

  const deliveredLabel = document.createElement('p');
  deliveredLabel.className = 'expertise-row-label label-with-icon';
  deliveredLabel.append(createIcon('delivered', 'icon'), document.createTextNode('What Delivered'));

  const deliveredCopy = document.createElement('p');
  deliveredCopy.className = 'expertise-row-copy';
  deliveredCopy.textContent = item.delivered;

  const proofLabel = document.createElement('p');
  proofLabel.className = 'expertise-row-label label-with-icon';
  proofLabel.append(createIcon('proof', 'icon'), document.createTextNode('Outcome Highlights'));

  const proofValue = document.createElement('span');
  proofValue.className = 'expertise-proof';
  proofValue.textContent = item.proof;

  card.append(header, deliveredLabel, deliveredCopy, proofLabel, proofValue);
  return card;
}

function createTimelineItem(item, index) {
  const wrapper = document.createElement('article');
  wrapper.className = 'timeline-item reveal';
  wrapper.style.transitionDelay = `${Math.min(index * 0.07, 0.35)}s`;

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

function createWritingSampleRow(item) {
  const row = document.createElement('article');
  row.className = 'writing-sample-row';
  row.dataset.status = item.status;

  const head = document.createElement('div');
  head.className = 'writing-sample-head';

  const publication = document.createElement('p');
  publication.className = 'writing-sample-publication';
  publication.textContent = item.publication;

  const dateChip = document.createElement('span');
  dateChip.className = 'writing-chip';
  dateChip.textContent = item.publishedDate;

  head.append(publication, dateChip);

  const title = document.createElement('p');
  title.className = 'writing-sample-title';
  title.textContent = item.title;

  const meta = document.createElement('div');
  meta.className = 'writing-sample-meta';

  const keywordChip = document.createElement('span');
  keywordChip.className = 'writing-chip writing-chip-keyword';
  keywordChip.textContent = `Keyword: ${item.keywordFocus}`;
  meta.appendChild(keywordChip);

  let action;
  if (item.url && item.status === 'published') {
    action = document.createElement('a');
    action.className = 'writing-link';
    action.href = item.url;
    action.target = '_blank';
    action.rel = 'noopener noreferrer';
    action.textContent = 'Open published article';
  } else {
    action = document.createElement('span');
    action.className = 'writing-link writing-link-pending';
    action.setAttribute('role', 'status');
    action.textContent = 'Publication URL available on request';
  }

  row.append(head, title, meta, action);
  return row;
}

function renderWorkItems() {
  const youtubeContainer = document.getElementById('youtubeCarousel');
  const instagramContainer = document.getElementById('instagramCarousel');

  if (youtubeContainer) {
    youtubeContainer.innerHTML = '';
    portfolioWorkData.youtubeShorts.forEach((item) => {
      youtubeContainer.appendChild(createWorkCard(item));
    });
  }

  if (instagramContainer) {
    instagramContainer.innerHTML = '';
    portfolioWorkData.instagramReels.forEach((item) => {
      instagramContainer.appendChild(createWorkCard(item));
    });
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

function renderCaseStudyData() {
  const vedamMetrics = document.getElementById('vedamMetricsGrid');
  const leadSplit = document.getElementById('vedamLeadSplitGrid');
  const vedamSystems = document.getElementById('vedamSystemsGrid');
  const addaImpact = document.getElementById('addaImpactGrid');

  if (vedamMetrics) {
    vedamMetrics.innerHTML = '';
    portfolioWorkData.vedamMetrics.forEach((item) => {
      vedamMetrics.appendChild(createMetricItem(item, 'ribbon-value', 'ribbon-label', 'ribbon-item'));
    });
  }

  if (leadSplit) {
    leadSplit.innerHTML = '';
    portfolioWorkData.vedamLeadSplit.forEach((item) => {
      leadSplit.appendChild(createMetricItem(item, 'lead-value', 'lead-label', 'lead-split-item'));
    });
  }

  if (vedamSystems) {
    vedamSystems.innerHTML = '';
    portfolioWorkData.vedamSystems.forEach((item) => {
      vedamSystems.appendChild(createSystemCard(item));
    });
  }

  if (addaImpact) {
    addaImpact.innerHTML = '';
    portfolioWorkData.addaImpact.forEach((item) => {
      addaImpact.appendChild(createMetricItem(item, 'impact-value', 'impact-label', 'impact-item'));
    });
  }
}

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
  const list = document.getElementById('writingSamplesList');
  if (!list) return;

  list.innerHTML = '';
  portfolioWorkData.writingSamples.forEach((item) => {
    list.appendChild(createWritingSampleRow(item));
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
      pause() {},
      resume() {},
      resumeWithDelay() {},
      step() {},
      refresh() {},
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
    rafId = window.requestAnimationFrame(frame);
  };

  const stop = () => {
    if (!running) return;
    running = false;
    viewport.classList.add('is-paused');
    if (rafId !== null) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
  };

  const resumeWithDelay = (delay = 600) => {
    if (delayedResumeId !== null) {
      window.clearTimeout(delayedResumeId);
    }
    delayedResumeId = window.setTimeout(() => {
      delayedResumeId = null;
      start();
    }, delay);
  };

  const refresh = () => {
    const firstClone = viewport.querySelector('.work-card.is-clone');
    loopWidth = firstClone ? firstClone.offsetLeft : Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    if (!canRun()) {
      stop();
    }
  };

  viewport.addEventListener('mouseenter', stop);
  viewport.addEventListener('mouseleave', () => resumeWithDelay(220));
  viewport.addEventListener('focusin', stop);
  viewport.addEventListener('focusout', () => resumeWithDelay(320));
  viewport.addEventListener('touchstart', stop, { passive: true });
  viewport.addEventListener('touchend', () => resumeWithDelay(420), { passive: true });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stop();
    } else {
      resumeWithDelay(80);
    }
  });

  window.addEventListener('resize', () => {
    refresh();
    resumeWithDelay(120);
  });

  refresh();
  window.requestAnimationFrame(() => {
    refresh();
    start();
  });

  return {
    pause: stop,
    resume: start,
    resumeWithDelay,
    step(direction) {
      const step = getCarouselStep(viewport);
      let nextLeft = direction === 'next' ? viewport.scrollLeft + step : viewport.scrollLeft - step;

      if (canRun()) {
        if (nextLeft >= loopWidth) {
          nextLeft -= loopWidth;
        }
        if (nextLeft < 0) {
          nextLeft += loopWidth;
        }
      } else {
        const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
        nextLeft = Math.max(0, Math.min(nextLeft, maxScroll));
      }

      viewport.scrollTo({ left: nextLeft, behavior: 'smooth' });
    },
    refresh,
  };
}

function initializeCarouselSystem() {
  const buttons = document.querySelectorAll('.carousel-btn');
  const viewports = document.querySelectorAll('.carousel-viewport');

  viewports.forEach((viewport) => {
    if (!viewport.id) return;
    const controller = createMarqueeController(viewport);
    marqueeControllers.set(viewport.id, controller);
  });

  const visibilityObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const target = entry.target;
        const controller = marqueeControllers.get(target.id);
        if (!controller) return;

        if (entry.isIntersecting) {
          controller.refresh();
          controller.resumeWithDelay(0);
        } else {
          controller.pause();
        }
      });
    },
    {
      threshold: 0.08,
    }
  );

  viewports.forEach((viewport) => visibilityObserver.observe(viewport));

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-carousel-target');
      const action = button.getAttribute('data-action');
      if (!targetId || !action) return;

      const controller = marqueeControllers.get(targetId);
      if (!controller) return;

      controller.pause();
      controller.step(action);
      controller.resumeWithDelay(420);

      const target = document.getElementById(targetId);
      if (target) {
        target.focus({ preventScroll: true });
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;

    const focused = document.activeElement;
    if (!(focused instanceof HTMLElement)) return;

    const viewport = focused.classList.contains('carousel-viewport')
      ? focused
      : focused.closest('.carousel-block')?.querySelector('.carousel-viewport');

    if (!viewport || !viewport.id) return;

    const controller = marqueeControllers.get(viewport.id);
    if (!controller) return;

    event.preventDefault();
    controller.pause();
    controller.step(event.key === 'ArrowRight' ? 'next' : 'prev');
    controller.resumeWithDelay(420);
  });
}

function initializeReveal() {
  const revealItems = document.querySelectorAll('.reveal');
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

document.addEventListener('DOMContentLoaded', () => {
  renderExpertise();
  renderTimeline();
  renderWritingSamples();
  renderWorkItems();
  renderChannelPresence();
  renderCaseStudyData();

  initializeStickyNav();
  initializeMobileMenu();
  initializeSmoothScroll();
  initializeActiveNavLink();
  initializeCarouselSystem();
  initializeReveal();
});
