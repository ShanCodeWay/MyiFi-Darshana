import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles as TitleBarStyles } from "./styles/TitleBarStyle";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const TitleBar = (props) => {
  return (
    <View style={TitleBarStyles.titleBarContainer}>
      <View style={TitleBarStyles.titleBarItem}>
        <TouchableOpacity style={TitleBarStyles.button} onPress={props.onPressLeft}>
          <FontAwesome name={props.nameLeft} size={20} color={'#00377B'} />
        </TouchableOpacity>

        <TouchableOpacity style={TitleBarStyles.middle}>
          <Text style={TitleBarStyles.titleText}> </Text>
        </TouchableOpacity>

        <TouchableOpacity style={TitleBarStyles.button} onPress={props.onPressRight}>
          <FontAwesome name={props.nameRight} size={20} color={'#00377B'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TitleBar;
