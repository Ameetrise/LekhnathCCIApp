/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList, Button, Animated} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from '../../container/Container';
import CustomText from '../../../components/views/CustomText';
import MemberCard from '../components/MemberCard';
import CustomColors from '../../../config/CustomColors';
import {useSelector} from 'react-redux';
import {AppState} from '../../../redux/store';
import {MembersListSuccess} from '../dataTypes.ts/MembersDataTypes';
import {Searchbar} from 'react-native-paper';
import {Dropdown} from 'react-native-element-dropdown';
import VectorIcon from '../../../components/VectorIcons';
export default function Members() {
  const theme = useSelector(
    (state: AppState) => state.appStateReducer.isDarkMode,
  );

  const data: MembersListSuccess[] = [
    {
      id: '1',
      cname: 'Ambirise IT Solution',
      phone: '9843615246',
      address: 'Pokhara-28,Budibazar',
      time: '07:00am-06:00pm',
      category: 'Software',
    },
    {
      id: '2',
      cname: 'Sirius Tech',
      phone: '9843615246',
      address: 'Kathmandu-28',
      time: '07:00am-06:00pm',
      category: 'Information Technology',
    },
    {
      id: '3',
      cname: 'Google LLC',
      phone: '9877888767',
      address: 'California,CA',
      time: '07:00am-06:00pm',
      category: 'Software',
    },
    {
      id: '4',
      cname: 'Tesla Motors',
      phone: '9843615246',
      address: 'Texas',
      time: '07:00am-06:00pm',
      category: 'Manufacture',
    },
    {
      id: '5',
      cname: 'Karmacharya Group',
      phone: '9843615246',
      address: 'Pokhara-23,Bijaypur',
      time: '07:00am-06:00pm',
      category: 'Manufacture',
    },
    {
      id: '6',
      cname: 'Ambirise IT Solution',
      phone: '9843615246',
      address: 'Pokhara-28,Budibazar',
      time: '07:00am-06:00pm',
      category: 'Software',
    },
    {
      id: '7',
      cname: 'Sirius Tech',
      phone: '9843615246',
      address: 'Kathmandu-28',
      time: '07:00am-06:00pm',
      category: 'Information Technology',
    },
    {
      id: '8',
      cname: 'Google LLC',
      phone: '9877888767',
      address: 'California,CA',
      time: '07:00am-06:00pm',
      category: 'Software',
    },
    {
      id: '9',
      cname: 'Sirius Tech',
      phone: '9843615246',
      address: 'Kathmandu-28',
      time: '07:00am-06:00pm',
      category: 'Information Technology',
    },
    {
      id: '10',
      cname: 'Google LLC',
      phone: '9877888767',
      address: 'California,CA',
      time: '07:00am-06:00pm',
      category: 'Software',
    },
  ];

  const ddData = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];
  const [height] = useState(new Animated.Value(0));
  const [expanded, setExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    Animated.timing(height, {
      toValue: !expanded ? 0.01 : 144,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [expanded, height]);

  return (
    <Container
      rightIcon={{
        onPress() {
          setExpanded(!expanded);
        },
        name: 'filter-list',
      }}
      headerTitle="Members"
      wideSymmetrical>
      <View
        style={{
          backgroundColor: CustomColors(theme).white,
        }}>
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
            placeholderTextColor={CustomColors(theme).whiteShade3}
            placeholder="Search"
            onChangeText={text => {
              setSearchValue(text);
            }}
            value={searchValue}
          />

          <Dropdown
            style={{
              marginVertical: 1,
              paddingTop: 4,
              paddingLeft: 8,
              backgroundColor: CustomColors(theme).white,
            }}
            data={ddData}
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
            placeholder={'Select by Category'}
            searchPlaceholder="Search..."
            // value={value}
            // onFocus={() => setIsFocus(true)}
            // onBlur={() => setIsFocus(false)}
            onChange={item => {
              // setValue(item.value);
              // setIsFocus(false);
            }}
          />

          <Dropdown
            style={{
              marginVertical: 1,
              paddingBottom: 4,
              paddingLeft: 8,
              backgroundColor: CustomColors(theme).white,
            }}
            data={ddData}
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
            placeholder={'Select by Location'}
            searchPlaceholder="Search..."
            // value={value}
            // onFocus={() => setIsFocus(true)}
            // onBlur={() => setIsFocus(false)}
            onChange={item => {
              // setValue(item.value);
              // setIsFocus(false);
            }}
          />
        </Animated.View>

        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          data={data}
          renderItem={({item}) => {
            return <MemberCard memberItem={item} />;
          }}
        />
      </View>
    </Container>
  );
}
