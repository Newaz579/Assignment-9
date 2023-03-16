import React from 'react';
import './QuizDetails.css'
import { CheckBadgeIcon, EyeIcon } from '@heroicons/react/24/solid';

const QuizDetails = ({ quizDetails }) => {
    const { options, id, question, correctAnswer } = quizDetails;
    const showCorrectAnswer = (selectOption) => {
        if (correctAnswer === selectOption) {
            alert('Right');
        }
        else {
            alert('Wrong');
        }
    }
    const notify = () => {
        alert(correctAnswer);
    }

    return (
        <div className='quiz-box'>
            <h3>
                {question}
                <EyeIcon onClick={notify} className="eye-size" />
            </h3>
            {
                options.map(option => <p className='option-box'>
                    <button className='check-button' onClick={() => showCorrectAnswer(option)}>
                        <CheckBadgeIcon className="eye-figure" />
                    </button>
                    <strong>{option}</strong>
                </p>)
            }
        </div>
    );
};

export default QuizDetails;