import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import Login from '../components/login/Login';
import Register from '../components/login/Register';


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
