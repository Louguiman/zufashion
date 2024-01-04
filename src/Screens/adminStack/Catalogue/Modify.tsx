import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Modify = ({route}) => {
    const {item}=route.params
    console.log(item);
    
    item.map((element)=>{

        return (
          <View style={{flex:1,backgroundColor:'red'}}>
            <Image source={element[0]} style={{height:150,width:150}} />
          </View>
        )
    })
}

export default Modify

const styles = StyleSheet.create({})