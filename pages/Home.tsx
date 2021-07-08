import { cloneDeep } from 'lodash'
import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import FontText from '../components/TextStyled'
import { blue, gray } from '../constants/colors'
import createDeck, { Card } from '../deck/deck'

function Home () {
  const [deck, setDeck] = useState<Card[]>([])

  useEffect(() => {
    const deck = createDeck()
    setDeck(deck)
  }, [])

  function handleCardTouch () {
    setDeck(prevDeck => {
      const deckCopy = cloneDeep(prevDeck)
      deckCopy.shift()

      if (deckCopy.length) {
        return deckCopy
      }

      return createDeck()
    })
  }
  return (
      <View style={styles.container}>
        { deck.length > 0 &&
          <>
            <View style={styles.ruleContainer}>
              <FontText style={styles.rule}>{deck[0].rule}</FontText>
            </View>
            <TouchableOpacity style={styles.card} onPress={handleCardTouch}>
              <FontText style={{ color: 'black' }}>{deck[0].numberName} de {deck[0].role}</FontText>
            </TouchableOpacity>
          </>
        }
      </View>
  )
}

const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4
  },
  shadowOpacity: 0.30,
  shadowRadius: 4.65,
  elevation: 1
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: gray
  },
  ruleContainer: {
    backgroundColor: blue,
    padding: 15,
    marginBottom: 15
  },
  rule: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
    ...shadow
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    justifyContent: 'center',
    ...shadow
  }
})

export default Home
