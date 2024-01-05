// Splash.js
import React, { Component } from "react";
import { View, Text } from "react-native";
import Svg, { Circle, Rect } from "react-native-svg";
import Colors from "../../styles/Colors";

class SplashScreen extends Component {
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.props.navigation.replace("LoginScreen");
    }, 3000);
  }

  componentWillUnmount() {}

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Svg height="100" width="100">
          <Circle cx="50" cy="50" r="45" fill="green" />
        </Svg>
        <Text style={{ color: Colors.BLACK_COLOR }}>Splash Screen</Text>
      </View>
    );
  }
}

export default SplashScreen;
