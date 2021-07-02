import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import createDeck, { Card } from './deck/deck';
import _, { cloneDeep } from 'lodash';
import { useFonts, Oxygen_400Regular } from '@expo-google-fonts/oxygen';
import FontText from './components/FontText';

export default function App() {
  const [ deck, setDeck ] = useState<Card[]>([]);
  let [fontsLoaded] = useFonts({
    Oxygen_400Regular
  })

  useEffect(() => {
    const deck = createDeck();
    setDeck(deck);
  }, [])

  function handleCardTouch(){
    setDeck(prevDeck => {
      const deckCopy = cloneDeep(prevDeck);
      deckCopy.shift();

      if(deckCopy.length){
        return deckCopy;
      }
      
      return createDeck();
    });
  }
  
  return (
    fontsLoaded && <View style={styles.app}>
      <View style={styles.header}>
        <FontText style={styles.light}>Suequinha</FontText>
      </View>
      <View style={styles.container}>
        { deck.length > 0 && 
          <TouchableOpacity style={styles.card} onPress={handleCardTouch}>
            <FontText>{deck[0].numberName} de {deck[0].role}</FontText>
            <FontText>{deck[0].rule}</FontText>
          </TouchableOpacity>
        }
      </View>
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 20,
    flex: 1
  },
  header: {
    textAlign: 'center',
    backgroundColor: '#FD3014',
    paddingVertical: 20,
  },
  light: {
    color: 'white'
  },
  card: {
    backgroundColor:'#00B366',
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    
    elevation: 8,
    width: '100%',
    height: 130,
    justifyContent: 'center'
  }
});
