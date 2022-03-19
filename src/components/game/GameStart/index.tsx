import HandIcon from "../../icons/Hand";
import React from "react";

interface StartProps {
    setIsGameOn?: () => void
}

export const Start = ({ setIsGameOn }: StartProps) => {
    return (
        <div className="game-window">
            <div className="game-window__content">
                <HandIcon className="game-window__img" />
                <div className="game-window__container">
                    <div className="title">
                        Who wants to be a millionaire?
                    </div>
                    <button className="button" onClick={setIsGameOn}>
                        Start
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Start;
