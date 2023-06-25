/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TextInput,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import Container from '../../container/Container';
import {ChatScreenNavigationProp, ChatScreenProp} from '../../ScreensProps';
import CustomText from '../../../components/views/CustomText';
import CustomColors from '../../../config/CustomColors';
import {useSelector} from 'react-redux';
import {AppState} from '../../../redux/store';
import {s} from '../../../config/Dimens';
import VectorIcon from '../../../components/VectorIcons';

export default function Chat({navigation, route}: ChatScreenProp) {
  const dummyChatData = [
    {
      senderId: 's1',
      message: 'Hello Sir',
      createdAt: '2023-06-25',
      chatId: 'amam1',
      isActive: true,
    },
    {
      senderId: 'r2',
      message: 'Hajur bhannus',
      createdAt: '2023-06-25',
      chatId: 'amam1',
      isActive: true,
    },
    {
      senderId: 's3',
      message:
        'Office open cha ra hajur ko, taap le kiin maal a hoi bhani bolako maile',
      createdAt: '2023-06-25',
      chatId: 'amam1',
      isActive: true,
    },
    {
      senderId: 'r4',
      message: 'Aile open nai cha',
      createdAt: '2023-06-25',
      chatId: 'amam1',
      isActive: true,
    },
    {
      senderId: 'r5',
      message: '5 baje samma open huncha aja',
      createdAt: '2023-06-25',
      chatId: 'amam1',
      isActive: true,
    },
    {
      senderId: 's6',
      message: 'Aile bhetnu milcha?',
      createdAt: '2023-06-25',
      chatId: 'amam1',
      isActive: true,
    },
    {
      senderId: 's7',
      message: 'ma 4:30 samma aaipugchu',
      createdAt: '2023-06-25',
      chatId: 'amam1',
      isActive: true,
    },
    {
      senderId: 'r8',
      message: 'Huncha aaunus na',
      createdAt: '2023-06-25',
      chatId: 'amam1',
      isActive: true,
    },
    {
      senderId: 's9',
      message: 'Huss, ma niskeko sir',
      createdAt: '2023-06-25',
      chatId: 'amam1',
      isActive: true,
    },
    {
      senderId: 'r10',
      message: 'Huncha see you',
      createdAt: '2023-06-25',
      chatId: 'amam1',
      isActive: true,
    },
  ];

  const [message, setMessage] = useState<string>();

  const theme = useSelector(
    (state: AppState) => state.appStateReducer.isDarkMode,
  );
  return (
    <Container
      backButtonPress={() => {
        navigation.goBack();
      }}
      showBackButton
      headerTitle="Chat"
      wideSymmetrical>
      <View
        style={{
          marginBottom: 24,
          height: '93%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <FlatList
          style={{width: '100%'}}
          data={dummyChatData}
          renderItem={({item}) => (
            <View>
              <CustomText
                style={{
                  fontSize: 8,
                  marginHorizontal: 4,
                  alignSelf: item.senderId.startsWith('r')
                    ? 'flex-start'
                    : 'flex-end',
                }}>
                {item.createdAt}
              </CustomText>
              <View
                style={{
                  backgroundColor: CustomColors(theme).whiteShade2,
                  margin: 4,
                  padding: 4,
                  borderRadius: 8,
                  alignSelf: item.senderId.startsWith('r')
                    ? 'flex-start'
                    : 'flex-end',
                }}>
                <CustomText>{item.message}</CustomText>
              </View>
            </View>
          )}
        />
        <View
          style={{
            backgroundColor: CustomColors(theme).white,
            borderRadius: 12,
            flexDirection: 'row',
            height: s(32),
            justifyContent: 'space-between',
          }}>
          <TextInput
            enablesReturnKeyAutomatically
            style={{
              fontFamily: 'Montserrat-Regular',
              paddingHorizontal: '2%',
              width: '85%',
              borderRadius: 12,
              backgroundColor: CustomColors(theme).whiteShade1,
              shadowColor: CustomColors(theme).whiteShade2,
              shadowOffset: {height: 1, width: 1},
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 2,
            }}
            value={message}
            onChangeText={text => {
              setMessage(text);
            }}
            placeholderTextColor={CustomColors(theme).whiteShade3}
            placeholder="Type your message..."
          />
          <View
            style={{
              width: '7%',
              paddingLeft: 4,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <VectorIcon
              iconFamily={'FontAwesome'}
              iconName={'send'}
              iconSize={24}
              iconColor={CustomColors(theme).primaryColor}
            />
          </View>
        </View>
      </View>
    </Container>
  );
}
