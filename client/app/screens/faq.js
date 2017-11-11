import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Image,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomNavigation, { Tab, NavigationComponent } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TabNavigator } from 'react-navigation'
import { FaqStyles } from '../styles/faqstyles'

export class FaqScreen extends Component {
  static navigationOptions = {
    title: 'FAQ',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
		  <View style={FaqStyles.faqHeader}>
		 	<Text style={FaqStyles.titleText}>
			 Frequently Asked Questions
		 	</Text>
		 </View>
		 <View style={FaqStyles.faqPadding}>
        <Text>Temporary FAQ page.</Text>
		 </View>
      </View>
    );
  }
}
