import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	View,
	Text
} from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {	prepChecked,	prepUnchecked } from '../../actions';
import { arrayEquals } from '../../utils/arrays';
import ActivityStyles from '../../styles/ActivityStyles';
import { darkGray,darkBlue } from '../../styles/Colours';

class PrepCheckTile extends React.Component {

	constructor(props) {
		super(props);

		const {
			onPrepCheck,
			onPrepUncheck,
			myPrepCheck,
			item,
			userId,
		} = props;

		this.state = {
			onPrepCheck,
			onPrepUncheck,
			myPrepCheck,
			item,
			isAdded: myPrepCheck.includes(item.id),
			userId
		};

    this.onPrepCheckPress = this.onPrepCheckPress.bind(this);
		this.onPrepUncheckPress = this.onPrepUncheckPress.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		// only need to update if is Added needs to be changed
		const hasItem = nextProps.myPrepCheck.includes(this.state.item.id);
		if (!this.state.isAdded && hasItem) {
			this.setState({ isAdded: true});
		} else if (this.state.isAdded && !hasItem) {
			this.setState({isAdded: false});
		}
		if(!arrayEquals(this.state.myPrepCheck, nextProps.myPrepCheck)) {
			this.setState({ myPrepCheck: nextProps.myActivities })
		}
	}

	shouldComponentUpdate(nextProps) {
		const hasItem = nextProps.myPrepCheck.includes(this.state.item.id);
		return (!this.state.isAdded && hasItem) || (this.state.isAdded && !hasItem);
	}

	onPrepCheckPress(itemId) {
		const { userId, myPrepCheck} = this.state;
		if (myPrepCheck.indexOf(itemId) >= 0) return;

		const newPrepCheck = [...myPrepCheck, itemId]
		this.state.onPrepCheck(userId, myPrepCheck, newPrepCheck);
	}

	onPrepUncheckPress(itemId) {
		const { userId, myPrepCheck } = this.state;
		const index = myPrepCheck.indexOf(itemId);
		if (index < 0) return;

		const newPrepCheck = myPrepCheck.filter(a => a !== itemId);
		this.state.onPrepUncheck(userId, myPrepCheck, newPrepCheck);
	}

	render() {

		isAdded = myPrepCheck.includes(item.id);

		const checkIcon = (
      <Icon
        name='ios-checkmark-circle'
        size={ 30 }
        color= '#17B730'
        style={{ marginTop: 5 }}
      />
    );

    const uncheckIcon = (
      <Icon
        name='ios-checkmark-circle-outline'
        size={ 30 }
        color= '#17B730'
        style={{ marginTop: 5 }}
      />
    );

		const icon = isAdded ? uncheckIcon : checkIcon;

		return (
			<ListItem
				containerStyle={ ActivityStyles.activityListItem }
				titleStyle={ ActivityStyles.activityListItemText }
				subtitleStyle={ ActivityStyles.activityListItemSubtitle }
				key={ item.id }
				title={ item.text }
				rightIcon={ icon }
			/>
		);
  }
}

const mapStateToProps = ({ myPrepCheck }) => ({ myPrepCheck });

const mapDispatchToProps = dispatch => {
	return {
		onPrepCheck: (userId, oldPrepCheck, newPrepCheck) => {
			dispatch(onPrepCheck(userId, oldPrepCheck, newPrepCheck));
		},
		onPrepUncheck: (userId, oldPrepCheck, newPrepCheck) => {
			dispatch(onPrepUncheck(userId, oldPrepCheck, newPrepCheck));
		}
	}
};

PrepCheckTile.propTypes = {
	item: PropTypes.object.isRequired,
	userId: PropTypes.string.isRequired,
	// Reducer
	myPrepCheck: PropTypes.array.isRequired,
	// Action Creators
	onPrepCheck: PropTypes.func.isRequired,
	onPrepUncheck: PropTypes.func.isRequired,
};

PrepCheckTile.defaultProps = {
	navigate:() => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(PrepCheckTile);
