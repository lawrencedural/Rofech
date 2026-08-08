import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'villa-37',
    name: 'Villa 37',
    category: 'Residential',
    location: 'Metro Manila, Philippines',
    year: 2024,
    area: '450 sqm',
    type: 'Luxury Residential',
    description: 'A stunning modern luxury residence featuring distinctive wooden slat facade that creates dynamic light and shadow patterns throughout the day. The design seamlessly blends tropical elements with contemporary architecture, offering a sophisticated living experience.',
    features: [
      'Wooden slat facade for natural ventilation',
      'Open-plan living spaces',
      'Floor-to-ceiling windows',
      'Rooftop garden terrace',
      'Smart home integration',
      'Sustainable materials throughout'
    ],
    materials: [
      'Natural hardwood slats',
      'Concrete and steel structure',
      'Large format glass panels',
      'Tropical hardwood decking',
      'Natural stone accents'
    ],
    images: [
      '/images/pic-1-rofech.jpg',
      '/images/pic-2-rofech.jpg',
      '/images/pic-3-rofech.jpg'
    ],
    thumbnail: '/images/pic-1-rofech.jpg',
    featured: true
  },
  {
    id: 'residence-b21',
    name: 'Residence B21',
    category: 'Residential',
    location: 'Quezon City, Philippines',
    year: 2023,
    area: '320 sqm',
    type: 'Modern Family Home',
    description: 'A contemporary two-story family residence designed for modern tropical living. Clean lines and thoughtful spatial planning create a harmonious balance between private and communal spaces, while large openings ensure natural light and ventilation.',
    features: [
      'Two-story open concept design',
      'Private family zones',
      'Integrated indoor-outdoor spaces',
      'Energy-efficient systems',
      'Custom millwork throughout',
      'Landscaped garden areas'
    ],
    materials: [
      'White stucco exterior',
      'Wood accent panels',
      'Aluminum and glass windows',
      'Polished concrete floors',
      'Stone feature walls'
    ],
    images: [
      '/images/pic-2-rofech.jpg',
      '/images/pic-1-rofech.jpg',
      '/images/pic-3-rofech.jpg'
    ],
    thumbnail: '/images/pic-2-rofech.jpg',
    featured: true
  },
  {
    id: 'garden-pavilion',
    name: 'Garden Pavilion',
    category: 'Pavilion',
    location: 'Laguna, Philippines',
    year: 2023,
    area: '85 sqm',
    type: 'Contemporary Outdoor Structure',
    description: 'An elegant curved-roof outdoor pavilion that serves as a tranquil retreat. The distinctive sweeping roof line and open design create a seamless connection with the surrounding garden landscape.',
    features: [
      'Dramatic curved roof design',
      'Open-air structure',
      'Integrated landscape design',
      'Natural ventilation',
      'Flexible event space',
      'Ambient lighting system'
    ],
    materials: [
      'Steel frame structure',
      'Curved metal roofing',
      'Natural stone flooring',
      'Wood seating elements',
      'Tropical landscape integration'
    ],
    images: [
      '/images/pic-3-rofech.jpg',
      '/images/pic-1-rofech.jpg',
      '/images/pic-2-rofech.jpg'
    ],
    thumbnail: '/images/pic-3-rofech.jpg',
    featured: true
  }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);

export const getProjectById = (id: string) => projects.find(p => p.id === id);

export const getProjectsByCategory = (category: string) => {
  if (category === 'All') return projects;
  return projects.filter(p => p.category === category);
};

