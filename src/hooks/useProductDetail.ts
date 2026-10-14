import { useCallback, useEffect, useState } from 'react';

import { productService } from '@/services/productService';
import { ApiError } from '@/types/api';
import { Product } from '@/types/product';

export function useProductDetail(productId: string | number | undefined) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const fetchDetail = useCallback(
    async (mode: 'initial' | 'refresh' = 'initial') => {
      if (!productId) return;

      if (mode === 'refresh') {
        setIsRefreshing(true);
      } else {
        setIsLoading(true);
      }
      setError(null);

      try {
        const data = await productService.getProductById(productId);
        setProduct(data);
        setSelectedImageIndex(0);
      } catch (err: unknown) {
        setError(err as ApiError);
      } finally {
        setIsLoading(false);
        setIsRefreshing(false);
      }
    },
    [productId]
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchDetail('initial');
  }, [fetchDetail]);

  const handleRefresh = useCallback(async () => {
    await fetchDetail('refresh');
  }, [fetchDetail]);

  const handleRetry = useCallback(async () => {
    await fetchDetail('initial');
  }, [fetchDetail]);

  const handleToggleFavorite = useCallback(() => {
    setIsFavorite((prev) => !prev);
  }, []);

  return {
    product,
    isLoading,
    isRefreshing,
    error,
    selectedImageIndex,
    setSelectedImageIndex,
    isFavorite,
    onToggleFavorite: handleToggleFavorite,
    onRefresh: handleRefresh,
    onRetry: handleRetry,
  };
}

export type UseProductDetailReturn = ReturnType<typeof useProductDetail>;
