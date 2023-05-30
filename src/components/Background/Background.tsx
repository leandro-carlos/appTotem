import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { StyleSheet, ImageBackground, Platform } from "react-native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

interface BackgroundProps {
  children?: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  return (
    <LinearGradient style={styles.container} colors={["#3D3B8E", "#000000"]}>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? getStatusBarHeight() : 0,
  },
});
