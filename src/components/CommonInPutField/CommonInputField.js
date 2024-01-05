import React, { useState, useEffect, useRef } from "react";
import { View, TextInput, StyleSheet, Image, Text } from "react-native";
import CommonInputFieldStyles from "./CommonInputFieldStyles";
import Colors from "./Colors";



const CommonInputField = (props) => {
  const [inputValue, setInputValue] = useState(props.value);

  useEffect(() => {
    props.onInputChange(inputValue);
  }, [inputValue]);

  const handleSubmitEditing = () => {
    if (props.nextInputRef && props.nextInputRef.current) {
      props.nextInputRef.current.focus();
    }
  };
  return (
    <>
      <View style={CommonInputFieldStyles.parentContainer}>
        <Text style={[CommonInputFieldStyles.textStyleTitle]}>
          {props.title}
        </Text>

        <View style={CommonInputFieldStyles.inputContainer}>
          <TextInput
            style={CommonInputFieldStyles.input}
            secureTextEntry={props.isSecureText == true ? true : false}
            placeholder={props.placeholder}
            placeholderTextColor={Colors.GRAY}
            onChangeText={(text) => setInputValue(text)}
            value={inputValue}
            ref={props.inputRef == null ? null : props.inputRef}
            onSubmitEditing={handleSubmitEditing}
          />

          {props.icon == null ? null : (
            <props.icon fill={inputValue ? "#00377B" : Colors.GRAY} />
          )}
        </View>
      </View>
    </>
  );
};

export default CommonInputField;

//How To Use
{
  /* <CommonInputField
value={""} // Set value to the input field
title={"Password"}
placeholder={"Enter Your Password"} //Hint text
onInputChange={this.handlePasswordInputChange}
icon={Icon_Eye}               //Not mandatory
inputRef={this.inputRef2}      //Not mandatory
nextInputRef={this.inputRef1}   //Not mandatory
/> */
}
