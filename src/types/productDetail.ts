export interface ProductMedia {
  id: number;
  product_id: number;
  file: string | null;
  image: string | null;
  video: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProductDetail {
  id: number;
  title: string;
  description: string;
  category: string;
  segment: string;
  division: string;
  company: string;
  company_contact_person: string;
  main_advantages: string | null;
  key_facts: string | null;
  applications: string | null;
  status: string;
  created_at: string;
  media: ProductMedia[];
}