import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { shadow } from '../constants/shadow'
import { Card as CardType } from '../deck/deck'
import TextStyled from './TextStyled'

interface CardProps {
  onPress: () => void,
  card: CardType,
}

function Card ({ onPress, card }: CardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <TextStyled style={{ color: 'black' }}>{card.numberName} de {card.role}</TextStyled>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    justifyContent: 'center',
    ...shadow
  }
})
export default Card
