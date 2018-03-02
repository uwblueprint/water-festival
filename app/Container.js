import React from 'react';
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TabNavigator } from 'react-navigation'
import FaqScreenStack from './screens/FaqScreen'
import MyActivitiesScreenStack from './screens/MyActivitiesScreen'
import AllActivitiesScreenStack from './screens/AllActivitiesScreen'
import MapScreenStack from './screens/MapScreen'

const Container = TabNavigator({
	AllActivitiesScreen: { screen: AllActivitiesScreenStack },
	MyActivitiesScreen: { screen: MyActivitiesScreenStack },
	MapScreen: { screen: MapScreenStack },
	FaqScreen: { screen: FaqScreenStack },
}, {
		tabBarComponent: NavigationComponent,
		tabBarPosition: 'bottom',
		tabBarOptions: {
			bottomNavigationOptions: {
				style: {
					height: 60
				},
				labelColor: 'black',
				shifting: false,
				backgroundColor: '#C4C4C4',
				rippleColor: 'white',
				tabs: {
					AllActivitiesScreen: {
						icon: <Icon size={ 24 } color="black" name="view-list" />
					},
					MyActivitiesScreen: {
						icon: <Icon size={ 24 } color="black" name="account-circle" />
					},
					MapScreen: {
						icon: <Icon size={ 24 } color="black" name="place" />
					},
					FaqScreen: {
						icon: (
							<Icon size={ 24 } color="black" name="info-outline" />
						)
					}
				}
			}
		}
	})



export default Container;
