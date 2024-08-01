import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface AppGradientProps {
  children: ReactNode;
  colors: string[];
}

const AppGradient: React.FC<AppGradientProps> = ({ children, colors }) => {
  return (
    <LinearGradient className="flex-1" colors={colors}>
      <SafeAreaView className="flex-1 px-5 pb-3 pt-10">{children}</SafeAreaView>
    </LinearGradient>
  );
};

export default AppGradient;
