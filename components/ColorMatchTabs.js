import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const ColorMatch = () => (
  <View style={styles.container}>
    <Text>Color Match Home</Text>
  </View>
)

const ColorMatchResults = () => (
  <View style={styles.container}>
    <Text>Color Match Results</Text>
  </View>
)

const Photos = () => (
  <View style={styles.container}>
    <Text>Photos</Text>
  </View>
)

const Options = () => (
  <View style={styles.container}>
    <Text>Options</Text>
  </View>
)

const ColorMatchStack = createNativeStackNavigator()

function ColorMatchScreen() {
  return (
    <ColorMatchStack.Navigator screenOptions={{ headerShown: false }}>
      <ColorMatchStack.Screen name='ColorMatch' component={ColorMatch} />
      <ColorMatchStack.Screen
        name='ColorMatchResults'
        component={ColorMatchResults}
      />
    </ColorMatchStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Color Match'
      screenOptions={({ navigation, route }) => ({
        headerShown: false,
        tabBarIcon: ({ tintColor }) => {
          let iconName
          if (route.name === 'Color Match') {
            iconName = `invert-colors`
          } else if (route.name === 'Photos') {
            iconName = `collections`
          } else if (route.name === 'Options') {
            iconName = `more-horiz`
          }
          return <MaterialIcons name={iconName} size={25} color={tintColor} />
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name='Photos' component={Photos} />
      <Tab.Screen name='Color Match' component={ColorMatchScreen} />
      <Tab.Screen name='Options' component={Options} />
    </Tab.Navigator>
  )
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default Tabs
