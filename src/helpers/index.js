import { WRONG_ANSWER, CORRECT_ANSWER } from '../constants/'

const generateRandom = (cardSetLength, excludeIndex) => {
  let num = Math.floor(Math.random() * (cardSetLength));
  return (num === excludeIndex)? generateRandom(cardSetLength, excludeIndex) : num;
}

const generateArray = (cardSetLength, excludeIndex) => {
    var arr = []
    while(arr.length < 3){
      let num = generateRandom(cardSetLength, excludeIndex)
      if(arr.indexOf(num) > -1) continue;
      arr[arr.length] = num;
    }
    return arr
}

export const selectFlashCards = (cards, cardSetIndex) => {
    let randomCardIndex = generateArray(cards.length, cardSetIndex)
    let quizSet = [];
    // cards = scrambleArray(cards)
    quizSet[0] = cards[cardSetIndex];
    quizSet[1] = cards[randomCardIndex.pop()]
    quizSet[2] = cards[randomCardIndex.pop()]
    quizSet[3] = cards[randomCardIndex.pop()]
    quizSet = chooseRightCard(quizSet, cardSetIndex)
    // quizSet = cards.slice(0, 4)
    return scrambleArray(quizSet)
  }
  
  export const chooseRightCard = (cards, cardSetIndex) => {
  
    for(let i = 0; i < cards.length;i++){
        cards[i]['answer'] = WRONG_ANSWER
    }
    cards[0]['answer'] = CORRECT_ANSWER
    return cards
  }
  
  export const scrambleArray = (cards) =>{
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }