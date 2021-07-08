import { numbersDetails } from './data'

const suits = ['Paus', 'Copas', 'Espadas', 'Ouro'] as const

export type suit = typeof suits[number];

export interface Card {
  number: number,
  numberName: string,
  suit: suit,
  rule: string,
}

const SUIT_SIZE = 13

function createSuitCards (suit: suit): Card[] {
  return Array.from({ length: SUIT_SIZE }, (_, index) => ({
    number: index,
    numberName: numbersDetails[index + 1].name,
    rule: numbersDetails[index + 1].rule,
    suit: suit
  }))
}

function createDeck () {
  return suits.reduce<Card[]>((deck, suit) => [
    ...deck,
    ...createSuitCards(suit)
  ], [])
}

function shuffle<T> (array: T[]): T[] {
  let currentIndex = array.length
  let randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ]
  }

  return array
}

function createShuffledDeck () {
  const deck = createDeck()

  return shuffle(deck)
}

export default createShuffledDeck
