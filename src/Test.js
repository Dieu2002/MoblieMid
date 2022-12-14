import React, { Component } from 'react'
import {
   MapView,
   StyleSheet
} from 'react-native'

export default function Test (){
   return (
      <MapView
         style = {styles.map}
         showsUserLocation = {false}
         followUserLocation = {false}
         zoomEnabled = {true}
      />
   )
}

const styles = StyleSheet.create ({
   map: {
      height: 400,
      marginTop: 80
   }
})