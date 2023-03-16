import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const quiz = useLoaderData();
    const allQuiz = quiz.data.questions;
    return (
        <div>
            <h1>Here is {allQuiz.length} Quiz about {quiz.data.name}.</h1>
            {
                allQuiz.map(quizDetails => <QuizDetails
                key={quizDetails.id}
                quizDetails={quizDetails}
                ></QuizDetails>)
            }            
        </div>
    );
};

export default Quiz;