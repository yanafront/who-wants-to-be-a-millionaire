import React, {useState} from "react";
import icon from "../../../images/border-color.svg";
import iconHover from "../../../images/border-hover.svg";
import iconSelect from "../../../images/border-select.svg";
import iconCorrect from "../../../images/border-correct.svg";
import iconError from "../../../images/border-error.svg";

interface GameQuestionProps {
    id: string | number,
    question: string,
    answers: { text: string, correct: boolean }[]
}

interface GameQuestionParams {
    data: GameQuestionProps,
    setStop: (val: any) => any,
    setQuestionNumber: (val: any) => any
}

export const GameQuestion = ({data, setStop, setQuestionNumber }: GameQuestionParams) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("");
    const ANSWER_CHOICE_MARKERS = ['a', 'b', 'c', 'd'];

    const delay = (duration: any, callback: any) => {
        setTimeout(() => {
            callback();
        }, duration);
    }

    const handleClick = (a: any) => {
        setSelectedAnswer(a);
        setClassName("active");
        delay(3000, () =>
            setClassName(a.correct ? "correct" : "wrong")
        );
        delay(5000, () => {
            if (a.correct) {
                return delay(1000, () => {
                    setQuestionNumber((prev: any) => prev + 1);
                    setSelectedAnswer(null);
                });
            }

            return delay(1000, () => {
                setStop(true);
            });
        });
    }

    const getImgBorder = (value: boolean) => {
        if (!value) {
            return icon;
        }

        if (className == "active") {
            return iconSelect;
        }

        if (className == "wrong") {
            return iconError;
        }

        if (className == "correct") {
            return iconCorrect;
        }
    }

    return (
        <div className="game-question">
            <div className="question-title">
                {data?.question}
            </div>
            <div className="answers">
                {data?.answers.map((a, index) => (
                    <div
                        key={index}
                        className={selectedAnswer === a ? `answer ${className}` : "answer"}
                        onClick={() => handleClick(a)}
                    >
                        <img className="answer__border" src={getImgBorder(selectedAnswer === a)} />
                        <img className="answer__border answer__border_hover" src={iconHover} />
                        <div className="answer__text">
                            <span className="answer__marker">
                                {ANSWER_CHOICE_MARKERS[index]}
                            </span>
                            {a.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GameQuestion;
