/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import Container from '../../components/container';
import Images from '../../assets/Images';
import Dimens from '../../config/Dimens';
import commonStyles from '../../components/commonStyles/CommonStyles';
import CustomInputText from '../../components/views/CustomInputText';
import VectorIcon from '../../components/VectorIcons';
import CustomText from '../../components/views/CustomText';
import {AlertContext} from '../../components/Modal/modalProvider';
import AlertMessage from '../../components/Modal/Modal';

export default function Login() {
  const {setAlertMessage, setShouldShowAlert, shouldShowAlert, alertMessage} =
    useContext(AlertContext);

  return (
    <View
      style={[commonStyles.allCenter, {flex: 1, backgroundColor: '#fafcff'}]}>
      <Container>
        <View style={[commonStyles.allCenter]}>
          <Image
            resizeMode="contain"
            source={Images.logo}
            style={styles.imageStyle}
          />
          <AlertMessage
            shouldShow={shouldShowAlert}
            alertMessage={alertMessage}
            onPressOk={(): void => setShouldShowAlert(false)}
          />
          <CustomInputText placeholder="email or phone number" />
          <CustomInputText placeholder="password" />
          <View style={{flexDirection: 'row', paddingHorizontal: '2%'}}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <CustomText value={'Biometrics'} />
              <VectorIcon
                iconFamily={'Ionicons'}
                iconName={'ios-finger-print-outline'}
                iconSize={28}
                iconColor={'black'}
              />
            </View>
            <View
              style={{
                flex: 2,
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <CustomText value={'Forgot Password?'} />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              setAlertMessage('Please contact us to change your password!');
              setShouldShowAlert(true);
            }}
            style={styles.buttonStyle}>
            <Text style={{color: 'white'}}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: Dimens.ms200,
    width: Dimens.ms200,
  },
  buttonStyle: {
    backgroundColor: '#c561ff',
    height: Dimens.ms35,
    width: Dimensions.get('screen').width - 64,
    padding: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    borderRadius: 12,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowOffset: {height: 2, width: 2},
  },
});
