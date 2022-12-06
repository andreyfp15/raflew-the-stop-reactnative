import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/ui/main';
import Config from './src/ui/config';


const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Config" component={Config} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Navigation></Navigation>
    </NavigationContainer>
  );
}
