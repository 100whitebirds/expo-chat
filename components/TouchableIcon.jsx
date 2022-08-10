import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MicrophoneIcon from '../assets/icons/microphone';
import PhoneIcon from '../assets/icons/phone';
import PlusIcon from '../assets/icons/plus';
import SmileIcon from '../assets/icons/smile';
import DoubleCheckIcon from '../assets/icons/double-check';
import BackIcon from '../assets/icons/back';

export const TouchableIcon = ({ onPress, type, ...rest }) => {
  const iconsMap = {
    'microphone': MicrophoneIcon,
    'phone': PhoneIcon,
    'plus': PlusIcon,
    'smile': SmileIcon,
    'double-check': DoubleCheckIcon,
    'back': BackIcon,
  };
  
  const Icon = iconsMap[type];
  
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Icon {...rest}/>
      </View>
    </TouchableOpacity>
  );
};