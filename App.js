import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button, SafeAreaView } from 'react-native';
import producerImage from './assets/favicon.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>الأســر المنتـجه  </Text>
      <StatusBar style="auto" />

      <TouchableHighlight onPress={Producer}>
        <SafeAreaView style={styles.producerTouchable}>
          <Image source={{ uri: 'data:image/jpeg;base64,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' }}
            style={ styles.mainImages} />
    <Text></Text>
        </SafeAreaView>
      </TouchableHighlight>


      <TouchableHighlight>
        <View style={styles.buyerTouchable}>
          <Image
            source={require('./images/d1eb2068d67b1a4b60e029fc70ebc612bfc708cd.png')} />
        </View>
      </TouchableHighlight>

    </View>

  );
}

export function Producer() {
  return (
    console.log("hello Nawaf")
  )
}

export function Buyer() {

}

export function ProducerMenu() {


}
export function producerOptions() {
  return (
    <SafeAreaView>
      <Button> HandMadeProducts </Button>
      <Button> HandMadeProducts </Button>
      <Button title="Food" />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },title: {
    fontSize: 70,
    fontWeight: 'bold'

  },
  producerTouchable: {
    backgroundColor: 'orange',
    marginTop: 15
  },
  buyerTouchable: {
    backgroundColor: 'blue',
    marginTop: 15
  },
  mainImages: {
    width:300,
    height:200
  }
});
