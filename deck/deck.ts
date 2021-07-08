import { numbersDetails } from "./data";

const roles = ['Paus', 'Copas', 'Espadas', 'Ouro'] as const;

type role = typeof roles[number];

export interface Card {
  number: number,
  numberName: string,
  role: role,
  rule: string,
}

const ROLE_SIZE = 13;

function createRoleCards(role: role): Card[] {
  return Array.from({ length: ROLE_SIZE }, (_, index) => ({
    number: index,
    numberName: numbersDetails[index+1].name,
    rule: numbersDetails[index+1].rule,
    role: role,
  }))
}

function createDeck(){
  return roles.reduce<Card[]>((deck, role) => [
    ...deck,
    ...createRoleCards(role)
  ], [])
}

function createShuffledDeck(){
  const deck = createDeck();

  return shuffle(deck);
}

function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length
  let randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }

  return array;
}

export default createShuffledDeck;