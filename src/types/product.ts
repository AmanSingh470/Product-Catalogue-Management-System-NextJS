export interface Product {
  id: number;
  title: string;

  segment: string;
  division: string;

  company: string;

  thumbnail: string | null;
}