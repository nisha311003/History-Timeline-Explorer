import { Button } from '@mui/material';
import React from 'react'
import { useState, useEffect} from 'react';
function MughalEmpire_MCQ() {
    const questions = [
        {
          question: '1). Who founded the Mughal Empire?',
          options: ['Shah Jahan', 'Aurangzeb', 'Babur', 'Akbar'],
          correctAnswer: 'Babur',
        },
        {
          question: '2). Which Mughal Emperor is known for promoting religious tolerance and cultural synthesis?',
          options: ['Humayun', 'Jahangir', 'Akbar', 'Aurangzeb'],
          correctAnswer: 'Akbar',
        },
        {
            question: '3). What was the primary reason for the decline of the Mughal Empire in the 18th century?',
            options: ['Internal conflict', 'Economic instability', 'External invasion', 'All of the above'],
            correctAnswer: 'All of the above',
        },
        {
            question: '4). Which Mughal Emperor is known for commissioning the Taj Mahal?',
            options: ['Babur', 'Jahangir', 'Akbar', 'Shah Jahan'],
            correctAnswer: 'Shah Jahan',
        },
        {
            question: '5). Who succeeded Babur as the second Mughal Emperor?',
            options: ['Humayun', 'Jahangir', 'Akbar', 'Aurangzeb'],
            correctAnswer: 'Humayun',
        },
        {
            question: '6). Which Mughal Emperors reign is considered the "Golden Age" of the Mughal Empire?',
            options: ['Babur', 'Jahangir', 'Akbar', 'Shah Jahan'],
            correctAnswer: 'Akbar',
        },
        {
            question: '7). Who was Jahangirs influential wife during his reign?',
            options: ['Nur Jahan', 'Mumtaz Mahal', 'Jodha Bai', 'Noor Inayat Khan'],
            correctAnswer: ' Nur Jahan',
        },
        {
            question: '8). What architectural wonder is synonymous with Shah Jahans reign?',
            options: ['Red Fort', 'Jama Masjid', 'Taj Mahal', 'Agra Fort'],
            correctAnswer: 'Taj Mahal',
        },
        {
            question: '9). What event marked the beginning of British colonial rule in India, leading to the end of the Mughal Empire?',
            options: ['Battle of Plassey', 'Battle of Buxar', 'Indian Rebellion of 1857', 'Sepoy Mutiny'],
            correctAnswer: 'Indian Rebellion of 1857',
        },
        {
            question: '10). Which Mughal Emperor expanded the empire to its greatest territorial extent but implemented more orthodox Islamic policies?',
            options: ['Aurangzeb', 'Jahangir', 'Akbar', 'Shah Jahan'],
            correctAnswer: 'Aurangzeb',
        },
        
      ];
    
      // State to keep track of user answers
      const [userAnswers, setUserAnswers] = useState(new Array(questions.length).fill(''));
      
      // State to keep track of correct answers
      const [correctAnswers, setCorrectAnswers] = useState(new Array(questions.length).fill(false));
     
      const [answerStatus, setAnswerStatus] = useState(new Array(questions.length).fill(''));

       // State to keep track of score
      const [score, setScore] = useState(0);

       // State to keep track of remaining time
      const [remainingTime, setRemainingTime] = useState(60); // 60 seconds = 1 minute

      // Function to handle user's answer selection
      const handleAnswerSelection = (questionIndex, selectedOption) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[questionIndex] = selectedOption;
        setUserAnswers(updatedAnswers);
      };
    
      // Function to submit the quiz
      const handleSubmitQuiz = () => {
        const updatedAnswerStatus = userAnswers.map((userAnswer, index) => {
          return userAnswer === questions[index].correctAnswer ? 'correct' : 'incorrect';
        });
        setAnswerStatus(updatedAnswerStatus);

        // Calculate score
        const newScore = updatedAnswerStatus.reduce((acc, status) => {
          return status === 'correct' ? acc + 1 : acc;
        }, 0);
        setScore(newScore);
        console.log(score);
        console.log('User Answers:', userAnswers);
      }

      const allQuestionsAnswered = userAnswers.every(answer => answer !== ''); 
      
      // Countdown timer effect
      useEffect(() => {
        if (remainingTime > 0) {
          const timer = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 1);
          }, 1000);

          return () => clearInterval(timer);
        } else {
          handleSubmitQuiz();
        }
      }, [remainingTime]); // Run effect whenever remainingTime changes
      
      
  return (
    <div style={{ position: 'relative' }}>
      <h1 style={{marginLeft:'20vw'}}>Multiple Choice Quiz</h1>
      <form>
        {questions.map((question, index) => (
          <div key={index}>
            <p style={{ fontWeight: 'bold' }}>{question.question}</p>
            {question.options.map((option, optionIndex) => (
              <label 
              key={optionIndex} 
              style={{
                color:
                  userAnswers[index] === option
                    ? answerStatus[index] === 'correct'
                      ? 'green'
                      : answerStatus[index] === 'incorrect'
                      ? 'red'
                      : 'inherit'
                    : 'inherit',
              }}
              >
                <input
                  type="radio"
                  name={`question${index}`}
                  value={option}
                  checked={userAnswers[index] === option}
                  onChange={() => handleAnswerSelection(index, option)}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <Button variant='contained' style={{margin:'7vw auto', display:'block'}} onClick={handleSubmitQuiz} disabled={!allQuestionsAnswered}>
          Submit Quiz
        </Button>
      </form>
      <p style={{ position: 'absolute', top: '-10px', right: '20px', fontWeight:'bold' }}>Time Left: {remainingTime} seconds</p>
      <p style={{ position: 'absolute', top: '20px', right: '20px', fontWeight:'bold' }}>Score: {score} / {questions.length}</p>
    </div>
  )
}

export default MughalEmpire_MCQ
