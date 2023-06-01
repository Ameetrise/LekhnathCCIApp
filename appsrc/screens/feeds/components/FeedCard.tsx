/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomText from '../../../components/views/CustomText';
import {Image} from 'react-native-animatable';
import Dimens, {s} from '../../../config/Dimens';
import {CustomColors} from '../../../config/CustomColors';
import VectorIcon from '../../../components/VectorIcons';
import NewsItemDataModal from '../dataType/NewsItemDataModal';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../appsrc/screens/ScreensProps';

export default function FeedCard({
  item,
  navigation,
}: {
  item: NewsItemDataModal;
  navigation: StackNavigationProp<RootStackParamList>;
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('FeedDetails', {feedItem: item});
      }}>
      <View style={styles.miniContainer}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            source={{uri: item.imageUrl}}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.titleContainer}>
          <CustomText font="Montserrat-SemiBold" style={{fontSize: 14}}>
            {item.title.slice(0, 40)}
          </CustomText>
          <CustomText style={{fontSize: 12}}>
            {item.description.slice(0, 100)}
          </CustomText>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: '1%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <VectorIcon
                iconFamily={'FontAwesome'}
                iconName={'newspaper-o'}
                iconSize={12}
                iconColor={CustomColors.primaryColorDark}
              />
              <CustomText
                style={{
                  fontSize: 10,
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
                iconSize={12}
                iconColor={CustomColors.primaryColorDark}
              />
              <CustomText
                style={{
                  fontSize: 10,
                  paddingLeft: '2%',
                  color: CustomColors.primaryColorDark,
                }}>
                {item.creator}
              </CustomText>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    padding: '2%',
    margin: 2,
  },
  titleContainer: {
    flex: 3,
    padding: '2%',
    margin: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  imageStyle: {
    width: '100%',
    maxHeight: s(96),
    height: s(64),
  },
  miniContainer: {
    flexDirection: 'row',
    marginVertical: 2,
    backgroundColor: CustomColors.white,
    paddingHorizontal: 12,
    shadowColor: CustomColors.whiteShade3,
    shadowOpacity: 0.4,
    shadowRadius: 1,
    shadowOffset: {height: 2, width: 1},
    elevation: 2,
  },
});
