export interface Project {
  id: string;
  title: string;
  category: 'inclusion' | 'innovacion' | 'comunidad' | 'emocional';
  categoryLabel: string;
  description: string;
  impact: string;
  year: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  institution: string;
  text: string;
  avatar: string;
}
