/**
 * Formats a numeric value into USD currency format (e.g. $19.99)
 */
export function formatCurrency(amount: number | undefined | null): string {
  if (amount == null || isNaN(amount)) return '$0.00';
  return `$${amount.toFixed(2)}`;
}

/**
 * Calculates original price and saved amount given current price and discount percentage
 */
export function calculateDiscount(price: number, discountPercentage: number) {
  if (!discountPercentage || discountPercentage <= 0) {
    return {
      hasDiscount: false,
      originalPriceFormatted: formatCurrency(price),
      discountPercentageFormatted: '',
      savingsFormatted: '',
    };
  }

  const originalPrice = price / (1 - discountPercentage / 100);
  const savings = originalPrice - price;

  return {
    hasDiscount: true,
    originalPriceFormatted: formatCurrency(originalPrice),
    discountPercentageFormatted: `${Math.round(discountPercentage)}% OFF`,
    savingsFormatted: `Save ${formatCurrency(savings)}`,
  };
}

/**
 * Formats ISO date string into human-friendly format (e.g. "Apr 30, 2025")
 */
export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateString;
  }
}

/**
 * Evaluates stock availability status and styling badge category
 */
export function formatStockStatus(status?: string, stock: number = 0) {
  if (stock <= 0 || status?.toLowerCase().includes('out')) {
    return {
      label: 'Out of Stock',
      variant: 'danger' as const,
      isAvailable: false,
    };
  }
  if (stock < 10 || status?.toLowerCase().includes('low')) {
    return {
      label: `Low Stock (${stock} left)`,
      variant: 'warning' as const,
      isAvailable: true,
    };
  }
  return {
    label: `In Stock (${stock} available)`,
    variant: 'success' as const,
    isAvailable: true,
  };
}

/**
 * Capitalizes string nicely
 */
export function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
