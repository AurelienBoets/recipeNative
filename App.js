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
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'All Category'}}
        />
        <Stack.Screen
          name="List"
          component={ListRecipe}
          options={{title: 'Meals Overview'}}
        />
        <Stack.Screen
          name="Detail"
          component={DetailRecipe}
          options={{title: 'About the Meal'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
