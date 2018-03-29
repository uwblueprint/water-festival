import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	RefreshControl,
	ScrollView,
	FlatList,
	TouchableOpacity,
	Text,
	View,
	Image,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import MyScheduleTile from './MyScheduleTile';
import ActivityStyles from '../../styles/ActivityStyles';
import {
	getActivityList,
	getUserActivities,
} from '../../actions';
import emptyImage from '../../images/emptyMySchedule.png';
import { arrayOfObjectEquals } from '../../utils/arrays';
import { darkBlue } from '../../styles/Colours';

const BEGIN = {
	id: 'BEGIN',
	title: '9:30 - Activities Begin',
}

const END = {
	id: 'END',
	title: '1:45 - Activities End',
}

class MySchedule extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			userId: props.userId,
			refreshList: props.refreshList,
			isRefreshing: false,
			myActivities: props.currentActivities.filter(item => props.myActivities.includes(item.id)),
		};

		this.onRefresh = this.onRefresh.bind(this);
		this.renderListItem = this.renderListItem.bind(this);
		this.navigateToAllActivities = this.navigateToAllActivities.bind(this);
	}

	componentDidMount() {
		this.state.refreshList(this.state.userId);
	}

	componentWillReceiveProps(nextProps) {
		// Avoiding refresh if possible
		if (!arrayOfObjectEquals(nextProps.myActivities, this.state.myActivities)) {
			this.setState({
				myActivities: nextProps.currentActivities.filter(item => nextProps.myActivities.includes(item.id)),
			});
		}

		if (this.state.isRefreshing) this.setState({ isRefreshing: false });
	}

	onRefresh() {
		this.setState({ isRefreshing: true });
		this.state.refreshList(this.state.userId);
	}

	navigateToAllActivities() {
		this.props.navigation.navigate('ActivityList');
	}

	renderListItem({ item }) {
		return (
			<MyScheduleTile
				item={ item }
				userId={ this.state.userId }
				realIndex={ this.state.myActivities.indexOf(item) }
				navigate={ this.props.navigation.navigate }
				isEditing={ this.props.isEditing }
			/>
		);
  }

	render() {
		if (this.state.myActivities.length === 0) {
			return (
				<ScrollView style={ ActivityStyles.emptyScreen }>
					<View style={ ActivityStyles.emptyImage }><Image source={ emptyImage } /></View>
					<Text style={ ActivityStyles.emptyTopText }>Nothing Here!</Text>
					<Text style={ ActivityStyles.emptyBottomText }>Please go to the</Text>
					<TouchableOpacity onPress={ this.navigateToAllActivities }>
						<Text style={ ActivityStyles.emptyLinkText } >All Activities Tab</Text>
					</TouchableOpacity>
					<Text style={ ActivityStyles.emptyBottomText }>to add to your schedule</Text> 
				</ScrollView>
			);
		}

		const refreshControl = (
			<RefreshControl
				refreshing={ this.state.isRefreshing }
				onRefresh={ this.onRefresh }
			/>
		);

		return (
			<ScrollView
				style={ ActivityStyles.activityPadding }
				refreshControl={ refreshControl }
			>
				<ListItem
					containerStyle={ ActivityStyles.activityListBlueItem }
					titleStyle={ ActivityStyles.activityListItemBlueText }
					key={ BEGIN.id }
					title={ BEGIN.title }
					chevronColor={ darkBlue }
				/>
				<FlatList
					data={ this.state.myActivities }
					renderItem={ this.renderListItem }
					extraData={ this.state }
					initialNumToRender={ 7 }
					keyExtractor={ item => item.id }
				/>
				<ListItem
					containerStyle={ ActivityStyles.activityListBlueItem }
					titleStyle={ ActivityStyles.activityListItemBlueText }
					key={ END.id }
					title={ END.title }
					chevronColor={ darkBlue }
				/>
			</ScrollView>
		);
	}
}

const mapStateToProps = ({ currentActivities, currentUser, myActivities }) => {
	const userId = (currentUser && currentUser.hasOwnProperty('_id')) ? currentUser._id : null;
	return {
		currentActivities,
		myActivities,
		userId
	};
};

const mapDispatchToProps = dispatch => {
	return {
		refreshList: (userId) => {
			dispatch(getUserActivities(userId))
			dispatch(getActivityList());
		}
	}
};

MySchedule.propTypes = {
	currentActivities: PropTypes.array.isRequired,
	myActivities: PropTypes.array.isRequired,
	userId: PropTypes.string.isRequired,
	refreshList: PropTypes.func.isRequired,
	navigation: PropTypes.object.isRequired,
	isEditing: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MySchedule);
