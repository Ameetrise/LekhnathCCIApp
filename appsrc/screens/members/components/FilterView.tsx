/* eslint-disable react-native/no-inline-styles */
import {Animated} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import CustomColors from '../../../config/CustomColors';
import {AppState} from '../../../redux/store';
import {useSelector} from 'react-redux';
import {Searchbar} from 'react-native-paper';
import {Dropdown} from 'react-native-element-dropdown';
import _debounce from 'lodash/debounce';

export default function FilterView({
  expanded,
  onSearchQuery,
  onClearSearchPress,
  debounce,
}: {
  expanded: boolean;
  onSearchQuery: (query: string) => void;
  onClearSearchPress: () => void;
  debounce?: boolean;
}) {
  const theme = useSelector(
    (state: AppState) => state.appStateReducer.isDarkMode,
  );
  const locationList = [
    {label: 'Pokhara-28', value: 'Pokhara-28'},
    {label: 'Pokhara-29', value: 'Pokhara-28'},
    {label: 'Pokhara-30', value: 'Pokhara-28'},
    {label: 'Pokhara-31', value: 'Pokhara-28'},
  ];

  const categoryList = [
    {label: 'Hardware', value: 'hardware'},
    {label: 'Information Technology', value: 'information%20Technology'},
    {label: 'Medical', value: 'medical'},
  ];

  const [height] = useState(new Animated.Value(0));
  const [searchValue, setSearchValue] = useState('');
  const [locationValue, setLocationValue] = useState<{
    label: string;
    value: string;
  } | null>();
  const [categoryValue, setCategoryValue] = useState<{
    label: string;
    value: string;
  } | null>();

  useEffect(() => {
    Animated.timing(height, {
      toValue: !expanded ? 0.01 : 144,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [expanded, height]);

  return (
    <Animated.View
      style={{
        height,
        backgroundColor: CustomColors(theme).offWhite,
        borderRadius: 8,
        paddingHorizontal: 4,
        top: expanded ? 0 : 1000,
      }}>
      <Searchbar
        inputStyle={{
          color: CustomColors(theme).black,
          fontFamily: 'Montserrat-Regular',
        }}
        selectionColor={CustomColors(theme).primaryColor}
        iconColor={CustomColors(theme).primaryColor}
        style={{
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
          borderRadius: 0,
          backgroundColor: CustomColors(theme).white,
          marginTop: 4,
        }}
        onClearIconPress={e => {
          e.preventDefault();
          setSearchValue('');
          onClearSearchPress();
        }}
        placeholderTextColor={CustomColors(theme).whiteShade3}
        placeholder="Search"
        onChangeText={text => {
          setSearchValue(text);
          onSearchQuery(text);
          setLocationValue(null);
          setCategoryValue(null);
        }}
        value={
          searchValue || locationValue?.label || categoryValue?.label || ''
        }
      />

      <Dropdown
        value={categoryValue}
        style={{
          marginVertical: 1,
          paddingTop: 4,
          paddingLeft: 8,
          backgroundColor: CustomColors(theme).white,
        }}
        data={categoryList}
        search
        containerStyle={{
          borderWidth: 0,
          backgroundColor: CustomColors(theme).white,
        }}
        maxHeight={300}
        labelField="label"
        valueField="value"
        activeColor={CustomColors(theme).backgroundColor}
        inputSearchStyle={{
          color: CustomColors(theme).black,
          fontFamily: 'Montserrat-Regular',
        }}
        itemTextStyle={{
          fontFamily: 'Montserrat-Regular',
          color: CustomColors(theme).black,
        }}
        placeholderStyle={{
          fontSize: 14,
          fontFamily: 'Montserrat-Regular',
          color: CustomColors(theme).black,
        }}
        selectedTextStyle={{
          fontFamily: 'Montserrat-Regular',
          color: CustomColors(theme).black,
        }}
        itemContainerStyle={{borderWidth: 0}}
        placeholder={'Select by Category'}
        searchPlaceholder="Search..."
        onChange={item => {
          onSearchQuery(item.value);
          setCategoryValue(item);
          setLocationValue(null);
        }}
      />

      <Dropdown
        value={locationValue}
        style={{
          marginVertical: 1,
          paddingBottom: 4,
          paddingLeft: 8,
          backgroundColor: CustomColors(theme).white,
        }}
        data={locationList}
        search
        containerStyle={{
          borderWidth: 0,
          backgroundColor: CustomColors(theme).white,
        }}
        maxHeight={300}
        labelField="label"
        valueField="value"
        inputSearchStyle={{
          color: CustomColors(theme).black,
          fontFamily: 'Montserrat-Regular',
        }}
        itemTextStyle={{
          fontFamily: 'Montserrat-Regular',
          color: CustomColors(theme).black,
        }}
        placeholderStyle={{
          fontSize: 14,
          fontFamily: 'Montserrat-Regular',
          color: CustomColors(theme).black,
        }}
        itemContainerStyle={{borderWidth: 0}}
        selectedTextStyle={{
          fontFamily: 'Montserrat-Regular',
          color: CustomColors(theme).black,
        }}
        activeColor={CustomColors(theme).backgroundColor}
        placeholder={'Select by Location'}
        searchPlaceholder="Search..."
        onChange={item => {
          onSearchQuery(item.value);
          setLocationValue(item);
          setCategoryValue(null);
        }}
      />
    </Animated.View>
  );
}
