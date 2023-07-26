import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './components/HomeScreen'
import HeaderIcon from './components/HeaderIcon'
import ColorMatchTabs from './components/ColorMatchTabs'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: () => <HeaderIcon />,
          headerBackVisible: false,
        }}
      >
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: 'Colorblind Style',
          }}
        />
        <Stack.Screen name='ColorMatchTabs' component={ColorMatchTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
