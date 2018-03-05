import React from 'react';
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TabNavigator } from 'react-navigation'
import HomeScreenStack from './screens/HomeScreen'
import MyActivitiesScreenStack from './screens/MyActivitiesScreen'
import AllActivitiesScreenStack from './screens/AllActivitiesScreen'
import MapScreenStack from './screens/MapScreen'

const Container = TabNavigator({
	HomeScreen: { screen: HomeScreenStack },
	AllActivitiesScreen: { screen: AllActivitiesScreenStack },
	MyActivitiesScreen: { screen: MyActivitiesScreenStack },
	MapScreen: { screen: MapScreenStack },
}, {
		tabBarComponent: NavigationComponent,
		tabBarPosition: 'bottom',
		tabBarOptions: {
			bottomNavigationOptions: {
				style: {
					height: 75,
					borderTopWidth: 1,
					borderTopColor: "#B1B1B1"
				},
				labelColor: '#707070',
				shifting: false,
				backgroundColor: 'white',
				rippleColor: 'white',
				tabs: {
					HomeScreen: {
						icon: <Icon size={ 26 } color="#707070" name="home" />
					},
					AllActivitiesScreen: {
						icon: <Icon size={ 26 } color="#707070" name="perm-contact-calendar" />
					},
					MyActivitiesScreen: {
						icon: <Icon size={ 26 } color="#707070" name="access-time" />
					},
					MapScreen: {
						icon: <Icon size={ 26 } color="#707070" name="map" />
					},
				}
			}
		}
	})



export default Container;
