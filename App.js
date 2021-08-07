import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button } from 'react-native';
import producerImage from './assets/favicon.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Producer Families </Text>
      <StatusBar style="auto" />

      <TouchableHighlight onPress={Producer}>
        <View style={styles.producerTouchable}>
          <Image
            source={producerImage} />

        </View>
      </TouchableHighlight>


      <TouchableHighlight>
        <View style={styles.buyerTouchable}>
          <Image
            source={require('/home/nawaf-linux/Personal_Projects/testApp/assets/d1eb2068d67b1a4b60e029fc70ebc612bfc708cd.png')} />
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
export function producerOptions () { 
  return (
    <Button> HandMadeProducts </Button>
    <Button onPress ={}> HandMadeProducts </Button>
    <Button title = "Food" onPress ={}/>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  producerTouchable: {
    backgroundColor: 'orange',
    marginTop: 15
  },
  buyerTouchable: {
    backgroundColor: 'blue',
    marginTop: 15
  }
});
