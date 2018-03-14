import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ActivityTile extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

	onAddButtonPress(itemId) {
		const { userId, myActivities } = this.state;
		if (myActivities.indexOf(itemId) >= 0) return;

		myActivities.push(itemId);
		this.state.onAddActivity(userId, myActivities);
	}

	onRemoveButtonPress(itemId) {
		const { userId, myActivities } = this.state;
		const index = myActivities.indexOf(itemId);
		if (index < 0) return;

		myActivities.splice(index, 1);
		this.state.onRemoveActivity(userId, myActivities);
	}

  render() {
    return (
      <div>MyComponent</div>
    );
  }

}

ActivityTile.defaultProps = {
	// Action Creators
	onAddActivity: PropTypes.func.isRequired,
	onRemoveActivity: PropTypes.func.isRequired,
	// Reducers
	myActivities: PropTypes.array.isRequired,
	userId: PropTypes.string.isRequired
};

const mapStateToProps = ({ myActivities, currentUser }) => {
	const userId = (currentUser && currentUser.hasOwnProperty('_id')) ? currentUser._id : null;
	return {
		myActivities,
		userId
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAddActivity: (userId, userActivities) => {
			dispatch(addActivity(userId, userActivities));
		},
		onRemoveActivity: (userId, userActivities) => {
			dispatch(removeActivity(userId, userActivities));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityTile);
