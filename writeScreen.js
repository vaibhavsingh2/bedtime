import React,{Component} from 'react';
import {Text,View,TouchableOpacity,TextInput,StyleSheet} from 'react-native';

export default class WriteScreen extends React.Component{
   
    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text> Type your story </Text>
            <TouchableOpacity
                >
             <Text>   
        Write your story.
                 </Text>
            </TouchableOpacity>
         
            </View>
        )
    }
} 


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b8b8b8',
    },
    inputBox: {
      marginTop: 50,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
    },
    
    
  });