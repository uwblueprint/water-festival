import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import { darkBlue } from '../styles/Colours';

export default class ModalComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: props.isModalVisible,
      isSimpleClose: props.isSimpleClose,
      onClose: props.onClose
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ isModalVisible: true });
  }

  closeModal() {
    if (this.state.isSimpleClose) this.setState({ isModalVisible: false });
    else this.state.onClose();
  }

  componentWillReceiveProps(nextProps) {
    const { isModalVisible } = nextProps;
    if (isModalVisible !== this.state.isModalVisible) {
      this.setState({ isModalVisible });
    }
  }

  render() {
    return (
      <Modal isVisible={ this.state.isModalVisible }>
        <View style={ styles.modalContent }>
          <Text style={ styles.title }>Success!</Text>
          <Text style={ styles.body }>Your account has been created!  Login now to access the app.</Text>
          <TouchableOpacity
            style={ styles.button }
            onPress={ this.closeModal }
          >
            <Text style={ styles.buttonText }>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

ModalComponent.propTypes = {
  isModalVisible: PropTypes.bool,
  isSimpleClose: PropTypes.bool,
  onClose: PropTypes.func
};

ModalComponent.defaultProps = {
  isModalVisible: false,
  isSimpleClose: false,
  onClose: () => {}
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  body: {
    textAlign: 'center',
    width: '80%',
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    backgroundColor: darkBlue,
    width: 200,
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700'
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  }
});
