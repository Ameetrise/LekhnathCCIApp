/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useState} from 'react';
import CustomText from '../../../components/views/CustomText';
import {MembersPageScreenProp} from '../../ScreensProps';
import Container from '../../container/Container';
import ImageView from 'react-native-image-viewing';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomColors, {ColorsType} from '../../../config/CustomColors';
import {useSelector} from 'react-redux';
import {AppState} from '../../../redux/store';
import {s} from '../../../config/Dimens';
import Images from '../../../assets/Images';
import VectorIcon from '../../../components/VectorIcons';

const {width, height} = Dimensions.get('screen');

export default function MembersPage({
  navigation,
  route,
}: MembersPageScreenProp) {
  const {memberItem} = route.params;
  const [visible, setIsVisible] = useState(false);
  const theme = useSelector(
    (state: AppState) => state.appStateReducer.isDarkMode,
  );
  const colors = CustomColors(theme);
  type ImageGalleryImagesData = {uri: string};
  const convertToImagesViewData = (
    data: string[],
  ): ImageGalleryImagesData[] => {
    console.log('this', data);
    let newArray: ImageGalleryImagesData[] = [];
    for (let i = 0; i < data.length; i++) {
      let newObj: {uri: string} = {
        uri: `http://localhost:3000/${data[i]}`,
      };
      console.log(newArray);
      newArray.push(newObj);
    }
    return newArray;
  };

  return (
    <Container
      wideSymmetrical
      headerTitle={memberItem.cName}
      showBackButton
      backButtonPress={(): void => navigation.goBack()}>
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={{height: height / 3}}
            onPress={() => {
              setIsVisible(true);
            }}>
            <ImageBackground
              source={
                memberItem.imageGallery.length > 0
                  ? {
                      uri: `http://localhost:3000/${memberItem.imageGallery[0]}`,
                    }
                  : Images.logo
              }
              resizeMode="cover"
              blurRadius={248}
              style={{
                overflow: 'visible',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: '100%',
                  width: '70%',
                  overflow: 'hidden',
                }}
                resizeMode="cover"
                source={
                  memberItem.imageGallery.length > 0
                    ? {
                        uri: `http://localhost:3000/${memberItem.imageGallery[0]}`,
                      }
                    : Images.logo
                }
              />
            </ImageBackground>
          </TouchableOpacity>
          <View style={{paddingHorizontal: '4%', paddingBottom: s(84)}}>
            <View style={{paddingTop: 8, paddingBottom: 8}}>
              <DescView
                fontColor={colors.primaryColor}
                title={'Proprieter'}
                value={memberItem.owner.name}
              />
              <DescView
                fontColor={colors.primaryColor}
                title={'Category'}
                value={memberItem.category}
              />
              <DescView
                fontColor={colors.primaryColor}
                title={'Address'}
                value={memberItem.address}
              />
              <DescView
                fontColor={colors.primaryColor}
                title={'Time'}
                value={memberItem.time}
              />
              <DescView
                fontColor={colors.primaryColor}
                title={'Email'}
                value={memberItem.email}
              />
              <DescView
                fontColor={colors.primaryColor}
                title={'Phone'}
                value={memberItem.phone}
              />
              <DescView
                fontColor={colors.primaryColor}
                title={'Email'}
                value={memberItem.email}
              />
              <DescView
                fontColor={colors.primaryColor}
                title={'Facebook'}
                value={memberItem.facebook}
              />
            </View>
            <CustomText
              style={{fontSize: 16, paddingVertical: '2%'}}
              color={colors.primaryColorDark}
              font="Montserrat-SemiBold">
              About Us:
            </CustomText>
            <CustomText>{`${memberItem.description}`}</CustomText>
            {memberItem &&
              memberItem.imageGallery &&
              memberItem.imageGallery.length > 0 && (
                <ImageView
                  images={convertToImagesViewData(memberItem.imageGallery)}
                  visible={visible}
                  swipeToCloseEnabled
                  FooterComponent={imageIndex => (
                    <View
                      style={{
                        bottom: s(32),
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      {memberItem.imageGallery.map((teamItem, index) => {
                        return (
                          <View
                            style={{margin: 2, opacity: 0.5}}
                            key={teamItem.toString()}>
                            <View
                              style={{
                                backgroundColor: colors.white,
                                height: s(8),
                                width: s(8),
                                borderRadius: s(4),
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              <View
                                style={{
                                  backgroundColor:
                                    imageIndex.imageIndex === index
                                      ? colors.primaryColor
                                      : colors.black,
                                  height: s(6),
                                  width: s(6),
                                  borderRadius: s(3),
                                }}
                              />
                            </View>
                          </View>
                        );
                      })}
                    </View>
                  )}
                  onRequestClose={() => setIsVisible(false)}
                  imageIndex={0}
                />
              )}
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              // position: 'absolute',
              paddingVertical: '4%',
              width: '100%',
              bottom: s(24),
            }}>
            <ContactTile
              onPress={() => {
                navigation.navigate('Chat');
              }}
              colors={colors}
              title={'Chat'}
            />
            <ContactTile
              onPress={() => {
                console.log('clicked');
              }}
              colors={colors}
              title={'Facebook'}
            />
            <ContactTile
              onPress={() => {
                console.log('clicked');
              }}
              colors={colors}
              title={'Phone'}
            />
            <ContactTile
              onPress={() => {
                console.log('clicked');
              }}
              colors={colors}
              title={'Website'}
            />

            <ContactTile
              onPress={() => {
                console.log('clicked');
              }}
              colors={colors}
              title={'Email'}
            />
          </ScrollView>
        </ScrollView>
      </View>
    </Container>
  );
}
const ContactTile = ({
  title,
  colors,
  onPress,
}: {
  title: string;
  colors: ColorsType;
  onPress: () => void;
}): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={{}}>
      <View
        style={{
          padding: s(6),
          marginHorizontal: 4,
          borderRadius: s(16),
          backgroundColor: colors.white,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderColor: colors.black,
          shadowColor: colors.whiteShade3,
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 2,
          height: 36,
          shadowOffset: {height: 1, width: 1},
        }}>
        <VectorIcon
          iconFamily={title === 'Gmail' ? 'AntDesign' : 'MaterialIcons'}
          iconName={
            title === 'Chat'
              ? 'chat'
              : title === 'Facebook'
              ? 'facebook'
              : title === 'Phone'
              ? 'phone-in-talk'
              : title === 'Website'
              ? 'web'
              : 'email'
          }
          iconSize={title === 'Facebook' ? 24 : 'Chat' ? 20 : 22}
          iconColor={
            title === 'Facebook'
              ? colors.facebookColor
              : title === 'Phone'
              ? colors.green
              : title === 'Website'
              ? colors.primaryColor
              : colors.purple
          }
        />
        <CustomText color={colors.black} style={{fontSize: 12, marginLeft: 4}}>
          {title}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

const DescView = ({
  title,
  value,
  fontColor,
}: {
  title: string;
  value: string;
  fontColor: string;
}): JSX.Element => {
  return (
    <View style={{paddingVertical: 2, flexDirection: 'row'}}>
      <CustomText
        color={fontColor}
        font="Montserrat-SemiBold"
        style={{flex: 1}}>{`${title} `}</CustomText>
      <CustomText font="Montserrat-SemiBold" style={{flex: 2.3}}>{`${
        value ? value : 'Not Available'
      }`}</CustomText>
    </View>
  );
};
