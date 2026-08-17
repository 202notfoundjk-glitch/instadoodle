import { BonusItem, ComparisonRow, DemoPrompt, FaqItem, HandStyle, TemplateItem, Testimonial } from './types';

// The verified ClickBank affiliate hoplink requested by the user
export const HOPLINK = 'https://0ceba8ndqbbq4w7fvg64qlp2uu.hop.clickbank.net';

export const DEMO_PROMPTS: DemoPrompt[] = [
  {
    id: 'affiliate-review',
    category: 'Affiliate Marketing',
    title: 'Product Review & Conversion Hook',
    prompt: 'Draw a stressed person looking at empty bank account, then discovering a simplified 3-step solution with rising sales chart.',
    duration: '45 sec',
    doodleType: 'growth',
    scenes: [
      { text: 'Stop fighting saturated methods with 0 views...', action: 'Drawing frustrated creator at laptop', strokeCount: 14 },
      { text: 'Sequential hand-drawing triggers 3.8x longer watch retention', action: 'Drawing pen sketching dynamic graph curve', strokeCount: 22 },
      { text: 'One-time investment replaces $39/month perpetual fees', action: 'Drawing unlocked treasure & checkmark seal', strokeCount: 18 }
    ]
  },
  {
    id: 'course-creator',
    category: 'Course / Education',
    title: 'Complex Lesson Simplified',
    prompt: 'Explain the 3 core pillars of building healthy morning habits with visual brain synapses and water glass.',
    duration: '60 sec',
    doodleType: 'course',
    scenes: [
      { text: 'Why 92% of students forget slide bullet points...', action: 'Drawing messy chalkboard with erase mark', strokeCount: 16 },
      { text: 'Visual doodles anchor memory through dual-coding theory', action: 'Drawing lightbulb blooming into brain branches', strokeCount: 24 },
      { text: '100% cloud-based. Export lessons in crisp 1080p.', action: 'Drawing graduation cap & verified certificate', strokeCount: 15 }
    ]
  },
  {
    id: 'saas-pitch',
    category: 'Business & SaaS',
    title: 'Software Explainer Demo',
    prompt: 'Show manual spreadsheet chaos turning into an automated 1-click dashboard robot.',
    duration: '30 sec',
    doodleType: 'tech',
    scenes: [
      { text: 'Spending 12 hours a week manually updating sheets?', action: 'Drawing towering messy paperwork stacks', strokeCount: 19 },
      { text: 'Automate repetitive workflows in under 3 minutes', action: 'Drawing friendly robot connecting puzzle gears', strokeCount: 26 },
      { text: 'Scale your operations without hiring a massive team', action: 'Drawing rocket launching with upward arrow', strokeCount: 17 }
    ]
  },
  {
    id: 'local-business',
    category: 'Local Agency & Client Work',
    title: 'Dentist / Plumber Promo Video',
    prompt: 'A homeowner with a leaking sink finds a reliable 24/7 licensed emergency contractor with 5 stars.',
    duration: '50 sec',
    doodleType: 'funnel',
    scenes: [
      { text: 'Plumbing emergency in the middle of the night?', action: 'Drawing dripping pipe and water puddles', strokeCount: 15 },
      { text: 'Call City Best Care — 15 min response guaranteed', action: 'Drawing service van speeding with 5 golden stars', strokeCount: 21 },
      { text: 'Get $50 off your first inspection today', action: 'Drawing coupon scissors with discount badge', strokeCount: 12 }
    ]
  },
  {
    id: 'crypto-finance',
    category: 'Finance & Crypto',
    title: 'Dollar-Cost Averaging Explained',
    prompt: 'Compare emotional panic buying at peak market highs versus systematic monthly automated investing with a piggy bank.',
    duration: '40 sec',
    doodleType: 'crypto',
    scenes: [
      { text: 'Timing the volatile crypto market causes 84% to lose capital...', action: 'Drawing frantic trader watching red candlestick crash', strokeCount: 18 },
      { text: 'Automated dollar-cost averaging compounds steadily over time', action: 'Drawing coin dropping into shielded vault bank', strokeCount: 20 },
      { text: 'Build financial freedom without staring at charts all day', action: 'Drawing smiling investor holding key on mountain summit', strokeCount: 16 }
    ]
  },
  {
    id: 'health-diet',
    category: 'Health & Fitness',
    title: 'Metabolism Reset Explainer',
    prompt: 'Show how lack of deep sleep spikes cortisol and slows calorie burn, and how a 20-minute walk reverses it.',
    duration: '55 sec',
    doodleType: 'health',
    scenes: [
      { text: 'Tired of restrictive crash diets that stall your progress?', action: 'Drawing scale needle bouncing between extremes', strokeCount: 14 },
      { text: 'Cortisol spikes from poor sleep lock stored body energy', action: 'Drawing padlock around glowing calorie cell', strokeCount: 22 },
      { text: 'Simple evening habit resets circadian rhythm naturally', action: 'Drawing serene moon and energized morning sunrise', strokeCount: 19 }
    ]
  }
];

export const HAND_STYLES: HandStyle[] = [
  {
    id: 'right-marker',
    name: 'Right-Handed Black Marker',
    description: 'The iconic classic whiteboard animation hand. Crisp, confident, high authority.',
    penType: 'Chisel Black Marker',
    handType: 'right-marker'
  },
  {
    id: 'left-stylus',
    name: 'Left-Handed Digital Stylus',
    description: 'Modern tech aesthetic for software demos and educational tablet lessons.',
    penType: 'Apple Stylus Pen',
    handType: 'left-stylus'
  },
  {
    id: 'female-pen',
    name: 'Feminine Fine-Tip Fineliner',
    description: 'Elegantly detailed linework for lifestyle, beauty, and creative brand storytelling.',
    penType: 'Precision 0.5mm Pen',
    handType: 'female-pen'
  },
  {
    id: 'chalk',
    name: 'Chalkboard Classroom Chalk',
    description: 'Authentic school chalkboard textures for high-retention educational courses.',
    penType: 'White Dustless Chalk',
    handType: 'chalk'
  },
  {
    id: 'glow-wand',
    name: 'Glassboard Neon Glow',
    description: 'Futuristic illuminated glass board sketch lines popular in TEDx & modern YouTube essays.',
    penType: 'Neon Fluor Marker',
    handType: 'glow-wand'
  },
  {
    id: 'none',
    name: 'Direct Vector Draw (No Hand)',
    description: 'Pure kinetic vector line morphing without a visible hand overlay.',
    penType: 'Kinetic Vector Path',
    handType: 'none'
  }
];

export const TEMPLATES: TemplateItem[] = [
  {
    id: 'tpl-1',
    niche: 'Affiliate Marketing',
    category: 'affiliate',
    title: 'Top 3 SaaS Tools Comparison Review',
    scenesCount: 5,
    duration: '60s',
    description: 'Compare 3 software options, highlight pros/cons, and transition to your custom affiliate hoplink with strong bonus callout.',
    color: '#FFD43B',
    iconName: 'TrendingUp',
    scriptSnippet: 'Stop overpaying for tools you never use. Here are 3 proven platforms rated on speed, pricing, and support...'
  },
  {
    id: 'tpl-2',
    niche: 'Online Education',
    category: 'courses',
    title: 'The 80/20 Rule (Pareto Principle) Breakdown',
    scenesCount: 6,
    duration: '75s',
    description: 'Break down complex academic or business theories into sequential visual metaphors that stick in memory.',
    color: '#38BDF8',
    iconName: 'BookOpen',
    scriptSnippet: 'Did you know 80% of your business output comes from only 20% of your daily actions? Here is how to audit your week...'
  },
  {
    id: 'tpl-3',
    niche: 'Local Services',
    category: 'local',
    title: 'Emergency 24/7 HVAC & Plumbing Service',
    scenesCount: 4,
    duration: '45s',
    description: 'High-converting local service ad with phone number badge, 5-star Google review seal, and immediate call-to-action.',
    color: '#4ADE80',
    iconName: 'Wrench',
    scriptSnippet: 'AC broken in the middle of summer? Avoid predatory repair quotes. Call City Emergency Care for upfront flat-rate pricing...'
  },
  {
    id: 'tpl-4',
    niche: 'Social Ads & Reels',
    category: 'social',
    title: '3-Second Pattern Interrupt Viral Hook',
    scenesCount: 4,
    duration: '30s',
    description: 'Vertical 9:16 format designed to stop rapid scrolling on TikTok, YouTube Shorts, and Instagram Reels.',
    color: '#FB7185',
    iconName: 'Zap',
    scriptSnippet: 'Do NOT buy another digital course until you understand this 1 secret metric that 95% of gurus hide from you...'
  },
  {
    id: 'tpl-5',
    niche: 'E-Commerce / Gadgets',
    category: 'ecommerce',
    title: 'Problem-Solving Physical Product Showcase',
    scenesCount: 5,
    duration: '50s',
    description: 'Demonstrate everyday customer frustrations turning into instant relief with your dropshipping or branded product.',
    color: '#A78BFA',
    iconName: 'ShoppingBag',
    scriptSnippet: 'Tired of tangled charging cables cluttering your desk? Meet the magnetic modular organizer built for nomads...'
  },
  {
    id: 'tpl-6',
    niche: 'Agency Client Pitch',
    category: 'local',
    title: 'Why Whiteboard Videos 3X Inbound Leads',
    scenesCount: 6,
    duration: '65s',
    description: 'Client-facing presentation you can send to prospective local businesses to sell them explainer video packages for $300-$500.',
    color: '#FACC15',
    iconName: 'Briefcase',
    scriptSnippet: 'Your website visitors spend an average of 4.2 seconds before bouncing. Here is how custom animated explainers keep them watching...'
  }
];


export const BONUSES: BonusItem[] = [
  {
    id: 1,
    title: 'The 20 High-Retention DoodleAI Prompt Vault',
    value: '$47 Value',
    badge: 'Exclusive',
    description: 'Copy-and-paste prompt templates precisely formatted for DoodleAI. Generate flawless explainer scenes for fitness, finance, SaaS, courses, and e-commerce without blank-screen syndrome.',
    features: [
      '20 field-tested prompt formulas with exact bracketed keywords',
      'Scene-by-scene script breakdown blueprints',
      'Niche-specific visual metaphor cheat sheet'
    ],
    icon: 'Brain'
  },
  {
    id: 2,
    title: 'The 10-Minute First Video Quickstart Blueprint',
    value: '$37 Value',
    badge: 'Fast Track',
    description: 'The no-fluff walkthrough that takes you from logging into your account to exporting your first 1080p whiteboard video in under 10 minutes flat.',
    features: [
      'Step-by-step UI orientation without 45-minute webinars',
      'Audio & voiceover syncing shortcut system',
      'High-speed timeline editing shortcuts checklist'
    ],
    icon: 'Zap'
  },
  {
    id: 3,
    title: 'The 3-Second Scroll-Stopper Hook Swipe File',
    value: '$29 Value',
    badge: 'Conversion Booster',
    description: '15 proven pattern-interrupt video opening hooks designed specifically for whiteboard drawing animations on YouTube Shorts, TikTok, and Reels.',
    features: [
      '15 psychological video openings that halt thumb scrolling',
      'Curiosity loop templates to maximize video completion rate',
      'CTR-boosting first-frame illustration prompts'
    ],
    icon: 'Sparkles'
  },
  {
    id: 4,
    title: 'Faceless Whiteboard Channel Monetization Guide',
    value: '$67 Value',
    badge: 'Masterclass',
    description: 'How to build and monetize a profitable faceless whiteboard YouTube channel or freelance service offering $250+ explainer packages to local business owners.',
    features: [
      'Pricing guide for charging clients $150-$500 per 60-second video',
      'How to find local businesses needing whiteboard explainers',
      'Affiliate review channel strategy with zero on-camera appearances'
    ],
    icon: 'TrendingUp'
  }
];

export const COMPARISONS: ComparisonRow[] = [
  {
    feature: 'Pricing Model',
    instadoodle: 'One-Time $37 (No Monthly Bill)',
    doodly: '$39 to $69 / month recurring',
    videoscribe: '$35 / month or $168 / year',
    vyond: '$49 to $179 / month'
  },
  {
    feature: 'AI Text-to-Doodle Generation',
    instadoodle: true,
    doodly: false,
    videoscribe: false,
    vyond: 'Limited'
  },
  {
    feature: 'Cloud-Based (Works in Browser)',
    instadoodle: true,
    doodly: false,
    videoscribe: false,
    vyond: true
  },
  {
    feature: '1080p Full HD Video Export',
    instadoodle: true,
    doodly: true,
    videoscribe: true,
    vyond: true
  },
  {
    feature: 'Zero Install Required',
    instadoodle: true,
    doodly: false,
    videoscribe: false,
    vyond: true
  },
  {
    feature: '150 AI Starter Credits Included (Never Expire)',
    instadoodle: true,
    doodly: false,
    videoscribe: false,
    vyond: false
  },
  {
    feature: 'Built-in Text-to-Speech & Music',
    instadoodle: true,
    doodly: true,
    videoscribe: true,
    vyond: true
  },
  {
    feature: 'ClickBank 60-Day Guarantee',
    instadoodle: true,
    doodly: false,
    videoscribe: false,
    vyond: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Marcus Vance',
    role: 'Digital Course Creator & Educator',
    channelOrBiz: 'MindCraft Academy',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'My course completion rates literally doubled when I replaced plain keynote slides with hand-drawn InstaDoodle animations. Students told me they stopped fast-forwarding because watching the pen draw made concepts impossible to look away from.',
    highlight: 'Course completion went from 34% to 78%',
    metric: '+129% Retention'
  },
  {
    name: 'Elena Rostova',
    role: 'Affiliate Marketer & Content Strategist',
    channelOrBiz: 'RankPulse Reviews',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'I used to pay $350 on Upwork for 90-second whiteboard reviews. With InstaDoodle I type my review script, let DoodleAI generate the custom sketch illustrations, and I have a finished video published in 15 minutes. Best $37 I spent this year.',
    highlight: 'Saved $2,400+ in freelance animator fees in month 1',
    metric: 'Saved $2,400+'
  },
  {
    name: 'David K. Thorne',
    role: 'Local Marketing Consultant',
    channelOrBiz: 'PeakLocal Media',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'Local dentists and roofers love these videos because they simplify complex services. I sold three 60-second explainer videos at $350 each in my first two weeks using the templates from the prompt vault.',
    highlight: 'Turned a $37 tool into $1,050 in client revenue in 14 days',
    metric: '$1,050 Earned'
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'Pricing & Value',
    question: 'Is InstaDoodle genuinely a one-time $37 payment, or are there hidden fees?',
    answer: 'The core software is a genuine one-time purchase of $37. You get full access to the cloud video timeline editor, video rendering in 1080p, built-in music tracks, and 150 AI creation credits that never expire. For light-to-moderate creators making 2 to 6 videos a month, this easily lasts. If you later become a high-volume power agency needing thousands of AI generations every month, optional credit recharge bundles are available — but you are never forced into a monthly subscription just to keep your software running.'
  },
  {
    category: 'Skills & Usability',
    question: 'Do I need any drawing, illustration, or After Effects animation skills?',
    answer: 'None at all. InstaDoodle’s DoodleAI engine was built specifically for non-artists. You simply type a text description of your concept (e.g. "a person juggling five glowing coins" or "a customer smiling at an open parcel"), and the AI creates clean hand-drawn sketch assets. You drag and drop them onto the canvas, pick a hand style or pen, and click Render.'
  },
  {
    category: 'Devices & Compatibility',
    question: 'Does this run on Mac, Windows, Chromebook, or tablets?',
    answer: 'Yes! InstaDoodle is 100% cloud-hosted on high-speed servers. There is nothing to download, no heavy 10GB software installation, and no hardware strain on your computer. Simply open your web browser (Chrome, Safari, Edge, Firefox) on any device and start creating.'
  },
  {
    category: 'Upsells & Checkout',
    question: 'Will I see upsells during the checkout process?',
    answer: 'Yes — to be 100% transparent and honest with you: during checkout, the vendor offers optional add-ons (such as Color Doodles expansion and additional voice packs) and post-purchase Pro upgrades. Every single one of these is 100% optional and skippable. You can decline them all and still receive the full $37 core platform with all features promised on this page.'
  },
  {
    category: 'Guarantee & Refunds',
    question: 'How does the 60-Day Money-Back Guarantee work?',
    answer: 'Your purchase is protected by ClickBank’s official 60-day customer satisfaction guarantee. You can test the software, create real videos for your projects, and evaluate the results. If you are not satisfied for any reason, you can request an instant 100% refund directly via ClickBank customer support within 60 days with no hassle.'
  },
  {
    category: 'Bonus Delivery',
    question: 'How do I claim the 4 exclusive bonuses listed on this page?',
    answer: 'Simply click any of the buttons on this page to purchase InstaDoodle through our verified ClickBank link. After completing checkout, forward your ClickBank digital receipt email to our bonus delivery address (support@ais-bonuses.com or reply directly to your purchase confirmation), and our automated system will send instant download access to the complete 4-part bonus stack within 24 hours.'
  }
];
