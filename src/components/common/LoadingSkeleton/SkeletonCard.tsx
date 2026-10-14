import React, { useEffect, useState } from 'react';
import { Animated, View } from 'react-native';

import { createSkeletonCardStyles } from '@/components/common/LoadingSkeleton/SkeletonCard.styles';
import { useTheme } from '@/hooks/use-theme';

export function SkeletonCard() {
  const theme = useTheme();
  const styles = createSkeletonCardStyles(theme);
  const [opacityAnim] = useState(() => new Animated.Value(0.4));

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacityAnim, {
          toValue: 0.85,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0.4,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    );
    animation.start();

    return () => animation.stop();
  }, [opacityAnim]);

  return (
    <View style={styles.card}>
      <Animated.View style={[styles.imagePlaceholder, { opacity: opacityAnim }]} />
      <View style={styles.content}>
        <Animated.View style={[styles.badgePlaceholder, { opacity: opacityAnim }]} />
        <Animated.View style={[styles.titlePlaceholder, { opacity: opacityAnim }]} />
        <Animated.View style={[styles.subtitlePlaceholder, { opacity: opacityAnim }]} />
        <View style={styles.footer}>
          <Animated.View style={[styles.pricePlaceholder, { opacity: opacityAnim }]} />
          <Animated.View style={[styles.ratingPlaceholder, { opacity: opacityAnim }]} />
        </View>
      </View>
    </View>
  );
}

export function SkeletonList({ count = 4 }: { count?: number }) {
  return (
    <View>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={`skeleton-${index}`} />
      ))}
    </View>
  );
}
