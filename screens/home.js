import React from 'react';

import {
  Text,
  View,
  Image,
  Button,
  StyleSheet
} from 'react-native';


 const Home = ({navigation}) => 
 {
  return (
    <View style={styles.container}>    
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Workout app 💪</Text>
        <Image style={styles.img} source={require('../home.png')} />
      </View>
      <View style={styles.btn} >
        <Button color='red' onPress={() =>navigation.navigate('Name')} title='Get started!' />
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
    
  },

  btn:{
    position:"absolute",
    bottom:0,
    width:"100%",
  }
})

export default Home;
