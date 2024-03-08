import "react-native-gesture-handler";
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { DrawerGroup } from "./NavigationPage";
import { useColorScheme } from "react-native";

export default function App() {

  const currentTheme = useColorScheme();

  return (
    <NavigationContainer theme={currentTheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto" />
      <DrawerGroup />
    </NavigationContainer>
  );
}
