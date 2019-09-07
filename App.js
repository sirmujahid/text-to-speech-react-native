import * as React from 'react';
import {TextInput, Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';

export default class App extends React.Component {
  constructor(props){
    super(props);
  this.state= {
    myText : 'Developed By Mujahid Hussain'
  }
  

}

handleClick=()=> {
    const thingToSay = this.state.myText;
    Speech.speak(thingToSay);
    alert(this.state.myText);
}

onChangeText =(typedText)=> {
  this.setState({
    myText: typedText
    
  })
}

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.paragraph} placeholder="Type Your Text Here" onChangeText={this.onChangeText}></TextInput>
        <Button title="Press to hear some words" onPress={this.handleClick} />
        <Text style={styles.paragraph}>{this.state.myText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

