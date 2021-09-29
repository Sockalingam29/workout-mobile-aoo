import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View ,Image, SafeAreaView, Button, Alert, Platform, StatusBar, } from 'react-native';
let name="";
export {name};
export default function App({navigation}) {

  //const handlePress=()=> console.log("Text Pressed");
  // const [name, setname] = useState("User");
  function nameHandler(txt){
      name=txt;
      console.log(name);
  }
  function clickHandler(){
    if(name.trim()=="")
    {
      alert("Please enter your name");
    }
    else{
      navigation.navigate('Start')
    }
  }
  return (
    <SafeAreaView style={[styles.container,containerstyle]}>
    <View style={styles.innerContainer}>
    <Text style={styles.headerText}>Are you Ready?</Text> 
    <Text style={styles.headerText2}>Enter your name</Text> 
    <TextInput style = {styles.input}
              //  underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText={nameHandler}
               required/>
     </View>
     <View style={styles.btn}>
     <Button
     type='submit'
     color='red'
      title="Start Workout" 
      onPress={clickHandler}
      />
    </View>  
{/*       
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
        </TouchableNativeFeedback> */}
        

    </SafeAreaView>
  );
 
}


const containerstyle = {backgroundColor:"white"}

const styles = StyleSheet.create({
  innerContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // paddingTop: Platform.OS === "android"? 150 : 0,
  },
  input: {
    margin: 15,
    height: 70,
    width:225,
    borderColor: 'red',
    borderWidth: 1,
    textAlign:"center",
    fontSize:24,
 },
  headerText: {
    textAlign:"center",
    fontWeight:"bold",
    flex: 0,
    fontSize:48,
    marginTop:15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText2: {
    textAlign:"center",
    fontWeight:"bold",
    flex: 0,
    fontSize:32,
    marginTop:15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // img:{
  //     width:400,
  //     height:300,
  // },
  btn:{
    position:"absolute",
    bottom:0,
   
    width:"100%",
  }

});
