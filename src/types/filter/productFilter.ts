export interface FilterItem {
  id: number;
  name: string;
  total_products: number;
}

interface Division extends FilterItem {
  description?: string;
  image?: string;
}

export interface Filters {
  all: Division[];
  categories: FilterItem[];
  segments: FilterItem[];
  divisions: FilterItem[];
  companies: FilterItem[];
  contactPersons: FilterItem[];
}