import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import HomeHeader from '../components/common/HomeHeader';
import SearchScreen from '../screens/Home/SearchScreen';
import CommonHeader from '../components/common/CommonHeader';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          header: () => <HomeHeader />,
        }}
      />
      <Stack.Screen name='Search' component={SearchScreen}  options={{
        headerShown: true,
        header: () => <CommonHeader title='Search' />
      }}/>
    </Stack.Navigator>
  );
};

export default HomeStack;
