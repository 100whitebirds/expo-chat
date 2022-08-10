import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TouchableIcon } from './TouchableIcon';

export const Message = ({ fromMe, text, sentAt }) => (
  <TouchableOpacity>
    <View style={fromMe ? styles.messageFromMe : styles.message}>
      <Text style={styles.text}>
        { text }
      </Text>
      <View style={styles.messageInfo}>
        <Text style={styles.sentAt}>
          { sentAt }
        </Text>
        { fromMe && (
          <TouchableIcon
            style={styles.checks}
            type='double-check'
            width={22}
            height={22}
          />
        )}
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  message: {
    flexDirection: 'row',
    backgroundColor: '#F9F7F5',
    alignItems: 'flex-start',
    borderRadius: 12,
    borderBottomLeftRadius: 0,
    borderWidth: 1,
    borderColor: '#add8e6',
    width: '80%',
    margin: 10,
    padding: 8,
  },
  messageFromMe: {
    flexDirection: 'row',
    backgroundColor: '#add8e6',
    alignItems: 'flex-start',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0F5CE',
    width: '80%',
    margin: 10,
    padding: 8,
    marginLeft: 'auto',
  },
  text: {
    color: '#191919',
    fontSize: 16,
    width: '77%',
    fontStyle: 'italic',
    marginRight: 'auto',
  },
  messageInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  }, 
  sentAt: {
    fontSize: 12,
    color: '#a9a9a9',
  },
  checks: {
    marginLeft: 5,
  },
});

export default Message;