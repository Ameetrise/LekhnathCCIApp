import {View, Text, Button, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {io} from 'socket.io-client';

export default function TestScreen() {
  const URL = 'http://192.168.1.131:3000';
  const socket = io(URL);
  const [isConnected, setIsConnected] = useState(socket.connected);
  type msd = {name: string; message: string};
  const [messages, setMessages] = useState<msd[]>([]);
  const [myMsg, setMyMsg] = useState<msd>();

  useEffect(() => {
    getMessages();
    read();
    function onConnect() {
      console.log('connected');
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  const read = (): void => {
    socket.on('message', args => {
      console.log(args);
      setMessages(oldArray => [...oldArray, args]);
    });
  };

  const getMessages = (): void => {
    fetch(`${URL}/messages`, {}).then(response => {
      response.json().then(data => {
        let array: msd[] = [];
        for (let i = 0; i < data.length; i++) {
          array.push({name: data[i].name, message: data[i].message});
        }
        setMessages(array);
      });
    });
  };

  const post = async (): Promise<void> => {
    let data = {
      name: new Date().getTime().toString(),
      message: myMsg?.message || 'default',
    };
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    };
    console.log(data);
    try {
      await fetch(`${URL}/messages`, requestOptions).then(response => {
        console.log(response.status);
        setMyMsg({});
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Text>
        {messages.map(msg => {
          return msg.message + '\n';
        })}
      </Text>

      <TextInput
        value={myMsg?.message}
        placeholder="type here"
        onChangeText={text => {
          setMyMsg({name: 'amit', message: text});
        }}
      />
      <Button
        title="Post"
        onPress={() => {
          post();
        }}
      />
    </View>
  );
}
