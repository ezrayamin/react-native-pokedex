import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/index';
import PokemonTypeScreen from '../screens/pokemon-type';

export type StackParamsLinks = {
    'Home': undefined;
    'Pokemon Type': {
        url: string;
    };
}
const Stack = createNativeStackNavigator<StackParamsLinks>();

export function MainNav() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
            />
            <Stack.Screen
                name="Pokemon Type"
                component={PokemonTypeScreen}
            />
        </Stack.Navigator>
    )
}
