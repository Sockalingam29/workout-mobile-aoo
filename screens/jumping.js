import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View ,Image, SafeAreaView, Button, Alert, Platform, StatusBar, } from 'react-native';

export default function Jumping({navigation}) {
    return (
        <SafeAreaView style={[styles.container,containerstyle]}>
        <View style={styles.btn}>
         <Button
         color='red'
          title="Finish"  
            onPress={() =>navigation.navigate('Thank you')} 
          />
          </View>
          
          
        <TouchableNativeFeedback onPress={()=>console.log("Image Tapped")}>
        <View >
        
            <Image 
            blurRadius={0}
            fadeDuration={1000}
            style={styles.img}
            source={
              require('../jumping.png')}
             />
            <View>
            <Text style={styles.headerText}>
                 Do 25 Jumping Jacks and finish!
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
        alignItems: 'center',
        justifyContent:"center",
      },
      headerText: {
        textAlign:"center",
        marginTop:15,
        fontWeight:"bold",
        paddingTop:24,
        fontSize:26,
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

