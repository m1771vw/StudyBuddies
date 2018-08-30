import React, { Component } from 'react';
import { VIEW_SET } from '../constants'
class QuizResults extends Component {
    render() {
        return (
            <div>
                <h1>You reached the end of the quiz</h1>
                <button onClick={() => {this.props.changePageName(VIEW_SET)}}>Return to Card Set</button>
            </div>
        );
    }
}

QuizResults.propTypes = {

};

export default QuizResults;