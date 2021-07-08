import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { useFonts, Montserrat_400Regular as MontserratRegular } from '@expo-google-fonts/montserrat'
import Constants from 'expo-constants'
import Home from './pages/Home'
import Header from './components/Header'
import { primary } from './constants/colors'

export default function App () {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular: MontserratRegular
  })

  return (
    fontsLoaded && <View style={styles.app}>
      <StatusBar style="light"backgroundColor={primary} />
      <View style={styles.container}>
        <Header />
        <Home />
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1
  }
})
