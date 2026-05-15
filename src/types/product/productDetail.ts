export interface ProductDetail {
  id: number;
  title: string;
  description: string;

  category: string;

  segment: string;
  segment_id: number;

  division: string;

  company: string;

  company_contact_person: {
    name: string;
    email: string;
    function: string;
  };

  main_advantages: Record<string, string>;

  key_facts: string[];

  intellectual_properties: string[];

  applications: string[];

  status: string;

  media: {
    image: string[];
    video: string[];
    file: string[];
  };

  updated_at: string;
}