import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Container from '../container/Container';

export default function Feeds() {
  useEffect(() => {
    console.log('Feeds');
  }, []);
  return (
    <Container headerTitle="Feeds" wideSymmetrical>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Text>Feeds</Text>
      </View>
    </Container>
  );
}
