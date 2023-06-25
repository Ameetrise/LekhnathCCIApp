/* eslint-disable react-native/no-inline-styles */
import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomText from '../../../components/views/CustomText';
import Images from '../../../assets/Images';
import {s} from '../../../config/Dimens';
import CustomColors from '../../../config/CustomColors';
import {useSelector} from 'react-redux';
import {AppState} from '../../../redux/store';
import {
  MembersItemSuccess,
  MembersItemSuccessItem,
} from '../dataTypes.ts/MembersDataTypes';
import {MembersScreenNavigationProp} from '../../ScreensProps';

export default function MemberCard({
  memberItem,
  navigation,
}: {
  memberItem: MembersItemSuccessItem;
  navigation?: MembersScreenNavigationProp;
}) {
  const theme = useSelector(
    (state: AppState) => state.appStateReducer.isDarkMode,
  );

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation &&
            navigation.navigate('MembersPage', {memberItem: memberItem});
        }}
        style={{
          flexDirection: 'row',
          marginBottom: 1,
          paddingVertical: '2%',
          backgroundColor: CustomColors(theme).white,
        }}>
        <View style={{flex: 1}}>
          <Image
            resizeMode="contain"
            style={{width: '100%', height: s(60)}}
            source={
              memberItem.cLogo
                ? {
                    uri: `http:localhost:3000/${memberItem.cLogo}`,
                  }
                : Images.logo
            }
          />
        </View>
        <View style={{flex: 3, paddingHorizontal: '2%'}}>
          <CustomText font="Montserrat-SemiBold">{memberItem.cName}</CustomText>
          <View style={{paddingVertical: '1%'}}>
            <CustomText style={{fontSize: 12}}>
              {`Prop. : ${memberItem.owner.name}`}
            </CustomText>
            <CustomText style={{fontSize: 12}}>
              {`Address: ${memberItem.address}`}
            </CustomText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <CustomText style={{fontSize: 12}}>
              {`Time:${memberItem.time}`}
            </CustomText>
            <CustomText style={{fontSize: 12}}>
              {`No: ${memberItem.phone}`}
            </CustomText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
