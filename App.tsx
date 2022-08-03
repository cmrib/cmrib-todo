
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { Home } from './src/screens/Home';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import * as SplashScreen from 'expo-splash-screen'

export default function App() {

  SplashScreen.preventAutoHideAsync();


  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  SplashScreen.hideAsync();

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}