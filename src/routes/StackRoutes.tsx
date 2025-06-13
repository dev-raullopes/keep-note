import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { NewNote } from "../screens/NewNote";
import { ViewNote } from "../screens/ViewNote";
const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewNote" component={NewNote} />
      <Stack.Screen name="ViewNote" component={ViewNote} />
    </Stack.Navigator>
  );
}
