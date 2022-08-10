import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import userAvatar from '../assets/images/user-avatar.jpg';

export const UserInfo = () => (
  <View style={styles.container}>
    <TouchableOpacity>
      <Image
        style={styles.avatar}
        source={userAvatar}
      />
    </TouchableOpacity>
    <View>
      <Text style={styles.name}>
        Ada Strangelove
      </Text>
      <Text style={styles.lastSeen}>
        Был(а) в сети сегодня в 13:45
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 'auto',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    margin: 10,
  },
  name: {
    fontSize: 16,
    color: '#191919',
  },
  lastSeen: {
    fontSize: 12,
    color: '#a9a9a9',
  },
});