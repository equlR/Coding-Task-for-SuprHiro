import { openBrowserAsync, WebBrowserPresentationStyle } from 'expo-web-browser';
import React, { ReactNode } from 'react';
import { Linking, Platform, Pressable, StyleProp, ViewStyle } from 'react-native';

export interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function ExternalLink({ href, children, style }: ExternalLinkProps) {
  const handlePress = async () => {
    if (Platform.OS !== 'web') {
      await openBrowserAsync(href, {
        presentationStyle: WebBrowserPresentationStyle.AUTOMATIC,
      });
    } else {
      await Linking.openURL(href);
    }
  };

  return (
    <Pressable style={style} onPress={handlePress}>
      {children}
    </Pressable>
  );
}
