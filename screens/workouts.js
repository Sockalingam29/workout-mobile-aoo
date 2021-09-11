import React from 'react';

import {
    Text,
    View,
    Image,
    Button,
    StyleSheet
  } from 'react-native';

export default function List() {
    return (
        <View style={styles.container}>
            <Text>Hello user! How are you?</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
      flex:1,
      //backgroundColor:"white",
      alignItems:"center",
      justifyContent:"center", 
      //fontSize:24,
    },
})
