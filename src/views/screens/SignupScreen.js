import React, { Component } from "react";
import { View, Text, Touchable, ScrollView, SafeAreaView, StatusBar, } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TouchableOpacity } from "react-native-gesture-handler";
import Button from "../../components/Button";
import { useNavigation } from '@react-navigation/native';
import TitleBar from "../../components/TitleBar";
import PaginationIndicator from "../../components/PaginationIndicator";
import {styles as SignupScreenStyles} from "../../styles/SignupScreenStyles";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CommonInputField from '../../components/CommonInPutField/CommonInputField';


class SignupScreen extends Component {
  componentDidMount() {
    StatusBar.setBackgroundColor('#EEF5FF');


  }

  componentWillUnmount() {}

  handleLoginPress = () => {
    this.props.navigation.replace('LoginScreen');
    console.log("Login button pressed"); 
  };
  
  handleButtonPress = () => {
    this.props.navigation.replace('ButtonScreen'); 
    console.log("buttonscreen pressed");
  };

  handleLeftButtonPress = () => {
    this.props.navigation.replace('ButtonScreen'); 
    console.log("left pressed");
  };

  handleRightButtonPress = () => {
    this.props.navigation.replace('ButtonScreen'); 
    console.log("right pressed");
  };

  handlePasswordInputChange = (text) => {
    
  }

  render() {
    return (

      <> 
      
      <SafeAreaView 
        style={{
          flex:1
        }}
      >
      
      <TitleBar
       nameRight="chevron-right"
       nameLeft="chevron-left"
       onPressLeft={this.handleButtonPress} 
       onPressRight={this.handleRightButtonPress} 
       />
    
      
    <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          extraScrollHeight={500}
          
        >

      <View 
      style={SignupScreenStyles.mainView}
      > 
      
     

       <PaginationIndicator
        text="Step 1/5"
        pageNumber={2}
        /> 

        


        <View style={SignupScreenStyles.topView} >  
        <View style={SignupScreenStyles.titleView} > 
        
        <Text style={SignupScreenStyles.mainTitle}>Sign Up</Text>
        <Text style={SignupScreenStyles.secondTitle}>Create account so you can manage your personal finances
        </Text>

        </View>

</View>       

<View style={SignupScreenStyles.middleView}> 


        <View style={SignupScreenStyles.inputView}>

        <CommonInputField
            value={""}
            title={"Email Address"}
            placeholder={"Enter Your Email Address"}
            onInputChange={(text) => this.handlePasswordInputChange(text)}
            
            inputRef={this.inputRef2}
            nextInputRef={this.inputRef1}
          />
           <CommonInputField
            value={""}
            title={"Password"}
            placeholder={"Enter Your Password"}
            onInputChange={(text) => this.handlePasswordInputChange(text)}
            
            inputRef={this.inputRef2}
            nextInputRef={this.inputRef1}
          />
            <CommonInputField
            value={""}
            title={"Confirm Password"}
            placeholder={"Confirm Your Password"}
            onInputChange={(text) => this.handlePasswordInputChange(text)}
            
            inputRef={this.inputRef2}
            nextInputRef={this.inputRef1}
          /> 


        </View>
        <View style={SignupScreenStyles.button}>
          
          <Button
            type='1'
            text="Next"
            borderRadius={35}
            onPress={this.handleLoginPress}
            textSize={20}
          />
          
        </View>

</View>
    
<View style={SignupScreenStyles.bottomView}>
        <View style={SignupScreenStyles.logoIcon}>

          <FontAwesome style={SignupScreenStyles.logo}
            name="apple"
            size={this.props.leftIconSize}
            color={this.props.leftIconColor}
          /> 


           <FontAwesome style={SignupScreenStyles.logo}

            name="google"
            size={this.props.leftIconSize}
            color={this.props.leftIconColor}
          />
</View>
          


        </View>
      
       
        
      </View>
      </KeyboardAwareScrollView>
      
      
      </SafeAreaView>

      </>

      
    );
  }
}

export default SignupScreen;
