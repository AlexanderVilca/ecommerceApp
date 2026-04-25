import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OfferScreen from '../screens/Offer/OfferScreen';


const Stack = createNativeStackNavigator();

const OfferStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Offer' component={OfferScreen} />
        </Stack.Navigator>
    )
}

export default OfferStack;