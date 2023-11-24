import React from "react";4
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from "./pages/main";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";

const Stack = createStackNavigator();

export default function Navigate(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Main"} component={Main}/>
                <Stack.Screen name={"Page1"} component={Page1}/>
                <Stack.Screen name={"Page2"} component={Page2}/>
                <Stack.Screen name={"Page3"} component={Page3}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}