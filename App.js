import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, PixelRatio, Platform } from 'react-native';

// variable to hold screen width
const screenWidth = Dimensions.get('window').width

// variable for responsive text and border size
let textSize = screenWidth * 0.15;
let borderSize = screenWidth * 0.02;

// Large screen size
if(screenWidth >= 900){
  textSize = screenWidth * 0.1;
  borderSize = screenWidth * 0.01;
}
// XL scrteen size
if(screenWidth >= 1200){
  textSize = screenWidth * 0.03;
  borderSize = screenWidth * 0.005;
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.flexColumn} />

      <View style={styles.flexMiddleColumn}>
        {/* First row */}
        <View style={styles.flexRow} >
          <View style={styles.box}>
            <Text style={styles.text}>O</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>O</Text>
          </View>
          <View style={[styles.box,styles.noBorder]}>
            <Text style={styles.textX}>X</Text>
          </View>
        </View>
        {/* Second row */}
        <View style={styles.flexRow} >
          <View style={styles.box}>
            <Text style={styles.textX}>X</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>O</Text>
          </View>
          <View style={[styles.box,styles.noBorder]}>
            <Text style={styles.text}>O</Text>
          </View>
        </View>
        {/* Third row */}
        <View style={[styles.flexRow, styles.noBorder]}>
          <View style={styles.box}>
            <Text style={styles.textX}>X</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.textX}>X</Text>
          </View>
          <View style={[styles.box,styles.noBorder]}>
            <Text style={styles.text}>O</Text>
          </View>
        </View>
      </View>

      <View style={styles.flexColumn} />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  flexColumn:{
    flex:1,
    flexDirection: 'column',
  },
  box:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: Math.floor(borderSize),
    padding: '1%'
  },
  flexMiddleColumn:{
    flex:2,
    flexDirection: 'column',
    margin: '10%',
    },
  flexRow:{
    flex:1,
    flexDirection: 'row',
    borderBottomWidth: Math.floor(borderSize),

  },
  noBorder:{
    borderBottomWidth: 0,
    borderRightWidth: 0,
  },
  text:{
    fontSize: Math.floor(textSize),
    fontWeight: 'bold',
    textShadowColor: 'lightgrey',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 2,
  },
  textX:{
    fontSize: Math.floor(textSize),
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 2,
    color: 'red'
  }
});
