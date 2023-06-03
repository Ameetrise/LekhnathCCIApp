/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList, Animated, ActivityIndicator} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Container from '../../container/Container';
import MemberCard from '../components/MemberCard';
import CustomColors from '../../../config/CustomColors';
import {useSelector} from 'react-redux';
import {AppState} from '../../../redux/store';
import FilterView from '../components/FilterView';
import {apiHelper, useFetch} from '../components/getMembersData';
import {MembersItemList} from '../dataTypes.ts/MembersDataTypes';
import CustomText from '../../../components/views/CustomText';
import _debounce from 'lodash/debounce';
export default function Members() {
  const theme = useSelector(
    (state: AppState) => state.appStateReducer.isDarkMode,
  );

  const [height] = useState(new Animated.Value(0));
  const [expanded, setExpanded] = useState(false);
  const [data, setData] = useState<MembersItemList>();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    Animated.timing(height, {
      toValue: !expanded ? 0.01 : 144,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [expanded, height]);
  const getMembers = async (): Promise<void> => {
    console.log('getting');
    setIsLoading(true);
    const membersList: MembersItemList = await apiHelper.getApi(
      `https://lekhnathcci.org.np/api/members?page=${currentPage.toString()}`,
    );
    setIsLoading(false);
    setData(membersList);
    // if (data) {
    //   const newData: MembersItemList = {
    //     data: data.data.concat(membersList.data),
    //     meta: data.meta,
    //   };
    //   setData(newData);
    // } else {
    //   setData(membersList);
    // }
  };
  useEffect(() => {
    getMembers();
  }, []);

  const searchFilter = async (query: string): Promise<void> => {
    console.log('bounced');
    setIsLoading(true);
    const filteredList = await apiHelper.getApi(
      `https://lekhnathcci.org.np/api/members_search/${query}`,
    );
    setData(filteredList);
    setIsLoading(false);
  };

  const requestNextPage = async (): Promise<void> => {
    if (isLoading) {
      return;
    }
    if (data) {
      if (currentPage < data?.meta.total) {
        setCurrentPage(currentPage + 1);
        getMembers();
      } else {
        console.log('End of articles');
      }
    } else {
      console.log('No data');
    }
  };

  const membersListFlatlistRef = useRef<FlatList>();
  const debounceFn = useCallback(_debounce(searchFilter, 1000), []);

  return (
    <Container
      rightIcon={{
        onPress() {
          setExpanded(!expanded);
        },
        name: 'search',
      }}
      headerTitle="Members"
      wideSymmetrical>
      <View
        style={{
          backgroundColor: CustomColors(theme).white,
        }}>
        <FilterView
          onClearSearchPress={() => {}}
          onSearchQuery={(query: string) => {
            if (query) {
              debounceFn(query);
            } else {
              getMembers();
            }
          }}
          expanded={expanded}
        />
        {data?.data && !data?.data.length && (
          <View
            style={{
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CustomText>No Data found for your search</CustomText>
          </View>
        )}
        {isLoading && <ActivityIndicator />}
        {data && (
          <FlatList
            ref={() => membersListFlatlistRef}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            data={data.data}
            renderItem={({item}) => {
              return <MemberCard memberItem={item} />;
            }}
            onEndReachedThreshold={0.1}
            onEndReached={({distanceFromEnd}) => {}}
          />
        )}
      </View>
    </Container>
  );
}
//https://lekhnathcci.org.np/api/members_search/ambir
