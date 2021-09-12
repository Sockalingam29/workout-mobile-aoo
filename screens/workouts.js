import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View ,Image, SafeAreaView, Button, Alert, Platform, StatusBar, } from 'react-native';

export default function App({navigation}) {

  const handlePress=()=> console.log("Text Pressed");
  
  return (
    <SafeAreaView style={[styles.container,containerstyle]}>
    <View style={styles.btn}>
     <Button
     color='red'
      title="Start Workout" 
      onPress={() =>navigation.navigate('Pushups')}
      />
    </View>  
      
    <TouchableNativeFeedback onPress={()=>console.log("Image Tapped")}>
    <View >
        <Image 
        blurRadius={0}
        fadeDuration={1000}
        style={styles.img}
        source={
          require('../start.jpg')}
         />
        
         <Text style={styles.headerText}>Are you Ready??</Text>
        
      </View>
        </TouchableNativeFeedback>
        
      <StatusBar style="auto" />

    </SafeAreaView>
  );
}


const containerstyle = {backgroundColor:"white"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
    paddingTop: Platform.OS === "android"? 150 : 0,
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
      width:400,
      height:300,
  },
  btn:{
    position:"absolute",
    bottom:0,
   
    width:"100%",
  }

});