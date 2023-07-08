import React from 'react'
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native'

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={{ flex: 1.5 }}>
      <Text style={styles.textHeader}> Let's get started!</Text>
      <Text style={styles.text}> Confidently match your clothes.</Text>
    </View>
    <View style={{ flex: 2 }}>
      <TouchableHighlight
        style={styles.button}
        underlayColor={'#dd5252'}
        onPress={() => navigation.navigate('Details')}
      >
        <View>
          <Text style={styles.buttonText}>START</Text>
        </View>
      </TouchableHighlight>
    </View>
  </View>
)

//What is the difference between StyleSheet.create and styles?
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  textHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 75,
    marginBottom: 50,
  },

  text: {
    fontSize: 20,
    color: '#999',
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#FA5F5F',
    borderRadius: 50,
    height: 100,
    width: 100,
    paddingTop: 43,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})

export default HomeScreen
