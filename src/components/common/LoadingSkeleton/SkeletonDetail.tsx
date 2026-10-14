import React, { useEffect, useState } from 'react';
import { Animated, ScrollView, View } from 'react-native';

import { createSkeletonDetailStyles } from '@/components/common/LoadingSkeleton/SkeletonDetail.styles';
import { useTheme } from '@/hooks/use-theme';

export function SkeletonDetail() {
  const theme = useTheme();
  const styles = createSkeletonDetailStyles(theme);
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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Animated.View style={[styles.heroPlaceholder, { opacity: opacityAnim }]} />
      <View style={styles.body}>
        <View style={styles.badgeRow}>
          <Animated.View style={[styles.badgePlaceholder, { opacity: opacityAnim }]} />
          <Animated.View style={[styles.badgePlaceholder, { opacity: opacityAnim }]} />
        </View>
        <Animated.View style={[styles.titlePlaceholder, { opacity: opacityAnim }]} />
        <Animated.View style={[styles.pricePlaceholder, { opacity: opacityAnim }]} />
        <Animated.View style={[styles.paragraphLine1, { opacity: opacityAnim }]} />
        <Animated.View style={[styles.paragraphLine2, { opacity: opacityAnim }]} />
        <Animated.View style={[styles.paragraphLine3, { opacity: opacityAnim }]} />
        <View style={styles.specsGrid}>
          <Animated.View style={[styles.specsPlaceholder, { opacity: opacityAnim }]} />
        </View>
      </View>
    </ScrollView>
  );
}
