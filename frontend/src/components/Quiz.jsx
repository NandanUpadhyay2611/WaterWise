
 


import React, { useState, useEffect } from 'react';
import './Quiz.css';

const Quiz = ({ onReturn }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizEnded, setQuizEnded] = useState(false);



  const quizData = [
    {
      question: "What percentage of water can be saved by improving irrigation practices?",
      options: ["Up to 10%", "Up to 20%", "Up to 30%", "Up to 40%"],
      correct: 2
    },
    {
      question: "Which of the following is NOT a common method for improving irrigation efficiency?",
      options: ["Drip irrigation", "Sprinkler systems", "Flood irrigation", "Smart irrigation controllers"],
      correct: 2
    },
    {
      question: "In the context of water reuse, what does the term 'greywater' refer to?",
      options: ["Rainwater", "Wastewater from toilets", "Lightly used water from sinks and showers", "Purified drinking water"],
      correct: 2
    },
    {
      question: "Which sector typically consumes the largest percentage of freshwater globally?",
      options: ["Domestic use", "Industrial use", "Agricultural use", "Commercial use"],
      correct: 2
    },
    {
      question: "What is a simple method to reduce water use in household toilets?",
      options: ["Installing a bidet", "Using a dual-flush system", "Flushing more frequently", "Increasing water pressure"],
      correct: 1
    },
    {
      question: "Which of these plants is known for being drought-resistant and water-efficient in landscaping?",
      options: ["Orchids", "Succulents", "Ferns", "Water lilies"],
      correct: 1
    },
    {
      question: "What is the primary benefit of using mulch in gardens?",
      options: ["It adds nutrients to the soil", "It prevents weed growth", "It reduces water evaporation", "It attracts beneficial insects"],
      correct: 2
    },
    {
      question: "In agriculture, what does the term 'deficit irrigation' mean?",
      options: ["Overwatering crops", "Withholding water during drought-tolerant growth stages", "Irrigating only at night", "Using only rainwater for crops"],
      correct: 1
    },
    {
      question: "Which of these is an example of water reuse in an urban setting?",
      options: ["Using drinking water for car washing", "Collecting rainwater for garden irrigation", "Increasing the use of bottled water", "Draining swimming pools more frequently"],
      correct: 1
    },
    {
      question: "What is a 'smart' water meter?",
      options: ["A meter that automatically reduces water flow", "A device that purifies water", "A meter that provides real-time data on water usage", "A water bill calculator"],
      correct: 2
    }
  ];
  
  const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
    const [userAnswers, setUserAnswers] = useState([]);
    const [quizEnded, setQuizEnded] = useState(false);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            clearInterval(timer);
            endQuiz();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    const submitQuiz = () => {
      const selectedAnswer = document.querySelector('input[name="answer"]:checked');
      if (selectedAnswer) {
        const userAnswer = parseInt(selectedAnswer.value);
        setUserAnswers((prevAnswers) => [...prevAnswers, userAnswer]);
        if (userAnswer === quizData[currentQuestion].correct) {
          setScore((prevScore) => prevScore + 1);
        }
      } else {
        setUserAnswers((prevAnswers) => [...prevAnswers, null]);
      }
  
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      } else {
        endQuiz();
      }
    };
  
    const endQuiz = () => {
      setQuizEnded(true);
    };
  
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

























  if (quizEnded) {
    return (
      <div className="quiz-container">
        <h2>Water-Saving Techniques Quiz Completed!</h2>
        <p>Your score: {score} out of {quizData.length}</p>
        <h3>Question Summary:</h3>
        {quizData.map((question, index) => (
          <div key={index}>
            <p><strong>Question {index + 1}:</strong> {question.question}</p>
            <p className={userAnswers[index] === question.correct ? 'correct' : 'incorrect'}>
              Your answer: {userAnswers[index] !== null ? question.options[userAnswers[index]] : "Not answered"}
            </p>
            <p className="correct">Correct answer: {question.options[question.correct]}</p>
            <hr />
          </div>
        ))}
        <button onClick={onReturn}>Return to Homepage</button>
      </div>
    );
  }







  return (
    <div className="quiz-container">
      <h1>Water-Saving Techniques Quiz</h1>
      <div className="timer">Time left: {formatTime(timeLeft)}</div>
      <div className="question">
        <h2>Question {currentQuestion + 1}</h2>
        <p>{quizData[currentQuestion].question}</p>
        {quizData[currentQuestion].options.map((option, index) => (
          <div key={index}>
            <input type="radio" name="answer" value={index} id={`option${index}`} />
            <label htmlFor={`option${index}`}>{option}</label>
          </div>
        ))}
      </div>
      <button onClick={submitQuiz}>Submit Answer</button>
    </div>
  );
};
}
export default Quiz;

