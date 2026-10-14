import React from 'react';

import { ProductListScreenView } from '@/screens/ProductListScreen/ProductListScreen';
import { useProductListScreen } from '@/screens/ProductListScreen/useProductListScreen';

export function ProductListScreen() {
  const {
    products,
    isLoading,
    isRefreshing,
    error,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    categories,
    onCategorySelect,
    onRefresh,
    onRetry,
    onClearFilters,
    onProductPress,
  } = useProductListScreen();

  return (
    <ProductListScreenView
      products={products}
      isLoading={isLoading}
      isRefreshing={isRefreshing}
      error={error}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      selectedCategory={selectedCategory}
      categories={categories}
      onCategorySelect={onCategorySelect}
      onRefresh={onRefresh}
      onRetry={onRetry}
      onClearFilters={onClearFilters}
      onProductPress={onProductPress}
    />
  );
}

export default ProductListScreen;
