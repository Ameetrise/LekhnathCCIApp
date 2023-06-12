/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Container from '../../container/Container';
import {ExploreScreenProp} from '../../ScreensProps';
import CustomText from '../../../components/views/CustomText';
import CustomColors from '../../../config/CustomColors';
import {useSelector} from 'react-redux';
import {AppState} from '../../../redux/store';
import Images from '../../../assets/Images';
import {s} from '../../../config/Dimens';
const {width, height} = Dimensions.get('screen');
export default function LocalProducts({navigation}: ExploreScreenProp) {
  const theme = useSelector(
    (state: AppState) => state.appStateReducer.isDarkMode,
  );
  const colors = CustomColors(theme);
  return (
    <Container fullScreen headerShown={false}>
      <View>
        <FlatList
          data={[1, 2, 3, 5]}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('LocalProductDetail');
              }}
              style={{
                borderRadius: 14,
                flex: 1,
                width: '50%',
                margin: 4,
                backgroundColor: colors.white,
                elevation: 2,
                borderTopRightRadius: s(32),
                shadowOffset: {height: 4, width: 2},
                shadowColor: colors.whiteShade3,
                shadowOpacity: 0.6,
                shadowRadius: 2,
              }}>
              <Image
                source={Images.amit}
                resizeMode="cover"
                style={{
                  borderRadius: s(6),
                  borderTopRightRadius: s(32),
                  borderBottomLeftRadius: s(32),
                  height: width * 0.4,
                  width: '100%',
                  backgroundColor: colors.white,
                  overflow: 'hidden',
                }}
              />
              <View style={{padding: '2%'}}>
                <CustomText>{'Local Fish'}</CustomText>
                <CustomText>{'Ask for price'}</CustomText>
              </View>
            </TouchableOpacity>
          )}
          numColumns={2}
        />
      </View>
    </Container>
  );
}
