import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import HomeHeader from '../components/common/HomeHeader';
import SearchScreen from '../screens/Home/SearchScreen';
import CommonHeader from '../components/common/CommonHeader';
import FavoriteScreen from '../screens/Home/FavoriteScreen';
import CartScreen from '../screens/Home/CartScreen';

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
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: true,
          header: () => <CommonHeader title="Search" />,
        }}
      />
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          headerShown: true,
          header: () => <CommonHeader title="Favorite Items" />,
        }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: true,
          header: () => <CommonHeader title="Cart" />,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
