import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import Container from '../container/Container';
import {FeedsScreenProp} from '../ScreensProps';

export default function Feeds({
  navigation,
  route,
}: FeedsScreenProp): JSX.Element {
  useEffect(() => {
    console.log('Feeds');
  }, []);
  return (
    <Container headerTitle="Feeds" wideSymmetrical>
      <View style={{flex: 1}}>
        <Text>Feeds</Text>
        <Button
          title="Details"
          onPress={() => {
            navigation.navigate('FeedDetails');
          }}
        />
      </View>
    </Container>
  );
}
