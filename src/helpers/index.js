import { WRONG_ANSWER, CORRECT_ANSWER } from '../constants/'

export const selectFlashCards = (cards, randomNumber) => {
    let newArray = []
    cards = scrambleArray(cards)
    cards = chooseRightCard(cards, randomNumber)
    newArray = cards.slice(0, 4)
    return newArray
  }
  
  export const chooseRightCard = (cards, randomNumber) => {
  
    for(let i = 0; i < cards.length;i++){
        cards[i]['answer'] = WRONG_ANSWER
    }
    cards[randomNumber]['answer'] = CORRECT_ANSWER
    return cards
  }
  
  export const scrambleArray = (cards) =>{
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }