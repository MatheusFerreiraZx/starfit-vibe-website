
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;  // Now includes 'running' and 'plus-size' as possible values
  sizes: string[];
  colors: string[];
  inStock: boolean;
  featured?: boolean;
}
