import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import { CustomButton, AppGradient } from "@/components/index";
import React from "react";
import { StatusBar } from "expo-status-bar";
import beachImage from "@/assets/meditation-images/beach.webp";
import { useRouter } from "expo-router";

const App = () => {
  const { push } = useRouter();

  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <SafeAreaView className="flex-1 px-1 justify-between">
            <View>
              <Text className="text-center font-bold text-white text-4xl capitalize">
                Simple meditation
              </Text>
              <Text className="text-center font-bold text-white text-2xl mt-3 capitalize">
                Simplifying meditation for Everyone
              </Text>
            </View>

            <View>
              <CustomButton
                onPress={() => push("/nature-meditate")}
                title="Get Started"
              />
            </View>

            <StatusBar style="light" />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
