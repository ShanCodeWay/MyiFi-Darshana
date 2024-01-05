import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import{styles as buttonStyles} from './buttonStyles';

const numberOfChevrons = 3;


function Button(props) {

const renderButton = () => {


    // TYPE 0= Rectangle Button TYPE 1= Rounded Button

    if (props.type === '0') {
      
        return (
        <TouchableOpacity  style={[
            buttonStyles.button0,
            {
              backgroundColor: props.backgroundColor || '#A5B4CB',
              borderRadius: props.borderRadius      
              
            },
          ]}
          >

          <FontAwesome name={props.lefticon} size={24} color="#1B1F52" />

          <Text style={[
                buttonStyles.text,
                {
                  color: props.textColor || '#EEF5FF',
                  fontFamily: props.fontFamily || 'Poppins-SemiBold',
                },
              ]}>
            
            {props.text}
            
            </Text>
          {Array.from({ length: numberOfChevrons }, (_, index) => (

            <FontAwesome key={index} name={props.righticon} size={24} color="#1B1F52" />

          ))}
        </TouchableOpacity>
      );
    } 
    
    // TYPE 0 = Rectangle Button TYPE 1 = Rounded Button
    else if (props.type === '1') {

      return (
        
          <TouchableOpacity
            style={[
                buttonStyles.button1,
              {
                backgroundColor: props.backgroundColor || '#00377B',
                borderRadius: props.borderRadius 

              },
            ]}
          >
            <Text
              style={[
                buttonStyles.text,
                {
                  color: props.textColor || '#EEF5FF',
                  fontFamily: props.fontFamily || 'Poppins-SemiBold',
                },
              ]}
            >
              {props.text}


            </Text>
          </TouchableOpacity>
        
      );
    }
  };

  return renderButton();
}

export default Button;