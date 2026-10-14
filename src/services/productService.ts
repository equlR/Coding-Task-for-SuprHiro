import { apiClient } from '@/services/api/apiClient';
import {
  FetchProductsParams,
  Product,
  ProductCategory,
  ProductsResponse,
} from '@/types/product';

const BASE_URL = 'https://dummyjson.com';

export const productService = {
  /**
   * Fetches products with optional category, search, and pagination
   */
  async getProducts(params?: FetchProductsParams): Promise<ProductsResponse> {
    const { search, category, limit = 30, skip = 0 } = params ?? {};

    let url: string;
    if (search && search.trim().length > 0) {
      url = `${BASE_URL}/products/search?q=${encodeURIComponent(search.trim())}&limit=${limit}&skip=${skip}`;
    } else if (category && category !== 'all') {
      url = `${BASE_URL}/products/category/${encodeURIComponent(category)}?limit=${limit}&skip=${skip}`;
    } else {
      url = `${BASE_URL}/products?limit=${limit}&skip=${skip}`;
    }

    return apiClient.get<ProductsResponse>(url);
  },

  /**
   * Fetches a single product by ID
   */
  async getProductById(id: number | string): Promise<Product> {
    const url = `${BASE_URL}/products/${id}`;
    return apiClient.get<Product>(url);
  },

  /**
   * Fetches all product categories
   */
  async getCategories(): Promise<ProductCategory[]> {
    const url = `${BASE_URL}/products/categories`;
    return apiClient.get<ProductCategory[]>(url);
  },
};
