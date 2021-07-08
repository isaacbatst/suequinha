import { cloneDeep } from 'lodash'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Card from '../components/Card'
import FontText from '../components/TextStyled'
import { blue, gray } from '../constants/colors'
import { shadow } from '../constants/shadow'
import createDeck, { Card as CardType } from '../deck/deck'

function Home () {
  const [deck, setDeck] = useState<CardType[]>([])
  const [topCard] = deck

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
              <FontText style={styles.rule}>{topCard.rule}</FontText>
            </View>
            <Card onPress={handleCardTouch} card={topCard}/>
          </>
        }
      </View>
  )
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
  }
})

export default Home
