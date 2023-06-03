/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomText from '../../../components/views/CustomText';
import Images from '../../../assets/Images';
import {s} from '../../../config/Dimens';
import CustomColors from '../../../config/CustomColors';
import {useSelector} from 'react-redux';
import {AppState} from '../../../redux/store';
import {MembersListSuccess} from '../dataTypes.ts/MembersDataTypes';

export default function MemberCard({
  memberItem,
}: {
  memberItem: MembersListSuccess;
}) {
  const theme = useSelector(
    (state: AppState) => state.appStateReducer.isDarkMode,
  );
  return (
    <View>
      <TouchableOpacity
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
            source={Images.logo}
          />
        </View>
        <View style={{flex: 3, paddingHorizontal: '2%'}}>
          <CustomText font="Montserrat-SemiBold">{memberItem.cname}</CustomText>
          <View style={{paddingVertical: '1%'}}>
            <CustomText style={{fontSize: 12}}>
              Phone: {memberItem.phone}
            </CustomText>
            <CustomText style={{fontSize: 12}}>
              Address: {memberItem.address}
            </CustomText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <CustomText style={{fontSize: 12}}>
              Time:{memberItem.time}
            </CustomText>
            <CustomText style={{fontSize: 12}}>
              Category: {memberItem.category}
            </CustomText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
