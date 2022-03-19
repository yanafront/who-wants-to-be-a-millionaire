import React, {useState} from 'react';
import './App.scss';
import Start from "./components/game/GameStart";
import GameWindow from "./components/game/GameWindow";
import GameOver from "./components/game/GameOver";

export const App = () => {
  const [isGameOn, setIsGameOn] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [result, setResult] = useState("");

  const setResultGame = (val: string) => {
    setResult(val);
  }

  const data = [
    {
      id: 1,
      question: "How old your elder brother was 10 years before you was born, mate?",
      answers: [
        {
          text: "10 years",
          correct: false
        },
        {
          text: "11 years",
          correct: true
        },
        {
          text: "12 years",
          correct: false
        },
        {
          text: "14 years",
          correct: false
        }
      ]
    },
    {
      id: 2,
      question: "Who is the current President of US?",
      answers: [
        {
          text: "Joe Biden",
          correct: true
        },
        {
          text: "Donald Trump",
          correct: false
        },
        {
          text: "Barack Obama",
          correct: false
        },
        {
          text: "Hilary Clinton",
          correct: false
        }
      ]
    },
    {
      id: 3,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    }
  ];
  return (
    <div className="main">
      {isGameOver ? (
          <GameOver prizeMoney={result} setIsGameOn={() => {setIsGameOn(true); setIsGameOver(false);}} />
      ) : isGameOn ? (
            <GameWindow
                data={data}
                setResultGame={setResultGame}
                setStopGame={(val) => setIsGameOver(val)}
            />
        ) : (
            <Start setIsGameOn={() => {setIsGameOn(true);}} />
        )}
    </div>
  );
}

export default App;
