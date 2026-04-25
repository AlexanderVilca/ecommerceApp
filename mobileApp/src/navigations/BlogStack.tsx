import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BlogScreen from '../screens/Blog/BlogScreen';


const Stack = createNativeStackNavigator();

const BlogStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Blog' component={BlogScreen} />
        </Stack.Navigator>
    )
}

export default BlogStack;