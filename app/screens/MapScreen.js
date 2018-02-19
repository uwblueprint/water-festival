import React from 'react';
import PropTypes from 'prop-types';
import {
	Image,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';


class MapScreen extends React.Component {
	static navigationOptions = {
		title: 'Map',
	};

	constructor(props) {
		super(props);
		this.state = { label: props.initialInput, x: props.x, y: props.y };
	}

	onClick(evt) {
		this.setState({ label: '', x: evt.nativeEvent.locationX, y: evt.nativeEvent.locationY });
		const x = evt.nativeEvent.locationX;
		const y = evt.nativeEvent.locationY;
		this.setState({ label: '' });

		// LANDMARK #1
		if (x > 375 && x < 390 && y > 470 && y < 490) {
			this.setState({ label: 'LANDMARK #1 >' });
		}
		// LANDMARK #2
		else if (x > 305 && x < 315 && y > 445 && y < 455) {
			this.setState({ label: 'LANDMARK #2 >' });
		}
		// LANDMARK #2
		else if (x > 535 && x < 545 && y > 260 && y < 270) {
			this.setState({ label: 'LANDMARK #2 >' });
		}
		// LANDMARK #2
		else if (x > 680 && x < 690 && y > 280 && y < 290) {
			this.setState({ label: 'LANDMARK #2 >' });
		}
		// LANDMARK #3
		else if (x > 190 && x < 210 && y > 365 && y < 375) {
			this.setState({ label: 'LANDMARK #3 >' });
		}
		// LANDMARK #3
		else if (x > 550 && x < 560 && y > 205 && y < 215) {
			this.setState({ label: 'LANDMARK #3 >' });
		}
		// LANDMARK #4
		else if (x > 610 && x < 620 && y > 240 && y < 250) {
			this.setState({ label: 'LANDMARK #4 >' });
		}
		// LANDMARK #5
		else if (x > 670 && x < 680 && y > 165 && y < 175) {
			this.setState({ label: 'LANDMARK #5 >' });
		}
		// LANDMARK #6
		else if (x > 590 && x < 610 && y > 95 && y < 105) {
			this.setState({ label: 'LANDMARK #6 >' });
		}
		// LANDMARK #7
		else if (x > 515 && x < 525 && y > 90 && y < 105) {
			this.setState({ label: 'LANDMARK #7 >' });
		}
		// LANDMARK #8
		else if (x > 435 && x < 445 && y > 164 && y < 175) {
			this.setState({ label: 'LANDMARK #8 >' });
		}
		// LANDMARK #9
		else if (x > 510 && x < 520 && y > 210 && y < 220) {
			this.setState({ label: 'LANDMARK #9 >' });
		}
		// LANDMARK #10
		else if (x > 375 && x < 385 && y > 225 && y < 245) {
			this.setState({ label: 'LANDMARK #10 >' });
		}
		// LANDMARK #11
		else if (x > 260 && x < 275 && y > 225 && y < 235) {
			this.setState({ label: 'LANDMARK #11 >' });
		}
		// LANDMARK #12
		else if (x > 270 && x < 280 && y > 210 && y < 220) {
			this.setState({ label: 'LANDMARK #12 >' });
		}
		// LANDMARK #13
		else if (x > 270 && x < 285 && y > 265 && y < 275) {
			this.setState({ label: 'LANDMARK #13 >' });
		}
		// LANDMARK #14
		else if (x > 190 && x < 210 && y > 275 && y < 285) {
			this.setState({ label: 'LANDMARK #14 >' });
		}
		// LANDMARK #14
		else if (x > 570 && x < 580 && y > 155 && y < 165) {
			this.setState({ label: 'LANDMARK #14 >' });
		}
		// LANDMARK #15
		else if (x > 175 && x < 185 && y > 225 && y < 235) {
			this.setState({ label: 'LANDMARK #15 >' });
		}
		// LANDMARK #16
		else if (x > 185 && x < 195 && y > 190 && y < 200) {
			this.setState({ label: 'LANDMARK #16 >' });
		}
		// LANDMARK #17
		else if (x > 130 && x < 140 && y > 300 && y < 315) {
			this.setState({ label: 'LANDMARK #17 >' });
		}
		// LANDMARK #18
		else if (x > 160 && x < 170 && y > 310 && y < 320) {
			this.setState({ label: 'LANDMARK #18 >' });
		}
		// LANDMARK #19
		else if (x > 135 && x < 145 && y > 385 && y < 395) {
			this.setState({ label: 'LANDMARK #19 >' });
		}
		// LANDMARK #20
		else if (x > 295 && x < 305 && y > 380 && y < 390) {
			this.setState({ label: 'LANDMARK #20 >' });
		}
		// LANDMARK #21
		else if (x > 345 && x < 355 && y > 360 && y < 370) {
			this.setState({ label: 'LANDMARK #21 >' });
		}
		// LANDMARK #22
		else if (x > 270 && x < 285 && y > 440 && y < 450) {
			this.setState({ label: 'LANDMARK #22 >' });
		}
		// LANDMARK #23
		else if (x > 655 && x < 665 && y > 385 && y < 395) {
			this.setState({ label: 'LANDMARK #23 >' });
		}
		// LANDMARK #24
		else if (x > 600 && x < 610 && y > 345 && y < 355) {
			this.setState({ label: 'LANDMARK #24 >' });
		}
	}

	input() {
		this.setState({ label: 'hello world' })
	}

	render() {
		return (
			<ScrollView horizontal maximumZoomScale={ 5.0 } >
				<ScrollView>
					<TouchableOpacity onPress={ (evt) => this.onClick(evt) } activeOpacity={ 1.0 }>
						<Image
							source={{ uri: 'https://water-festival.herokuapp.com/map.png' }}
							style={{ width: 838, height: 648 }}
						>
							<Text style={{ backgroundColor: 'white', top: this.state.y - 5, left: this.state.x - 5, position: "absolute" }}>
								{this.state.label}
							</Text>
						</Image>
					</TouchableOpacity>
				</ScrollView>
			</ScrollView>
		);
	}
}


MapScreen.propTypes = {
	initialInput: PropTypes.string,
	x: PropTypes.number,
	y: PropTypes.number
};

MapScreen.defaultProps = {
	initialInput: '',
	x: 0,
	y: 0
};

export default MapScreen;