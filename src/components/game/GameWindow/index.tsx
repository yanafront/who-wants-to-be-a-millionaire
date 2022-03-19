import GameQuestion from "../GameQuestion";
import {useEffect, useState} from "react";
import GameMoneyPyramid from "../GameMoneyPyramid";
import CloseIcon from "../../icons/Close";
import MenuIcon from "../../icons/Menu";
interface GameWindowProps {
    data: any,
    setResultGame?: (val: string) => any,
    setStopGame: (val: boolean) => any,
}
export const GameWindow = ({ data, setResultGame, setStopGame }: GameWindowProps) => {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [stop, setStop] = useState(false);

    useEffect(() => {
        if (!data[questionNumber] || stop) {
            setStopGame(true);
        }
    }, [questionNumber, stop]);
    return (
        <div className="game">
            <GameQuestion
                data={data[questionNumber]}
                setStop={setStop}
                setQuestionNumber={setQuestionNumber}
            />
            <div
                onClick={() => setIsOpenMenu(!isOpenMenu)}
                className={`${isOpenMenu ? "menu-open" : "menu-button"}`}
            >
                {isOpenMenu ? <CloseIcon /> : <MenuIcon />}
            </div>
            <GameMoneyPyramid
                questionNumber={questionNumber}
                setResultGame={setResultGame}
                countQuestions={data?.length}
            />
        </div>
    )
}

export default GameWindow;
