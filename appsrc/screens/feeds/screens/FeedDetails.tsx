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
          backgroundColor: CustomColors(theme).backgroundColor,
        }}>
        <Image
          style={{height: width}}
          resizeMode="cover"
          source={{uri: item.imageUrl}}
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
              iconColor={CustomColors(theme).primaryColorDark}
            />
            <CustomText
              style={{
                fontSize: 12,
                paddingLeft: '2%',
                color: CustomColors(theme).primaryColorDark,
              }}>
              {item.dateCreated}
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
              iconColor={CustomColors(theme).primaryColorDark}
            />
            <CustomText
              style={{
                fontSize: 12,
                paddingLeft: '2%',
                color: CustomColors(theme).primaryColorDark,
              }}>
              {item.creator}
            </CustomText>
          </View>
        </View>
        <CustomText>{item.description}</CustomText>
      </ScrollView>
    </Container>
  );
}
