import React from 'react';
import { StyleSheet, Text,  View ,Image, Button } from 'react-native';
import { name } from './name';
export default function App({navigation}) {

  return (
    <View style={[styles.container]}>
     <View style={styles.btn}>
     <Button
     color='red'
      title="Start Workout" 
      onPress={() =>navigation.navigate('Pushups')}
      />
    </View>  
    <View >
        <Image 
        blurRadius={0}
        fadeDuration={1000}
        style={styles.img}
        source={
          require('../start.jpg')}
         />
        <View>
         <Text style={styles.headerText}>Are you Ready, {name}?</Text>
        </View>
      </View>
    </View>
  );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:"center",
  },
  headerText: {
    textAlign:"center",
    fontWeight:"bold",
    flex: 0,
    fontSize:32,
    marginTop:15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    justifyContent:"center",
    alignItems:"center",
    width:400,
    height:300,
          
   },
  btn:{
    position:"absolute",
    bottom:0,
   
    width:"100%",
  }

});
