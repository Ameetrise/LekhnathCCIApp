/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import Container from '../../container/Container';
import CustomText from '../../../components/views/CustomText';
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {s} from '../../../config/Dimens';
import LocalProducts from './LocalProducts';
import LocalSites from './LocalSites';
import * as Animatable from 'react-native-animatable';
import {ExploreScreenProp} from '../../ScreensProps';

const {height, width} = Dimensions.get('screen');
export default function Explore({navigation, route}: ExploreScreenProp) {
  const [currentPage, setCurrentPage] = useState(0);
  const [runMore, setRunMore] = useState(true);
  return (
    <Container headerTitle={'Explore'} wideSymmetrical>
      <View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'pink',
          }}>
          <TouchableOpacity
            onPress={() => {
              setCurrentPage(0);
            }}
            style={styles.pageIndicatorContainer}>
            <CustomText>Local Products</CustomText>
            {currentPage === 0 && (
              <Animatable.View
                duration={500}
                animation={'fadeIn'}
                style={styles.pageIndicatorView}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCurrentPage(1)}
            style={styles.pageIndicatorContainer}>
            <CustomText>Local Sites</CustomText>
            {currentPage === 1 && (
              <Animatable.View
                delay={200}
                duration={500}
                animation={'fadeIn'}
                style={styles.pageIndicatorView}
              />
            )}
          </TouchableOpacity>
        </View>
        <ScrollView
          onScroll={e => {
            if (e.nativeEvent.contentOffset.x === 0) {
              setRunMore(true);
              if (runMore) {
                setCurrentPage(0);
              }
            } else {
              if (runMore) {
                setCurrentPage(1);
                setRunMore(false);
              }
            }
          }}
          onScrollBeginDrag={() => {
            setCurrentPage(1);
          }}
          bounces
          style={{top: s(24), height: height * 0.8 - s(24), paddingTop: s(8)}}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          contentOffset={{x: width * 0.85, y: 0}}
          horizontal>
          <View
            style={{
              width: width - width * 0.14,
            }}>
            <LocalProducts navigation={navigation} route={route} />
          </View>
          <View
            style={{
              width: width - width * 0.14,
            }}>
            <LocalSites />
          </View>
        </ScrollView>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  pageIndicatorView: {
    height: 4,
    width: '100%',
    backgroundColor: 'green',
    bottom: 0,
    position: 'absolute',
  },
  pageIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: s(24),
    marginBottom: 14,
  },
});
