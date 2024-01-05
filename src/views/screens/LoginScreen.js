import React, { Component } from "react";
import { View, Text, SafeAreaView, } from "react-native";
import Button from "../../components/Button";

class LoginScreen extends Component {
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

      <SafeAreaView style={{
        flex: 1,
        backgroundColor:"green",  
      }} 
      > 

      <View style={{
        flex: 1,
        backgroundColor:"green",  
      }} > 


                                <View style={{
                                        marginTop:100,
                                        flex: 1,
                                        backgroundColor:"red", 
                                        flexDirection: "column",
                                        
                                      }} > 
                                    
                      <View
                      style={{
                        flex: 5,
                        flexDirection: 'column',
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                    <Text style={{ color: "red" }}>Login Screen</Text>

                    <View>
                      <Button
                        type='1'
                        text="Click to Signup"
                        borderRadius={35}
                        onPress={this.handleSignupPress}
                      />
                    </View>
                    </View>


      
        <View
          style={{
            flex: 2,
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor:"blue", 
          }}
        >
        <Text style={{ color: "red" }}>Login Screen</Text>

        <View>
          <Button
            type='1'
            text="Click to Signup"
            borderRadius={35}
            onPress={this.handleSignupPress}
          />
        </View>
        </View>




        <View  style={{
            height: 50,
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor:"green", 
          }}>
          <Button
            type='0'
            text="Click to ButtonScreen"
            leftIcon="lock"
            rightIcon="chevron-right"
            borderRadius={25}
            textSize={20}
            rightIconSize={24}
            rightIconColor="#1B1F52"
            leftIconSize={24}
            leftIconColor="#1B1F52"
            onPress={this.handleButtonPress}
          />
        </View>
      

      </View>

      </View>
      </SafeAreaView>
    );
  }
}

export default LoginScreen;
