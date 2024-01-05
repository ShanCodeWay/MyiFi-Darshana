import React from "react";
import { StatusBar, Platform } from "react-native";

const StatusBarComponent = (props) => {
  return (
    <StatusBar
      backgroundColor={props.backgroundColor}
      barStyle={props.barStyle}
      hidden={props.hidden}
      translucent={props.translucent}
    />
  );
};

export default StatusBarComponent;
