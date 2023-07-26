/* eslint-disable react-native/no-inline-styles */
import {View, Image, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import Container from '../../container/Container';
import {FeedDetailsScreenProp} from '../../ScreensProps';
import CustomText from '../../../components/views/CustomText';
import VectorIcon from '../../../components/VectorIcons';
import CustomColors from '../../../config/CustomColors';
import {useSelector} from 'react-redux';
import {AppState} from '../../../redux/store';
import {baseUrl} from '../../../../env';
const {width} = Dimensions.get('screen');
export default function FeedDetails({
  navigation,
  route,
}: FeedDetailsScreenProp): JSX.Element {
  const item = route.params.feedItem;
  const theme = useSelector(
    (state: AppState) => state.appStateReducer.isDarkMode,
  );
  return (
    <Container
      showBackButton
      backButtonPress={(): void => navigation.goBack()}
      headerTitle={item.title}
      wideSymmetrical>
      <ScrollView
        style={{
          paddingTop: '5%',
          backgroundColor: CustomColors(theme).white,
        }}>
        <Image
          style={{height: width * 0.8}}
          resizeMode="cover"
          source={{
            uri: `${baseUrl}${item.newsImage}`,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '2%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <VectorIcon
              iconFamily={'FontAwesome'}
              iconName={'newspaper-o'}
              iconSize={16}
              iconColor={CustomColors(theme).primaryColor}
            />
            <CustomText
              style={{
                fontSize: 12,
                paddingLeft: '2%',
                color: CustomColors(theme).primaryColorDark,
              }}>
              12 July
            </CustomText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <VectorIcon
              iconFamily={'AntDesign'}
              iconName={'calendar'}
              iconSize={16}
              iconColor={CustomColors(theme).primaryColor}
            />
            <CustomText
              style={{
                fontSize: 12,
                paddingLeft: '2%',
                color: CustomColors(theme).primaryColorDark,
              }}>
              Admin
            </CustomText>
          </View>
        </View>
        <CustomText style={{paddingHorizontal: '2%'}}>
          {item.description}
        </CustomText>
      </ScrollView>
    </Container>
  );
}
