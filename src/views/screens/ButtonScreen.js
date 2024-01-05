import React, { Component } from "react";
import { View, Text, Touchable,styles, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Button from "../../components/Button";
import { useNavigation } from '@react-navigation/native';
import {styles as ButtonScreenStyles} from "../../styles/ButtonScreenStyles";

class ButtonScreen extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  handleSignupPress = () => {
    this.props.navigation.replace('SignupScreen');
    console.log("Signup button pressed"); 
  };
  
  handleButtonPress = () => {
    this.props.navigation.replace('ButtonScreen'); 
    console.log("buttonscreen pressed");
  };

  render() {
    return ( 

        <ScrollView>
                <View style={ButtonScreenStyles.buttonContainer} >
                
                    
                <Text style={{ color: "red" }}>Button Screen</Text>

                <View style={ButtonScreenStyles.signButton}>
                    <Button //Type=1 rounded  button Type=0 rectangle shape
                    type='1'
                    text="Sign-in"
                    borderRadius={35}
                    textSize={22}
                    onPress={this.handleSignupPress}
                    />
                </View>

                <View style={ButtonScreenStyles.nextButton}>
                    <Button //Type=1 rounded  button Type=0 rectangle shape
                    type='1'
                    text="Next"
                    borderRadius={35}
                    fontFamily="Poppins-Bold"
                    textSize={20}
                    />
                </View>
                <View style={ButtonScreenStyles.rgbutton}>
                    <Button //Type=1 rounded  button Type=0 rectangle shape
                    type='1'
                    icon="camera"
                    iconSize={20}
                    iconColor="black"
                    borderRadius={35}
                    fontFamily="Poppins-Bold"
                    textSize={20}
                    backgroundColor="#6DC100"

                    />
                </View>
    
        <View style={ButtonScreenStyles.buttonContainer} >
        <Button //Type=1 rounded  button Type=0 rectangle shape
          type='0'
          text="Forgot your Password"
          leftIcon="lock"
          rightIcon="chevron-right"
          borderRadius={10}
          textSize={20}
          rightIconSize={24}
          rightIconColor="#1B1F52"
          leftIconSize={24}
          leftIconColor="#1B1F52"
          fontFamily="Poppins-regular"
          textColor="#1B1F52"
          onPress={this.handleButtonPress}
        />
        
      </View>
        
      <View style={ButtonScreenStyles.loginButton}>
                    <Button //Type=1 rounded  button Type=0 rectangle shape
                    type='1'
                    text="Sign-in"
                    iconSize={20}
                    iconColor="black"
                    borderRadius={35}
                    fontFamily="Poppins-Bold"
                    textSize={20}
                    backgroundColor="#6DC100"
                    textColor="#1B1F52"
                    onPress={this. handleSignupPress}

                    />
     </View>  


      <View style={ButtonScreenStyles.timeButton} >
        
        <Button //Type=1 rounded  button Type=0 rectangle shape
          type='0'
          text="00:31"

          backgroundColor="#007BC2"
          textColor="#EEF5FF"
          fontFamily="Poppins-ExtraBold"
          textSize={25}
          onPress={this.handleButtonPress}
        />
        
      </View>
      <View style={ButtonScreenStyles.OTPbutton} >
        <Button //Type=1 rounded  button Type=0 rectangle shape
          type='0'
          text="Resend the OTP"
          
          rightIcon="chevron-right"
          borderRadius={10}
          textSize={20}
          rightIconSize={24}
          rightIconColor="#1B1F52"
          leftIconSize={24}
          leftIconColor="#1B1F52"
          textColor="#1B1F52"
          fontFamily="Poppins-Regular"
          onPress={this.handleButtonPress}
        />
        
      
      </View>

       

      </View>
<View style={ButtonScreenStyles.yesNoButton}>

<Button //Type=1 rounded  button Type=0 rectangle shape
  type='0'
  text="Yes"

  backgroundColor="#007BC2"
  textColor="#EEF5FF"
  fontFamily="Poppins-ExtraBold"
  textSize={20}
  onPress={this.handleButtonPress}
/>
<Button //Type=1 rounded  button Type=0 rectangle shape
  type='0'
  text="No"
  backgroundColor="#007BC2"
  textColor="#EEF5FF"
  fontFamily="Poppins-ExtraBold"
  textSize={20}
  onPress={this.handleButtonPress}
/>


</View>
      </ScrollView>
   
    );
  }
}

export default ButtonScreen;
