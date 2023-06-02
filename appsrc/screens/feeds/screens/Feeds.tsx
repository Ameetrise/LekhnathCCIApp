/* eslint-disable react-native/no-inline-styles */
import {View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import FeedCard from '../components/FeedCard';
import {FeedsScreenProp} from '../../ScreensProps';
import Container from '../../container/Container';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../../redux/store';
import {getFeedsFetch} from '../redux/action/feedsAction';
import NewsItemDataModal from '../dataType/NewsItemDataModal';
import {ActivityIndicator} from 'react-native-paper';
import CustomColors from '../../../config/CustomColors';

export default function Feeds({navigation}: FeedsScreenProp): JSX.Element {
  const dispatch = useDispatch();
  const feeds: NewsItemDataModal[] = useSelector(
    (state: AppState) => state.feedsReducer,
  );
  const theme = useSelector(
    (state: AppState) => state.appStateReducer.isDarkMode,
  );
  const user = useSelector((state: AppState) => state.userReducer);
  useEffect(() => {
    dispatch(getFeedsFetch());
    console.log(user);
  }, [dispatch]);

  return (
    <Container headerTitle="Feeds" fullScreen>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: CustomColors(theme).backgroundColor,
        }}>
        {feeds.length < 1 && (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator />
          </View>
        )}

        <FlatList
          data={feeds}
          renderItem={item => (
            <FeedCard navigation={navigation} item={item.item} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </Container>
  );
}
