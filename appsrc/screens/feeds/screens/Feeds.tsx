/* eslint-disable react-native/no-inline-styles */
import {View, FlatList, Platform} from 'react-native';
import React, {useEffect} from 'react';
import FeedCard from '../components/FeedCard';
import {FeedsScreenProp} from '../../ScreensProps';
import Container from '../../container/Container';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../../redux/store';
import {getFeedsFetch} from '../redux/action/feedsAction';
import {NewItemList} from '../dataType/NewsItemDataModal';
import {ActivityIndicator} from 'react-native-paper';
import CustomColors from '../../../config/CustomColors';
import Dimens, {ms, s} from '../../../config/Dimens';
import CustomText from '../../../components/views/CustomText';

export default function Feeds({navigation}: FeedsScreenProp): JSX.Element {
  const dispatch = useDispatch();
  const feeds: NewItemList = useSelector(
    (state: AppState) => state.feedsReducer,
  );
  const theme = useSelector(
    (state: AppState) => state.appStateReducer.isDarkMode,
  );
  const user = useSelector((state: AppState) => state.userReducer);
  useEffect(() => {
    dispatch(getFeedsFetch());
  }, [dispatch]);
  console.log(
    Platform.OS === 'android' ? 'android: ' + s(120) : 'ios: ' + s(120),
  );
  return (
    <Container headerTitle="Feeds" fullScreen>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: CustomColors(theme).white,
        }}>
        {!feeds.feeds && (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator />
          </View>
        )}
        {feeds.feeds.length < 1 && (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: '12%',
            }}>
            <CustomText style={{textAlign: 'center'}}>
              News feeds not available at the moment, Please try again later
            </CustomText>
          </View>
        )}

        <FlatList
          data={feeds.feeds}
          renderItem={item => (
            <FeedCard navigation={navigation} item={item.item} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </Container>
  );
}
