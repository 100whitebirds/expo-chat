import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, TextInput } from 'react-native';
import uuid from 'react-native-uuid';
import { TouchableIcon, Message, UserInfo } from './components';
import { getCurrentTimeString } from './utils';
import chatBackground from './assets/images/chat-background.jpeg';

const initialMessages = [
  {
    id: '42',
    text: 'Привет, как ты?',
    sentAt: '12:12',
    fromMe: false,
  },
  {
    id: '333',
    text: 'Привет, отлично! Делаю тестовое на React-native)',
    sentAt: '12:15',
    fromMe: true,
  },
];

const App = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [text, onChangeText] = useState('');

  const sendMessage = () => {
    if (text) {
      const newId = uuid.v4();
  
      const newMessage = {
        id: newId,
        text: text,
        sentAt: getCurrentTimeString(),
        fromMe: true,
      };
      setMessages([...messages, newMessage]);
      onChangeText('');
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.topBlock}>
        <TouchableIcon
          type='back'
          onPress={() => {}}
          width={35}
          height={35}
        />
        <UserInfo />
        <TouchableIcon
          type='phone'
          onPress={() => {}}
          width={35}
          height={35}
        />
      </View>
      <ImageBackground
        style={styles.messagesBlock}
        source={chatBackground}
        resizeMode='cover'
      >
        { messages.map(message => (
          <Message 
            key={message.id}
            text={message.text}
            sentAt={message.sentAt}
            fromMe={message.fromMe}
          />
        ))}
      </ImageBackground>
      <View style={styles.bottomBlock}>
        <View style={styles.inputBar}>
          <TouchableIcon
            type='plus'
            onPress={() => {}}
            width={35}
            height={35}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              onSubmitEditing={sendMessage}
              value={text}
            />
            <TouchableIcon
              type='smile'
              onPress={() => {}}
              width={30}
              height={30}
            />
          </View>
          <TouchableIcon
            type='microphone'
            onPress={() => {}}
            width={35}
            height={35}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messagesBlock: {
    flex: 7,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  chatImage: {
    height: '100%',
  },
  topBlock: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#E0F5CE',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 20,
  },
  bottomBlock: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E0F5CE',
  },
  inputBar: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginLeft: 20,
    marginRight: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: '75%',
    borderRadius: 50,
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    width: '90%',
  },
});

export default App;