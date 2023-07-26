/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {View, FlatList, Animated, ActivityIndicator} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Container from '../../container/Container';
import MemberCard from '../components/MemberCard';
import CustomColors from '../../../config/CustomColors';
import {useSelector} from 'react-redux';
import {AppState} from '../../../redux/store';
import FilterView from '../components/FilterView';
import {apiHelper} from '../components/getMembersData';
import {MembersItemList} from '../dataTypes.ts/MembersDataTypes';
import CustomText from '../../../components/views/CustomText';
import _debounce from 'lodash/debounce';
import {MembersScreenProp} from '../../ScreensProps';
import {s} from '../../../config/Dimens';
import {baseUrl} from '../../../../env';
export default function Members({navigation}: MembersScreenProp): JSX.Element {
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
    setIsLoading(true);
    const membersList: MembersItemList = await apiHelper.getApi(
      `${baseUrl}api/company/`,
    );
    setIsLoading(false);
    setData(membersList);
  };
  useEffect(() => {
    getMembers();
  }, []);

  const searchFilter = async (query: string): Promise<void> => {
    setIsLoading(true);
    const filteredList: MembersItemList = await apiHelper.getApi(
      `${baseUrl}api/company/`,
    );
    setData(filteredList);
    setIsLoading(false);
  };

  const membersListFlatlistRef = useRef<FlatList>();
  const debounceFn = useCallback(_debounce(searchFilter, 600), []);

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
          paddingBottom: s(24),
        }}>
        <FilterView
          onClearSearchPress={() => {}}
          onSearchQuery={(query: string) => {
            if (query || query.length > 1) {
              debounceFn(query);
            } else {
              getMembers();
            }
          }}
          expanded={expanded}
        />
        {data?.companies && !data?.companies.length && (
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
            onRefresh={() => {
              setExpanded(true);
            }}
            refreshing={false}
            ref={() => membersListFlatlistRef}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            data={data.companies}
            renderItem={({item}) => {
              return <MemberCard navigation={navigation} memberItem={item} />;
            }}
            onEndReachedThreshold={0.1}
            onScrollBeginDrag={() => (expanded ? setExpanded(false) : null)}
            onEndReached={({}) => {}}
          />
        )}
      </View>
    </Container>
  );
}
//https://lekhnathcci.org.np/api/members_search/ambir
