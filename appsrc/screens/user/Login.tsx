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
import Images from '../../assets/Images';
import Dimens from '../../config/Dimens';
import commonStyles from '../../components/commonStyles/CommonStyles';
import CustomInputText from '../../components/views/CustomInputText';
import VectorIcon from '../../components/VectorIcons';
import CustomText from '../../components/views/CustomText';
import {
  AlertContext,
  ShowMenuContext,
} from '../../components/Modal/modalProvider';
import AlertMessage from '../../components/Modal/AlertModal';
import Drawer from '../../components/drawer/Drawer';
import {useDispatch, useSelector} from 'react-redux';
import {
  getUsersFetch,
  setCurrentCompanyIndex,
} from '../../redux/actions/userAction';
import CustomColors from '../../config/CustomColors';
import {AppState} from '../../redux/store';

export default function Login() {
  const {setAlertMessage, setShouldShowAlert, shouldShowAlert, alertMessage} =
    useContext(AlertContext);
  const {shouldShowMenu, setShouldShowMenu} = useContext(ShowMenuContext);
  const dispatch = useDispatch();
  const theme = useSelector(
    (state: AppState) => state.appStateReducer.isDarkMode,
  );
  return (
    <View
      style={[
        commonStyles.allCenter,
        {flex: 1, backgroundColor: CustomColors(theme).backgroundColor},
      ]}>
      <View style={[commonStyles.allCenter]}>
        {shouldShowMenu && (
          <Drawer
            onBackdropPress={(): void => setShouldShowMenu(false)}
            shouldShow={true}
          />
        )}

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
        <View style={{width: '80%'}}>
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
              <CustomText>Biometrics</CustomText>
              <VectorIcon
                iconFamily={'Ionicons'}
                iconName={'ios-finger-print-outline'}
                iconSize={28}
                iconColor={CustomColors(theme).black}
              />
            </View>
            <View
              style={{
                flex: 2,
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <CustomText>Forgot Password</CustomText>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatch(getUsersFetch());
            // dispatch(setCurrentCompanyIndex(1));
          }}
          style={[
            styles.buttonStyle,
            {
              backgroundColor: CustomColors(theme).primaryColor,
              shadowColor: CustomColors(theme).black,
            },
          ]}>
          <Text style={{color: CustomColors(theme).white}}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: Dimens.ms200,
    width: Dimens.ms200,
  },
  buttonStyle: {
    height: Dimens.ms35,
    width: Dimensions.get('screen').width - 64,
    padding: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    borderRadius: 12,
    shadowOpacity: 0.4,
    shadowOffset: {height: 2, width: 2},
  },
});
