export type PageType = 'home' | 'about' | 'projects' | 'contact' | 'profile';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  college: string;
  phone: string;
  email: string;
  linkedin: string;
  avatar: string;
  photo: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
}
