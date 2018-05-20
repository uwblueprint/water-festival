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

		// TODO: Uncomment once zooming in on stations has been done
		// if (props.navigation.state.params) {
		// 	const coord = this.getStationCoord(props.navigation.state.params.stationNumber);
		// 	x = coord.x;
		// 	y = coord.y;
		// 	zoomFactor = 3;
		// }

		this.state = {
			x,
			y,
			zoomFactor
		};
	}

	onMapPress(data) {
		const {
			positionX,
			positionY,
			scale,
			type,
			zoomCurrentDistance
		} = data;

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
			>
				<Image
					source={{ uri: 'https://water-festival-server.appspot.com/images/map.png' }}
					style={{ flex: 1 }}
					resizeMode="contain"
				/>
			</ImageZoom>
		);
	}
}

export default MapScreen;
