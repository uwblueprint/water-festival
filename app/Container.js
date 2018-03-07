import React from 'react';
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TabNavigator } from 'react-navigation'
import HomeScreenStack from './screens/HomeScreen'
import MyActivitiesScreenStack from './screens/MyActivitiesScreen'
import AllActivitiesScreenStack from './screens/AllActivitiesScreen'
import MapScreenStack from './screens/MapScreen'
import {
	darkGray,
	lightGray,
	darkBlue
} from './styles/Colours';

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
					borderTopColor: lightGray
				},
				labelColor: darkGray,
				shifting: false,
				backgroundColor: 'white',
				rippleColor: 'white',
				activeLabelColor: darkBlue,
				tabs: {
					HomeScreen: {
						icon: <Icon size={ 26 } color={ darkGray } name="home" />,
						activeIcon: <Icon size={ 26 } color={ darkBlue } name="home" />
					},
					AllActivitiesScreen: {
						icon: <Icon size={ 26 } color={ darkGray } name="perm-contact-calendar" />,
						activeIcon: <Icon size={ 26 } color={ darkBlue } name="perm-contact-calendar" />
					},
					MyActivitiesScreen: {
						icon: <Icon size={ 26 } color={ darkGray } name="access-time" />,
						activeIcon: <Icon size={ 26 } color={ darkBlue } name="access-time" />
					},
					MapScreen: {
						icon: <Icon size={ 26 } color={ darkGray } name="map" />,
						activeIcon: <Icon size={ 26 } color={ darkBlue } name="map" />
					},
				}
			}
		}
	})



export default Container;
