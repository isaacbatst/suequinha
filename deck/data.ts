import { suit } from './deck'
import club from './assets/club.svg'
import diamond from './assets/diamond.svg'
import heart from './assets/heart.svg'
import spade from './assets/spade.svg'
import { ImageSourcePropType } from 'react-native'

interface NumberDetails {
  name: string,
  rule: string
}

export const numbersDetails: Record<number, NumberDetails> = {
  1: {
    name: 'A',
    rule: 'Escolha uma pessoa para beber'
  },
  2: {
    name: '2',
    rule: 'Escolha duas pessoas para beber'
  },
  3: {
    name: '3',
    rule: 'Escolha três pessoas para beber'
  },
  4: {
    name: '4',
    rule: 'Eu nunca'
  },
  5: {
    name: '5',
    rule: 'C/S Composto'
  },
  6: {
    name: '6',
    rule: 'Barquinho'
  },
  7: {
    name: '7',
    rule: 'Pi'
  },
  8: {
    name: '8',
    rule: 'Escolha uma palavra proibida'
  },
  9: {
    name: '9',
    rule: 'Dedo na mesa'
  },
  10: {
    name: '10',
    rule: 'Crie uma regra'
  },
  11: {
    name: 'J',
    rule: 'Homens bebem'
  },
  12: {
    name: 'Q',
    rule: 'Mulheres bebem'
  },
  13: {
    name: 'K',
    rule: 'Todos bebem'
  }
}

export const suitsImages: Record<suit, number> = {
  Paus: club,
  Ouro: diamond,
  Copas: heart,
  Espadas: spade
}
