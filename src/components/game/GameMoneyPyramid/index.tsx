import {useEffect, useMemo} from "react";
import ButtonIcon from "../../icons/Button";

interface GameMoneyPyramidProps {
    questionNumber: number | string,
    setResultGame?: any,
    countQuestions: number
}

export const GameMoneyPyramid = ({ questionNumber = 0, setResultGame, countQuestions }: GameMoneyPyramidProps) => {
    const MONEY_PYRAMID = [
        {
            id: 0,
            amount: "500",
        },
        {
            id: 1,
            amount: "1000",
        },
        {
            id: 2,
            amount: "2000",
        },
        {
            id: 3,
            amount: "4000",
        },
        {
            id: 4,
            amount: "8000",
        },
        {
            id: 5,
            amount: "16000",
        },
        {
            id: 6,
            amount: "32000",
        },
        {
            id: 7,
            amount: "64000",
        },
        {
            id: 8,
            amount: "125000",
        },
        {
            id: 9,
            amount: "250000",
        },
        {
            id: 10,
            amount: "500000",
        },
        {
            id: 11,
            amount: "1000000",
        },
    ];
    const moneyPyramid = useMemo(() => MONEY_PYRAMID.reverse(), []);

    const getFormatAmount = (value: string) => {
        return value.replace(/\B(?=(?:\d{3})+(?!\d))/g, ',')
    }

    useEffect(() => {
        const numberLastQuestion = countQuestions - 1 == questionNumber
            ? questionNumber
            : +questionNumber - 1;
        const val = MONEY_PYRAMID.find((el: any) => el.id == numberLastQuestion);
        setResultGame(getFormatAmount(val?.amount || "0"));
    }, [questionNumber]);

    return (
        <div className="game-menu">
            {moneyPyramid.map((item) => (
                <div
                    key={item.id}
                    className={questionNumber === item.id ? "game-menu__item game-menu__item_active" : "game-menu__item"}
                >
                    <ButtonIcon
                        className="game-menu__icon"
                        currentColor={questionNumber === item.id ? "#FF8B37" : "#D0D0D8"}
                    />
                    ${getFormatAmount(item.amount)}
                </div>
            ))}
        </div>
    )
}

export default GameMoneyPyramid;
