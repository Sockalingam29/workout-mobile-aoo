import {
    Text,
    View,
    Image,
    Button,
    StyleSheet
  } from 'react-native';
import React from 'react';

  
   const Finish = ({navigation}) => 
   {
    return (
      <View style={styles.container}>    
        <View style={styles.innerContainer}>
          <Text style={styles.heading}>That's great! 🥳</Text>
          <Image style={styles.img} source={require('../finish.png')} />
          <Text style={styles.txt}>You have taken your first step towards staying fit 😀</Text>
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
  