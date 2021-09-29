import React, { useState } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback,TextInput, View ,Image, SafeAreaView, Button, Alert, Platform, StatusBar, } from 'react-native';
import { name } from './name';
export default function App({navigation}) {

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
        <View>
         <Text style={styles.headerText}>Are you Ready, {name}?</Text>
        </View>
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
    justifyContent:"center",
    // paddingTop: Platform.OS === "android"? 150 : 0,
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
