import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import CustomColors from '../../config/CustomColors';
import CustomText from '../views/CustomText';
import {useSelector} from 'react-redux';
import {AppState} from '../../redux/store';
function AlertMessage({
  shouldShow,
  alertMessage,
  onPressOk,
}: {
  shouldShow: boolean;
  alertMessage: string;
  onPressOk: () => void;
}): JSX.Element {
  const theme = useSelector(
    (state: AppState) => state.appStateReducer.isDarkMode,
  );
  return (
    <Modal isVisible={shouldShow}>
      <View
        style={[
          styles.container,
          {backgroundColor: CustomColors(theme).backgroundColor},
        ]}>
        <View style={styles.messageContainer}>
          <CustomText>{alertMessage}</CustomText>
        </View>
        <TouchableOpacity style={styles.button} onPress={onPressOk}>
          <CustomText>Ok</CustomText>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

AlertMessage.propTypes = {
  shouldShow: PropTypes.bool.isRequired,
  alertMessage: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    height: '25%',
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    flexDirection: 'column',
  },
  messageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 3,
    padding: '5%',
  },
  messageText: {
    textAlign: 'center',
  },
  button: {
    flex: 1,
    borderTopWidth: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3%',
  },
});

export default AlertMessage;
