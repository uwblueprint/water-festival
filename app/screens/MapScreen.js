import React from 'react';
import {
	Image,
	Text,
	Dimensions
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

class MapScreen extends React.Component {
	static navigationOptions = {
		title: 'Map',
	};

	constructor(props) {
		super(props);

		let x = 0;
		let y = 0;
		let zoomFactor = 1;

		if (this.props.navigation.state.params) {
			const coord= this.getStationCoord(this.props.navigation.state.params.stationNumber);
			x = coord.x;
			y = coord.y;
			zoomFactor = 3;
		}

		this.state = {
			zoomFactor,
			x,
			y
		};

		this.onClick = this.onClick.bind(this);
	}

	getStationCoord(stationNumber) {
		let x = 0;
		let y = 0;

		if (stationNumber === 1) {
			x = 16;
			y = -64;
		}

		else if (stationNumber === 2) {
			x = 310;
			y = 450;
		}

		else if (stationNumber === 2.1) {
			x = 530;
			y = 265;
		}

		else if (stationNumber === 2.2) {
			x = 685;
			y = 285;
		}

		else if (stationNumber === 3) {
			x = 200;
			y = 370;
		}

		else if (stationNumber === 3.1) {
			x = 555;
			y = 210;
		}

		else if (stationNumber === 4) {
			x = 615;
			y = 245;
		}

		else if (stationNumber === 5) {
			x = 675;
			y = 170;
		}

		else if (stationNumber === 6) {
			x = 600;
			y = 100;
		}

		else if (stationNumber === 7) {
			x = 520;
			y = 100;
		}

		else if (stationNumber === 8) {
			x = 440;
			y = 170;
		}

		else if (stationNumber === 9) {
			x = 515;
			y = 215;
		}

		else if (stationNumber === 10) {
			x = 380;
			y = 215;
		}

		else if (stationNumber === 11) {
			x = 268;
			y = 230;
		}

		else if (stationNumber === 12) {
			x = 275;
			y = 215;
		}

		else if (stationNumber === 13) {
			x = 280;
			y = 215;
		}

		else if (stationNumber === 14) {
			x = 200;
			y = 280;
		}

		else if (stationNumber === 14.1) {
			x = 575;
			y = 160;
		}

		else if (stationNumber === 15) {
			x = 180;
			y = 230;
		}

		else if (stationNumber === 16) {
			x = 190;
			y = 195;
		}

		else if (stationNumber === 17) {
			x = 135;
			y = 308;
		}

		else if (stationNumber === 18) {
			x = 165;
			y = 315;
		}

		else if (stationNumber === 19) {
			x = 140;
			y = 390;
		}

		else if (stationNumber === 20) {
			x = 300;
			y = 385;
		}

		else if (stationNumber === 21) {
			x = 350;
			y = 365;
		}

		else if (stationNumber === 22) {
			x = 278;
			y = 445;
		}

		else if (stationNumber === 23) {
			x = 660;
			y = 390;
		}

		else if (stationNumber === 24) {
			x = 605;
			y = 350;
		}

		return {x, y};
	}

	onClick(evt) {
		this.setState({ label: '', x: evt.nativeEvent.locationX, y: evt.nativeEvent.locationY });
		const x = evt.nativeEvent.locationX;
		const y = evt.nativeEvent.locationY;
		this.setState({ label: '' });

		//return { x: 120, y: 50 };

		// LANDMARK #1
		if (x > 375 && x < 390 && y > 470 && y < 490) {
			this.setState({ label: 'LANDMARK #1 >' });
		}
		// LANDMARK #2
		else if (x > 305 && x < 315 && y > 445 && y < 455) {
			this.setState({ label: 'LANDMARK #2 >' });
		}
		// LANDMARK #2.1
		else if (x > 535 && x < 545 && y > 260 && y < 270) {
			this.setState({ label: 'LANDMARK #2 >' });
		}
		// LANDMARK #2.2
		else if (x > 680 && x < 690 && y > 280 && y < 290) {
			this.setState({ label: 'LANDMARK #2 >' });
		}
		// LANDMARK #3
		else if (x > 190 && x < 210 && y > 365 && y < 375) {
			this.setState({ label: 'LANDMARK #3 >' });
		}
		// LANDMARK #3.1
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
		// LANDMARK #14.1
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

	onMapPress(data) {
		const {
			positionX,
			positionY,
			scale,
			type,
			zoomCurrentDistance
		} = data;
		console.log(positionX, positionY)
		// Only update when map stops moving
		if (type !== "onPanResponderRelease") return;

		// Placeholder for now
		return { positionX, positionY, scale, type, zoomCurrentDistance };
	}

	render() {
		return (
			<ImageZoom
				cropWidth={ Dimensions.get('window').width }
				cropHeight={ Dimensions.get('window').height }
				imageWidth={ Dimensions.get('window').width }
				imageHeight={ Dimensions.get('window').height }
				onMove={ this.onMapPress }
				centerOn={{ x: this.state.x, y: this.state.y, scale: this.state.zoomFactor }}
			>
				<Image
					source={{ uri: 'https://water-fest.herokuapp.com/images/map.png' }}
					style={{ flex: 1 }}
					resizeMode="contain"
				>
					<Text
						style={{
							backgroundColor: 'white',
							top: this.state.y - 5,
							left: this.state.x - 5,
							position: "absolute"
						}}
					>
						{this.state.label}
					</Text>
				</Image>
			</ImageZoom>
		);
	}
}

export default MapScreen;
