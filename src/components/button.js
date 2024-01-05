import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles as buttonStyles } from './styles/ButtonStyles';

const numberOfChevrons = 3;

const Button = (props) => {
  const renderButton = () => {
    if (props.type === '0') {
      return (
        <TouchableOpacity
          style={[
            buttonStyles.button0,
            {
              backgroundColor: props.backgroundColor || '#A5B4CB',
              borderRadius: props.borderRadius || 10,
            },
          ]}
          onPress={props.onPress}
        >
          <FontAwesome
            name={props.leftIcon}
            size={props.leftIconSize}
            color={props.leftIconColor}
          />
          <Text
            style={[
              buttonStyles.text,
              {
                color: props.textColor || '#EEF5FF',
                fontFamily: props.fontFamily || 'Poppins-SemiBold',
                fontSize: props.textSize || 15,
              },
            ]}
          >
            {props.text}
          </Text>
          {Array.from({ length: numberOfChevrons }, (_, index) => (
            <FontAwesome
              key={index}
              name={props.rightIcon}
              size={props.rightIconSize}
              color={props.rightIconColor}
            />
          ))}
        </TouchableOpacity>
      );
    } else if (props.type === '1') {
      return (
        <TouchableOpacity
          style={[
            buttonStyles.button1,
            {
              backgroundColor: props.backgroundColor || '#00377B',
              borderRadius: props.borderRadius || 25,
            },
          ]}
          onPress={props.onPress}
        >
          <Text
            style={[
              buttonStyles.text,
              {
                color: props.textColor || '#EEF5FF',
                fontFamily: props.fontFamily || 'Poppins-SemiBold',
                fontSize: props.textSize || 15,
              },
            ]}
          >
            {props.text}
            <FontAwesome
              name={props.icon}
              size={props.iconSize}
              color={props.iconColor}
            />
          </Text>
        </TouchableOpacity>
      );
    }
  };

  

  return renderButton();
};

export default Button;
