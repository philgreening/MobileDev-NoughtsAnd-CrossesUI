import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, PixelRatio, Platform } from 'react-native';


//** Code for responsive text amended from https://www.youtube.com/watch?v=F889Kfn1NgU&t=838s
const { width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
      } = Dimensions.get('window');

let scale = SCREEN_WIDTH / 320;
const screenWidth = Dimensions.get('window').width

const normalize = (size) => {
  const newSize = size * scale;
  if (SCREEN_WIDTH > 900){
    scale = scale / 2
  }

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

//**

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
            <Text style={styles.text}>X</Text>
          </View>
        </View>
        {/* Second row */}
        <View style={styles.flexRow} >
          <View style={styles.box}>
            <Text style={styles.text}>X</Text>
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
            <Text style={styles.text}>X</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>X</Text>
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
    borderRightWidth: normalize(5),
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
    borderBottomWidth: normalize(5),

  },
  noBorder:{
    borderBottomWidth: 0,
    borderRightWidth: 0,
  },
  text:{
    fontSize: normalize(40),
    fontWeight: 'bold',
  }
});
