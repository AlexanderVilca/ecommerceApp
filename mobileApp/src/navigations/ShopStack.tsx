import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopScreen from '../screens/Shop/ShopScreen';


const Stack = createNativeStackNavigator();

const ShopStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Shop' component={ShopScreen} />
        </Stack.Navigator>
    )
}

export default ShopStack;