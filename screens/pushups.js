import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View ,Image, SafeAreaView, Button, Alert, Platform, StatusBar, } from 'react-native';

export default function Pushups({navigation}) {
    return (
        <SafeAreaView style={[styles.container,containerstyle]}>
         <View style={styles.btn}>
         <Button
          
          color='red'
          title="Next workout" 
          onPress={() =>navigation.navigate('Jumping Jacks')}
          />
          </View>
          
          
        <TouchableNativeFeedback onPress={()=>console.log("Image Tapped")}>
        <View >
        
            <Image 
            blurRadius={0}
            fadeDuration={1000}
            style={styles.img}
            source={
              require('../pushups.png')}
             />
            <View>
            <Text style={styles.headerText}>
                 Do 10 pushups and click next!
            </Text>
    
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
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent:"center",
        backgroundColor:"black",
       // paddingTop: Platform.OS === "android"? 150 : 0,
      },
      headerText: {
        textAlign:"center",
        fontWeight:"bold",
        marginTop:15,
        fontSize:28,
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      btn:{
        position:"absolute",
        bottom:0,
        width:"100%",
      },
      img:{
          justifyContent:"center",
          alignItems:"center",
          width:400,
          height:300,
          
      },
    });

