import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import { Home, ShoppingBag, Tag, FileText, User } from 'lucide-react-native';
import { colors } from '../constants/colors';
import ShopStack from './ShopStack';
import OfferStack from './OfferStack';
import ProfileStack from './ProfileStack';
import BlogStack from './BlogStack';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.tabActive,
        tabBarInactiveTintColor: colors.tabInactive,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('HomeTab', {
              screen: 'Home',
            });
          },
        })}
      />
      <Tab.Screen
        name="ShopTab"
        component={ShopStack}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ color, size }) => (
            <ShoppingBag color={color} size={size} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('ShopTab', {
              screen: 'Shop',
            });
          },
        })}
      />
      <Tab.Screen
        name="OfferTab"
        component={OfferStack}
        options={{
          tabBarLabel: 'Offer',
          tabBarIcon: ({ color, size }) => <Tag color={color} size={size} />,
        }}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('OfferTab', {
              screen: 'Offer',
            });
          },
        })}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('ProfileTab', {
              screen: 'Profile',
            });
          },
        })}
      />
      <Tab.Screen
        name="BlogTab"
        component={BlogStack}
        options={{
          tabBarLabel: 'Blog',
          tabBarIcon: ({ color, size }) => (
            <FileText color={color} size={size} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('BlogTab', {
              screen: 'Blog',
            });
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
