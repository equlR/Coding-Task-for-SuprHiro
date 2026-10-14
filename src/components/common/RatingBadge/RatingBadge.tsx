import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';

import { createRatingBadgeStyles } from '@/components/common/RatingBadge/RatingBadge.styles';
import { useTheme } from '@/hooks/use-theme';

export interface RatingBadgeProps {
  rating: number;
  count?: number;
  showCount?: boolean;
  style?: StyleProp<ViewStyle>;
}

export function RatingBadge({
  rating,
  count,
  showCount = false,
  style,
}: RatingBadgeProps) {
  const theme = useTheme();
  const styles = createRatingBadgeStyles(theme);

  return (
    <View style={[styles.container, style]}>
      <Ionicons
        name="star"
        size={12}
        color={theme.star}
        style={styles.starIcon}
      />
      <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
      {showCount && count != null && (
        <Text style={styles.countText}>({count})</Text>
      )}
    </View>
  );
}
