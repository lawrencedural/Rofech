export interface Project {
  id: string;
  name: string;
  category: 'Residential' | 'Commercial' | 'Pavilion';
  location: string;
  year: number;
  area: string;
  type: string;
  description: string;
  features: string[];
  materials: string[];
  images: string[];
  thumbnail: string;
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  process: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

