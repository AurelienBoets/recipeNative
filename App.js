import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './stack/Home';
import ListRecipe from './stack/ListRecipe';
import DetailRecipe from './stack/DetailRecipe';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={ListRecipe} />
        <Stack.Screen name="Detail" component={DetailRecipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
