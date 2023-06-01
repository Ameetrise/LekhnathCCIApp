/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import Container from '../../container/Container';
import {FeedDetailsScreenProp} from '../../ScreensProps';
import CustomText from '../../../components/views/CustomText';
import VectorIcon from '../../../components/VectorIcons';
import {CustomColors} from '../../../config/CustomColors';
const {width, height} = Dimensions.get('screen');
export default function FeedDetails({
  navigation,
  route,
}: FeedDetailsScreenProp): JSX.Element {
  const item = route.params.feedItem;
  return (
    <Container
      showBackButton
      backButtonPress={(): void => navigation.goBack()}
      headerTitle={item.title}
      wideSymmetrical>
      <ScrollView style={{paddingTop: '5%'}}>
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
              iconColor={CustomColors.primaryColorDark}
            />
            <CustomText
              style={{
                fontSize: 14,
                paddingLeft: '2%',
                color: CustomColors.primaryColorDark,
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
              iconColor={CustomColors.primaryColorDark}
            />
            <CustomText
              style={{
                fontSize: 14,
                paddingLeft: '2%',
                color: CustomColors.primaryColorDark,
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
