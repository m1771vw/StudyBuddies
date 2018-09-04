import { WRONG_ANSWER, CORRECT_ANSWER } from '../constants/'

const generateRandomNumberExcluding = (cardSetLength, excludeIndex) => {
  let num = Math.floor(Math.random() * (cardSetLength));
  return (num === excludeIndex)? generateRandomNumberExcluding(cardSetLength, excludeIndex) : num;
}

const generateRandomNumberArray = (cardSetLength, excludeIndex) => {
    var arr = []
    while(arr.length < 3){
      let num = generateRandomNumberExcluding(cardSetLength, excludeIndex)
      if(arr.indexOf(num) > -1) continue;
      arr[arr.length] = num;
    }
    return arr
}

export const selectQuizCards = (cardSet, cardSetIndex) => {
    let randomCardIndex = generateRandomNumberArray(cardSet.length, cardSetIndex)
    let quizSet = [];
    quizSet[0] = cardSet[cardSetIndex];
    quizSet[1] = cardSet[randomCardIndex.pop()]
    quizSet[2] = cardSet[randomCardIndex.pop()]
    quizSet[3] = cardSet[randomCardIndex.pop()]
    quizSet = chooseRightCard(quizSet, cardSetIndex)
    return scrambleCards(quizSet)
  }
  
  export const chooseRightCard = (cardSet, cardSetIndex) => {
    for(let i = 0; i < cardSet.length;i++){
        cardSet[i]['answer'] = false
    }
    cardSet[0]['answer'] = true
    return cardSet
  }
  
  export const scrambleCards = (cardSet) =>{
    for (let i = cardSet.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardSet[i], cardSet[j]] = [cardSet[j], cardSet[i]];
    }
    return cardSet;
  }