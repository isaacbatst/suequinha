import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { useFonts, Montserrat_400Regular as MontserratRegular } from '@expo-google-fonts/montserrat'

export default function App () {
  const [fontsLoaded] = useFonts({
    MontserratRegular
  })

  return (
    fontsLoaded && <View style={styles.app}>
      <StatusBar style="auto" />
    </View >
  )
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  }
})
