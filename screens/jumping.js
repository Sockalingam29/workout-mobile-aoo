import React from 'react'
import { StyleSheet, Text, View ,Image, Button} from 'react-native';

export default function Jumping({navigation}) {
    return (
        <View style={[styles.container]}>
        <View style={styles.btn}>
         <Button
         color='red'
          title="Finish"  
            onPress={() =>navigation.navigate('Thank you')} 
          />
          </View>
          
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
        </View>
      );
    }
      
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:"center",
        backgroundColor:"white"
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

