import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RefreshControl, FlatList, ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
import AlertsStyles from '../../styles/AlertStyles';
import { getAlertsList } from '../../actions';

class AlertsList extends React.Component {
  static navigationOptions = {
		title: 'Alerts',
  };

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

  componentDidMount() {
		this.state.getAlertsList();
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
				<Card
					containerStyle={ AlertsStyles.listItem }
					titleStyle={ AlertsStyles.listItemText }
					key={ item.name }
				>
					<Text style={ AlertsStyles.name }>{ item.name }</Text>
					<Text style={ AlertsStyles.description }>{ item.description }</Text>
				</Card>
			);
		}
	}

  render() {
		const refreshControl = (
			<RefreshControl
				refreshing={ this.state.isRefreshing }
				onRefresh={ this.onRefresh }
			/>
    );

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
