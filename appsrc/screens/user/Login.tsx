/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
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
import {getUsersFetch} from '../../redux/actions/userAction';
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
  const userMain = useSelector((state: AppState) => state.userReducer);
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    if (userMain.user?.user?.id || userMain.error?.error) {
      setIsLoading(false);
    }
  }, [userMain]);

  return (
    <KeyboardAvoidingView
      style={{flex: 1, flexGrow: 1, backgroundColor: CustomColors(theme).white}}
      behavior="padding">
      <View style={[commonStyles.allCenter]}>
        {shouldShowMenu && (
          <Drawer
            onBackdropPress={(): void => setShouldShowMenu(false)}
            shouldShow={true}
          />
        )}
        <Image
          resizeMode="contain"
          source={Images.logo || null}
          style={styles.imageStyle}
        />
        <AlertMessage
          shouldShow={shouldShowAlert}
          alertMessage={alertMessage}
          onPressOk={(): void => setShouldShowAlert(false)}
        />
        <View style={{width: '80%'}}>
          <CustomInputText
            value={userName}
            onChangeText={text => {
              setUserName(text);
            }}
            keyboardType="email-address"
            placeholder="email or phone number"
          />
          <CustomInputText
            value={password}
            onChangeText={text => {
              setPassword(text);
            }}
            secureTextEntry
            placeholder="password"
          />
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
            if (userName && password) {
              setIsLoading(true);
              dispatch(getUsersFetch({userName: userName, password: password}));
            } else {
              Alert.alert('Error', 'Enter valid username and password');
            }
            // dispatch(setCurrentCompanyIndex(1));
          }}
          style={[
            styles.buttonStyle,
            {
              backgroundColor: CustomColors(theme).primaryColor,
              shadowColor: CustomColors(theme).black,
            },
          ]}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text style={{color: CustomColors(theme).white}}>LOGIN</Text>
          )}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
