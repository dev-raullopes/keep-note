import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./StackRoutes";
import { ViewNote } from "../screens/ViewNote";
export function Routes() {
    return (
        <NavigationContainer>
        <ViewNote />
        </NavigationContainer>
    );
}