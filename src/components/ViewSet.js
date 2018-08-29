import React, { Component } from 'react';


const Viewset = props => {
    return (
        <div>
            <div className="level level-set">
                <div className="box setname-box">
                    <h1>SET NAME</h1>
                </div>
                <a className="button is-danger" onClick={this.showCreate}>Edit</a>
                <a className="button is-success" onClick={this.showQuiz}>Quiz!</a>
                <div className="box description-box">
                    <h1>This will be the description box</h1>
                </div>
            </div>

            <div className="level level-flashcards">
                <div className="box flashcard-box">
                    <h1>Flashcard 1</h1>
                </div>

                <div className="box flashcard-box">
                    <h1>Flashcard 2</h1>
                </div>

                <div className="box flashcard-box">
                    <h1>Flashcard 3</h1>
                </div>
            </div>
        </div>
    );

}

Viewset.propTypes = {

};


export default Viewset