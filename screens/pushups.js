import React from 'react'
import { StyleSheet, Text, View ,Image,  Button } from 'react-native';




export default function Pushups({navigation}) {
    return (
    
        <View style={styles.container}>
         <View style={styles.btn}>
         <Button
          
          color='red'
          title="Next workout" 
          onPress={() =>{
            navigation.navigate('Jumping Jacks')
          }}
          />
          </View>
  
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
    
        </View>
      );
    }
  
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent:"center",
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

