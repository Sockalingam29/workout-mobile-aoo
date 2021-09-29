import {
    Text,
    View,
    Image,
    Button,
    StyleSheet
  } from 'react-native';
import React, { useEffect } from 'react';
import { showMessage } from 'react-native-flash-message';
import { name } from './name';

  
   const Finish = ({navigation}) => 
   {
    useEffect(() => {
      // Runs ONCE after initial rendering
      showMessage({
        message: "WOW! You have completed!",
        type: "info",
        backgroundColor:"red",
        color:"white",
        
        
      });
    }, []);
    return (
      <View style={styles.container}>    
        <View style={styles.innerContainer}>
          <Text style={styles.heading}>That's great! 🥳</Text>
          <Image style={styles.img} source={require('../finish.png')} />
          <Text style={styles.txt}>{name}, you have taken your first step towards staying fit 😀</Text>
        
        </View>
        
      </View>
  
    );
  };
  
  const styles=StyleSheet.create({
    container:{
      flex:1,
      alignItems:"center",
      justifyContent:"center", 
    
    },
    innerContainer:{
      flex:1,
      backgroundColor:"white",
      alignItems:"center",
      justifyContent:"center", 
    },
    heading:{
      fontWeight:"bold",
      fontSize:40,
      paddingBottom:20,
    },
    img:{
      width:400,
      borderWidth: 100,
      height:300,
      marginBottom:100,
    },
    btn:{
      position:"absolute",
      bottom:0,
      width:"100%",
    },
    txt:{
      fontSize:24,
      textAlign:"center",
    }
  })
  
  export default Finish;
  