export interface DemoPrompt {
  id: string;
  category: string;
  title: string;
  prompt: string;
  duration: string;
  doodleType: 'growth' | 'funnel' | 'course' | 'health' | 'tech' | 'crypto' | 'custom';
  scenes: {
    text: string;
    action: string;
    strokeCount: number;
    visualPath?: string;
  }[];
}

export interface TemplateItem {
  id: string;
  niche: string;
  category: 'affiliate' | 'courses' | 'local' | 'social' | 'ecommerce';
  title: string;
  scenesCount: number;
  duration: string;
  description: string;
  color: string;
  iconName: string;
  scriptSnippet: string;
}

export interface HandStyle {
  id: string;
  name: string;
  description: string;
  penType: string;
  handType: 'right-marker' | 'left-stylus' | 'female-pen' | 'chalk' | 'glow-wand' | 'none';
}

export interface BonusItem {
  id: number;
  title: string;
  value: string;
  badge: string;
  description: string;
  features: string[];
  icon: string;
}

export interface ComparisonRow {
  feature: string;
  instadoodle: string | boolean;
  doodly: string | boolean;
  videoscribe: string | boolean;
  vyond: string | boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  channelOrBiz: string;
  avatar: string;
  rating: number;
  quote: string;
  highlight: string;
  metric: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

