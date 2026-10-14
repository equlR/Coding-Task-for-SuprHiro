import { useCallback, useEffect, useRef, useState } from 'react';

import { productService } from '@/services/productService';
import { ApiError } from '@/types/api';
import { Product, ProductCategory } from '@/types/product';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | null>(null);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [, setIsCategoriesLoading] = useState<boolean>(false);

  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Fetch categories on mount
  useEffect(() => {
    let isMounted = true;
    async function loadCategories() {
      setIsCategoriesLoading(true);
      try {
        const data = await productService.getCategories();
        if (isMounted) {
          setCategories(data);
        }
      } catch {
        // Categories failure is non-blocking
      } finally {
        if (isMounted) {
          setIsCategoriesLoading(false);
        }
      }
    }

    loadCategories();
    return () => {
      isMounted = false;
    };
  }, []);

  // Fetch products implementation
  const fetchProductsData = useCallback(
    async (
      query: string,
      category: string,
      mode: 'initial' | 'refresh' | 'search' = 'initial'
    ) => {
      if (mode === 'refresh') {
        setIsRefreshing(true);
      } else {
        setIsLoading(true);
      }
      setError(null);

      try {
        const response = await productService.getProducts({
          search: query,
          category: category !== 'all' ? category : undefined,
          limit: 30,
        });
        setProducts(response.products);
      } catch (err: unknown) {
        setError(err as ApiError);
      } finally {
        setIsLoading(false);
        setIsRefreshing(false);
      }
    },
    []
  );

  // Trigger data fetching with debounce on search query and category changes
  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // If typing search query, debounce 400ms. If changing category, run immediately.
    const delay = searchQuery.length > 0 ? 400 : 0;

    debounceTimerRef.current = setTimeout(() => {
      fetchProductsData(
        searchQuery,
        selectedCategory,
        searchQuery.length > 0 ? 'search' : 'initial'
      );
    }, delay);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [searchQuery, selectedCategory, fetchProductsData]);

  // Pull-to-refresh handler
  const handleRefresh = useCallback(async () => {
    await fetchProductsData(searchQuery, selectedCategory, 'refresh');
  }, [fetchProductsData, searchQuery, selectedCategory]);

  // Manual retry handler (e.g. from ErrorView)
  const handleRetry = useCallback(async () => {
    await fetchProductsData(searchQuery, selectedCategory, 'initial');
  }, [fetchProductsData, searchQuery, selectedCategory]);

  // Category selection handler (resets search query for clean filtering)
  const handleCategorySelect = useCallback((categorySlug: string) => {
    setSelectedCategory((prev) => (prev === categorySlug ? 'all' : categorySlug));
  }, []);

  // Clear all filters
  const handleClearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
  }, []);

  return {
    products,
    isLoading,
    isRefreshing,
    error,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    categories,
    onCategorySelect: handleCategorySelect,
    onRefresh: handleRefresh,
    onRetry: handleRetry,
    onClearFilters: handleClearFilters,
  };
}

export type UseProductsReturn = ReturnType<typeof useProducts>;
