/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigations/BottomTabNavigator';
import { StyleSheet } from 'react-native';
// const STRIPE_PUBLISHABLE_KEY =

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['top']} style={styles.container}>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;
