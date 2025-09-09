export interface Product {
  id: string;
  name: string;
  description: string;
  price?: string;
  image: string;
  category: string;
}

export interface MenuItem {
  id: string;
  label: string;
  hasSubmenu?: boolean;
  submenu?: MenuItem[];
  products?: Product[];
}