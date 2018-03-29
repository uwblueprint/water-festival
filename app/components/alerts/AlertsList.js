import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RefreshControl, FlatList, ScrollView, View, Image, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import AlertsStyles from '../../styles/AlertStyles';
import emptyImage from '../../images/alerts.png';
import { getAlertsList } from '../../actions';

class AlertsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
			getAlertsList: props.getAlertsList,
			currentAlerts: props.currentAlerts,
			isRefreshing: false,
    };

    this.renderListItem = this.renderListItem.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
  }

  componentWillReceiveProps(nextProps) {
		// Avoiding refresh if possible
		if (nextProps.currentAlerts !== this.state.currentAlerts) {
			this.setState({ currentAlerts: nextProps.currentAlerts });
		}
		if (this.state.isRefreshing) this.setState({ isRefreshing: false });
  }

  onRefresh() {
		this.setState({ isRefreshing: true });
		this.state.getAlertsList();
  }

	keyExtractor = (item) => item.id;

  renderListItem({ item }) {
		if (item.name) {
			return (
				<ListItem
					containerStyle={ AlertsStyles.listItem }
					titleStyle={ AlertsStyles.listItemText }
					key={ item.name }
					title={ item.name }
					subtitle={ item.description }
					hideChevron
				/>
			);
		}
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

const mapStateToProps = ({ currentAlerts }) => {
	return { currentAlerts };
};

const mapDispatchToProps = dispatch => {
	return {
		getAlertsList: () => {
			dispatch(getAlertsList());
		},
	}
};

AlertsList.propTypes = {
	// Action
	getAlertsList: PropTypes.func.isRequired,
	// Reducer
	currentAlerts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertsList);
