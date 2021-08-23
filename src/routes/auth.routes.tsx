import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { SignUpFirstStep } from '../screens/SignUp/SignUpFirstStep';
import { SignUpSecondStep } from '../screens/SignUp/SignUpSecondStep';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(){
    return (
        <Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
            <Screen 
                name="SignIn"
                component={SignIn}
            />
            <Screen 
                name="SignUpFirstStep"
                component={SignUpFirstStep}
            />
            <Screen 
                name="SignUpSecondStep"
                component={SignUpSecondStep}
            />
            <Screen 
                name="Home"
                component={Home}
            />
        </Navigator>
        
    )
}