import HandIcon from "../../icons/Hand";
import React from "react";

interface GameOverProps {
    setIsGameOn?: () => void,
    prizeMoney?: string
}

export const GameOver = ({ setIsGameOn, prizeMoney = "0" }: GameOverProps) => {
    return (
        <div className="game-window game-window_silver">
            <div className="game-window__content">
                <HandIcon className="game-window__img" />
                <div className="game-window__container">
                    <div className="subtitle">Total score:</div>
                    <div className="title">
                        ${prizeMoney} earned
                    </div>
                    <button className="button" onClick={setIsGameOn}>
                        Try again
                    </button>
                </div>
            </div>
        </div>
    )
};

export default GameOver;
