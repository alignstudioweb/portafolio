export interface Project {
  id: number;
  title: string;
  category: string;
  categoryLabel: string;
  image: string;
  desc: string;
  fullDesc: string;
  tags: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}
