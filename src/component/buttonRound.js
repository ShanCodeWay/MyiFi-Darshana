import React from 'react';
import {View,Text,StyleSheet,SafeAreaView,TouchableOpacity,Dimensions} from 'react-native';


function ButtonRound(props) {
  return (


    <View style={[styles.buttonRContainer, { width: props.containerWidth || '100%' }]}>
  <TouchableOpacity style={[
    
    styles.buttonR,{
                    backgroundColor:props.backgroundColor||'#00377B'   
  }  
    ]} >

  <Text style={[
    styles.text,{   color:props.textColor ||'#EEF5FF'  ,
                    fontFamily:props.fontFamily || 'Poppins-SemiBold',

  }  
    ]} >
  {props.Title}
  </Text>

  </TouchableOpacity> 
  </View>
  );
}

export default ButtonRound;

const styles = StyleSheet.create({

 
  text: {

      fontFamily:'Poppins-SemiBold',
      fontSize:20,
      alignItems: 'center',
      padding: 20,
      color:'#EEF5FF'

      },

  buttonR: {
    backgroundColor: '#00377B',
    borderRadius:40,
    alignItems:'center',
    marginVertical:40,
    width: '100%', 
    
  } ,  
  buttonRContainer:
  {
    paddingLeft:  '20%',
    paddingRight: '20%',
  }


  
});