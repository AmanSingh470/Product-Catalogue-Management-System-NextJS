export interface ProductMediaGrouped {
  image: string[];
  video: string[];
  file: string[];
}

export interface ProductDetail {
  id: number;
  title: string;
  description: string;
  category: string;
  segment: string;
  segment_id: number;
  division: string;
  company: string;
  company_contact_person: string;
  main_advantages: string | null;
  key_facts: string | null;
  applications: string | null;
  status: string;
  created_at: string;
  media: ProductMediaGrouped[];
}