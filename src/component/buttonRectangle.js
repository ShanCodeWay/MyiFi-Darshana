import React from 'react';
import {View,Text,StyleSheet,SafeAreaView,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const numberOfChevrons = 3;



function ButtonRectangle(props) {
  return (

  <TouchableOpacity style={styles.buttonRe}>
   
   <FontAwesome
              name="lock"
              
              size={24}
              color="#1B1F52"
            
              />
  
  <Text style={styles.text}>
   {props.Title}
  
  </Text>
  {Array.from({ length: numberOfChevrons }, (_, index) => (
  
  <FontAwesome
        key={index}
        name="chevron-right"
        size={24}
        color="#1B1F52"
      />
      ))}
  </TouchableOpacity>
  

 
  );
}

export default ButtonRectangle;

const styles = StyleSheet.create({
  text: {

    fontFamily:'Poppins-light',
    fontSize:20,
    alignItems: 'center',
    padding: 20,
    color:'#1B1F52',
    },

buttonRe: {
  paddingHorizontal: 20,
  flexDirection: 'row',
  backgroundColor: 'rgba(150,162,193,1)',
  borderRadius:15,
  width:'300',
  alignItems:'center',
  marginVertical:40,
  alignContent: 'center',
  justifyContent: 'space-between',
  paddingVertical:15,
}   



  
});