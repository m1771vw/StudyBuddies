import React, { Component } from 'react';
import { DASHBOARD, CREATE_VIEW, QUIZ, VIEW_SET } from '../constants'
import { func } from 'prop-types';

const CORRECT_ANSWER = '2px solid green'
const WRONG_ANSWER = '2px solid red'
// const flashCard = (value, isCorrect, isWrong) => {
//     if(isWrong){
//     return(<div onClick={isCorrect} style={{border: CORRECT_ANSWER}} className="box flashcard-box">
//                         <h1>Flashcard RIGHT</h1>
//     </div>
//     )
//     } else{
//         return(<div onClick={isCorrect} style={{border: WRONG_ANSWER}} className="box flashcard-box">
//                         <h1>Flashcard WRONG</h1>
//                 </div>
//         )
//     }
    
// }
let cards = [
    {
        "term" : "WWII",
        "definition" : "Heil Hitler",

    },
    {
        "term" : "china #2",
        "definition" : "taiwan #1",

    },
    {
        "term" : "9/11",
        "definition" : "ALU AHKBAR",

    },
    {
        "term" : "Trump Inauguration",
        "definition" : "Did this really happen?",

    }

]
var randomNumber = Math.floor(Math.random()*3)
const chooseRightCard = (cards) => {

    for(let i = 0; i < cards.length;i++){
        cards[i]['answer'] = WRONG_ANSWER
    }
    cards[randomNumber]['answer'] = CORRECT_ANSWER
    return cards
}



const scrambleArray = (cards) =>{
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
}

cards = scrambleArray(cards)
cards = chooseRightCard(cards)

class Quiz extends Component {
    state={
        cardSelectedBorder: '',
        cards: cards,
        // cards : [
        //     {
        //         "term" : "WWII",
        //         "definition" : "Heil Hitler",
        //         "answer": WRONG_ANSWER
        //     },
        //     {
        //         "term" : "china #2",
        //         "definition" : "taiwan #1",
        //         "answer": CORRECT_ANSWER
        //     },
        //     {
        //         "term" : "9/11",
        //         "definition" : "ALU AHKBAR",
        //         "answer": WRONG_ANSWER
        //     },
        //     {
        //         "term" : "Trump Inauguration",
        //         "definition" : "Did this really happen?",
        //         "answer": WRONG_ANSWER
        //     }
        // ],
        randomNumber: Math.floor(Math.random() * 3),
        userHasChosen: false
    }
    checkAnswer = () => {
        console.log("Clicking flashcard 1")
        this.setState({
            cardSelectedBorder: WRONG_ANSWER
        })
    }

    answerClicked = () => {

        this.setState({
            userHasChosen: !this.state.userHasChosen
        })
    }
    render() {
    return (
        <div>
            <div className="level level-set">
                <div className="box flashcard-box">
                        <h1>{this.state.cards[randomNumber].term}</h1>
                    </div>
                </div>
            <div className='level level-flashcards'>
                {this.state.userHasChosen? 
                this.state.cards.map( (card,index) => {
                    return(
                        <div key={card.term+index} className='level-item level-right'>
                        <div onClick={this.answerClicked} style={{border: this.state.cards[index].answer}} className="box flashcard-box">
                            <h1>{card.definition}</h1>
                        </div>
                    </div> 
                    )
                }): this.state.cards.map( (card,index) => {
                    return(
                        <div key={card.term+index} className='level-item level-right'>
                        <div onClick={this.answerClicked} className="box flashcard-box">
                            <h1>{card.definition}</h1>
                        </div>
                    </div>
                )})}
            
            </div>
        </div>
    );

}
}

Quiz.propTypes = {
    changePageName: func,
};


export default Quiz;