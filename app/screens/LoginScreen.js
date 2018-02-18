import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from '../components/login/Login';
import Register from '../components/login/Register';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';


const loginScreenStack = StackNavigator({
	Login: { screen: Login },
	Register: { screen: Register },
},
{
 headerMode: 'screen',
 transitionConfig: () => ({
	 screenInterpolator: CardStackStyleInterpolator.forHorizontal
 })
});

export default loginScreenStack;
