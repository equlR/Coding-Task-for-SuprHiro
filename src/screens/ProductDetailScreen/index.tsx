import React from 'react';

import { ProductDetailScreenView } from '@/screens/ProductDetailScreen/ProductDetailScreen';
import { useProductDetailScreen } from '@/screens/ProductDetailScreen/useProductDetailScreen';

export function ProductDetailScreen() {
  const {
    product,
    isLoading,
    isRefreshing,
    error,
    selectedImageIndex,
    setSelectedImageIndex,
    isFavorite,
    onToggleFavorite,
    onRefresh,
    onRetry,
    onBack,
  } = useProductDetailScreen();

  return (
    <ProductDetailScreenView
      product={product}
      isLoading={isLoading}
      isRefreshing={isRefreshing}
      error={error}
      selectedImageIndex={selectedImageIndex}
      onSelectImageIndex={setSelectedImageIndex}
      isFavorite={isFavorite}
      onToggleFavorite={onToggleFavorite}
      onRefresh={onRefresh}
      onRetry={onRetry}
      onBack={onBack}
    />
  );
}

export default ProductDetailScreen;
