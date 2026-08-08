export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  tech: string;
  image: string;
  color: string;
  description: string;
}

export const projects: Project[] = [
  {
    slug: 'orderlo',
    title: 'OrderLO',
    category: 'SaaS PLATFORM',
    year: '2024',
    tech: 'NEXT.JS / SUPABASE / STRIPE',
    image: '/projects/orderlo.png',
    color: '#FF7F50',
    description: 'The Revenue Engine for High-Volume Venues. A complete system setup in 10 minutes to skip the line and maximize profit without new hardware.',
  },
  {
    slug: 'ghar-ka-chulha',
    title: 'Ghar Ka Chulha',
    category: 'E-COMMERCE',
    year: '2024',
    tech: 'REACT / SHOPIFY / TAILWIND',
    image: '/projects/ghar-ka-chulha.png',
    color: '#E6C280',
    description: 'Authentic flavors delivered to your doorstep. An elegant e-commerce experience designed to evoke the nostalgia of slow-cooked delicacies.',
  },
  {
    slug: 'feather',
    title: 'Feather',
    category: 'DEV TOOL',
    year: '2023',
    tech: 'TYPESCRIPT / OPENAI / GITHUB API',
    image: '/projects/feather.png',
    color: '#3498DB',
    description: "Don't Write. Just Ship. A platform that transforms your git commits into a cult-following personal brand with 100% signal and no fluff.",
  },
  {
    slug: 'macvaar-ai',
    title: 'Macvaar AI',
    category: 'HEALTHCARE AI',
    year: '2024',
    tech: 'NEXT.JS / PYTHON / HIPAA COMPLIANT',
    image: '/projects/macvaar-ai.png',
    color: '#E67E22',
    description: "AI-Powered Clinical Intelligence for Modern Healthcare. A platform that acts as a doctor's assistant, connecting devices, hospitals, and clinicians.",
  },
];
