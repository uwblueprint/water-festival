import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RefreshControl, FlatList, ScrollView, View, Image, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import AlertsStyles from '../../styles/AlertStyles';
import emptyImage from '../../images/alerts.png';
import { getAlertsList, updateUserLastAlertSeen } from '../../actions';
import { arrayOfObjectEquals } from '../../utils/arrays';

class AlertsList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userId: props.userId,
			lastAlertSeen: props.lastAlertSeen,
			getAlertsList: props.getAlertsList,
			updateUserLastAlertSeen: props.updateUserLastAlertSeen,
			currentAlerts: props.currentAlerts,
			isRefreshing: false,
		};

		this.renderListItem = this.renderListItem.bind(this);
		this.onRefresh = this.onRefresh.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		// Avoiding refresh if possible
		if (!arrayOfObjectEquals(nextProps.currentAlerts, this.state.currentAlerts)) {
			this.setState({ currentAlerts: nextProps.currentAlerts });
		}
		if (nextProps.lastAlertSeen !== this.state.lastAlertSeen) {
			this.setState({ lastAlertSeen: nextProps.lastAlertSeen });
		}
		if (this.state.isRefreshing) this.setState({ isRefreshing: false });
  }

	componentWillUnmount() {
		const { userId, lastAlertSeen, currentAlerts } = this.state;
		if(currentAlerts.length > 0){
			this.state.updateUserLastAlertSeen(userId, lastAlertSeen, new Date(currentAlerts[0].sentDate));
		}
	}

	onRefresh() {
		this.setState({ isRefreshing: true });
		this.state.getAlertsList();
  }

	keyExtractor = (item) => item.id;

	renderAlertBadge(item){
		if (!this.state.lastAlertSeen || new Date(item.sentDate).getTime() > this.state.lastAlertSeen.getTime()){
			return (
				<View
					style={ AlertsStyles.badge }
				>
					<Text style={ AlertsStyles.badgeText }>NEW</Text>
				</View>
			);
		} else {
			return (<View />);
		}
	}

	renderListItem({ item, index }) {
		if (item.name) {
			const badge = this.renderAlertBadge(item);
			return (
				<ListItem
					containerStyle={ AlertsStyles.listItem }
					titleStyle={ AlertsStyles.listItemText }
					subtitleStyle={ AlertsStyles.listItemSubtitle }
					key={ item.name }
					title={ item.name }
					subtitle={ item.description }
					badge={{ element: badge }}
					onPress={ () => this.renderAlertDetails(item, index) }
					hideChevron
				/>
			);
		}
	}

	renderAlertDetails(alert, index) {
		this.props.navigation.navigate('AlertDetails', {
			index,
			currentAlert: alert,
			alertList: this.state.currentAlerts,
		});
	}

	renderFooter = () => {
		return (
			<View
				style={ AlertsStyles.footer }
			/>
		);
	}

	render() {
		const refreshControl = (
			<RefreshControl
				refreshing={ this.state.isRefreshing }
				onRefresh={ this.onRefresh }
			/>
		);

		if (this.state.currentAlerts.length === 0) {
			return (
				<ScrollView style={ AlertsStyles.alertsView }>
					<View style={ AlertsStyles.emptyImage }>
						<Image source={ emptyImage } />
					</View>
					<Text style={ AlertsStyles.emptyTopText }>Nothing Here!</Text>
					<Text style={ AlertsStyles.emptyBottomText }>Tap the back arrow to go back to the home screen.</Text>
				</ScrollView>
			);
		}

		return (
			<ScrollView
				style={ AlertsStyles.alertsView }
				refreshControl={ refreshControl }
			>
				<FlatList
					data={ this.state.currentAlerts }
					renderItem={ this.renderListItem }
					extraData={ this.state }
					keyExtractor={ this.keyExtractor }
					ListFooterComponent={ this.renderFooter }
				/>
			</ScrollView>
		);

	}
}

const mapStateToProps = ({ currentAlerts, currentUser, lastAlertSeen }) => {
	const userId = (currentUser && currentUser.hasOwnProperty('_id')) ? currentUser._id : null;
	currentAlerts = currentAlerts.filter(alert => alert.sentDate != null);
	currentAlerts.sort(function(a,b){
		return b.sentDate - a.sentDate;
	}).reverse();
	return {
		currentAlerts,
		lastAlertSeen: new Date(lastAlertSeen),
		userId
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getAlertsList: () => {
			dispatch(getAlertsList());
		},
		updateUserLastAlertSeen: (userId, oldLastAlertSeen, newLastAlertSeen) => {
			dispatch(updateUserLastAlertSeen(userId, oldLastAlertSeen, newLastAlertSeen))
		},
	}
};

AlertsList.propTypes = {
	navigation: PropTypes.object.isRequired,
	navigate: PropTypes.func,
	userId: PropTypes.string.isRequired,
	// Action
	getAlertsList: PropTypes.func.isRequired,
	updateUserLastAlertSeen: PropTypes.func.isRequired,
	// Reducer
	currentAlerts: PropTypes.array.isRequired,
	lastAlertSeen: PropTypes.object.isRequired
};

AlertsList.defaultProps = {
	navigate: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertsList);
