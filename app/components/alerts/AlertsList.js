import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RefreshControl, FlatList, ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
import AlertsStyles from '../../styles/AlertStyles';
import { alertsLoaded } from '../../actions';

const API_URL = `https://water-fest.herokuapp.com/alerts`;

class AlertsList extends React.Component {
  static navigationOptions = {
		title: 'Alerts',
  };
  
  constructor(props) {
    super(props);
    
    this.state = {
			currentAlerts: this.props.currentAlerts,
			isRefreshing: false,
    };
    
    this.renderListItem = this.renderListItem.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
  }

  componentDidMount() {
		this.fetchData()
			// eslint-disable-next-line no-console
			.then(() => console.log("Finished mounting!"))
			// eslint-disable-next-line no-console
			.catch(err => console.error(err));
  }
  
  componentWillReceiveProps(nextProps) {
		// Avoiding refresh if possible
		if (nextProps.currentAlerts !== this.state.currentAlerts) {
			this.setState({ currentAlerts: nextProps.currentAlerts });
		}
  }
  
  onRefresh() {
		this.setState({ isRefreshing: true });
		this.fetchData().then(() => {
			this.setState({ isRefreshing: false });
		});
  }

	keyExtractor = (item) => item.id;
  
  fetchData() {
		return fetch(`${API_URL}/list`)
			.then(response => response.json())
			.then(faqList => this.props.onAlertsLoaded(faqList))
			// eslint-disable-next-line no-console
			.catch(err => console.error(err));
  }
  
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
		onAlertsLoaded: alertsList => {
			dispatch(alertsLoaded(alertsList));
		},
	}
};

AlertsList.propTypes = {
	// Action
	onAlertsLoaded: PropTypes.func.isRequired,
	// Reducer
	currentAlerts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertsList);
