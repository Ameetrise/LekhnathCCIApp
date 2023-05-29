import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUsersFetch} from './appsrc/redux/actions/userAction';
import {AppState} from './appsrc/redux/store';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const user = useSelector((state: AppState) => state.userReducer);
  console.log('from home: ', user);
  return (
    <SafeAreaView>
      <Icon name={'home'} size={48} color={'red'} />
      <Button
        title="Dispatch"
        onPress={() => {
          dispatch(getUsersFetch());
        }}
      />
      {<Text>{JSON.stringify(user)}</Text>}
    </SafeAreaView>
  );
};

export default App;
