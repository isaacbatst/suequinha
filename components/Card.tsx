import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { shadow } from '../constants/shadow'
import { suitsImages } from '../deck/data'
import { Card as CardType } from '../deck/deck'
import TextStyled from './TextStyled'
import { SvgUri } from 'react-native-svg'
import { useAssets } from 'expo-asset'

interface CardProps {
  onPress: () => void,
  card: CardType,
}

function Card ({ onPress, card }: CardProps) {
  const [assets] = useAssets(Object.values(suitsImages))

  console.log(!!assets)
  if (!assets) {
    return <TextStyled>Pera</TextStyled>
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.first}>
        <TextStyled style={styles.text}>{card.numberName}</TextStyled>
        <SvgUri
          width={60}
          height={60}
          uri={Image.resolveAssetSource(suitsImages[card.suit]).uri}
        />
      </View>
      <View style={styles.last}>
        <SvgUri
          width={60}
          height={60}
          uri={Image.resolveAssetSource(suitsImages[card.suit]).uri}
        />
        <TextStyled style={{ ...styles.text, transform: [{ rotate: '-180deg' }] }}>{card.numberName}</TextStyled>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 30,
    ...shadow
  },
  first: {
    alignItems: 'center',
    alignSelf: 'flex-start'
  },
  last: {
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  text: { color: 'black', fontSize: 60, lineHeight: 60 }
})
export default Card
