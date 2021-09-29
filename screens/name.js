import React from 'react';
import { StyleSheet, Text, TextInput, View ,Button,} from 'react-native';

let name="";
export {name};

export default function App({navigation}) {

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
      navigation.navigate('Start');
    }
  }
 
  return (
    <View style={[styles.container]}>
    <View style={styles.innerContainer}>
    <Text style={styles.headerText}>Are you Ready?</Text> 
    <Text style={styles.headerText2}>Enter your name</Text> 
    <TextInput style = {styles.input}
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
        title=" Let's start" 
        onPress={clickHandler}
      />
    </View>  
    </View>
  );
 
}

const styles = StyleSheet.create({
  innerContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  container: {
    backgroundColor:"white",
    flex: 1,
    alignItems: 'center',
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
  btn:{
    position:"absolute",
    bottom:0,
    width:"100%",
  }

});
