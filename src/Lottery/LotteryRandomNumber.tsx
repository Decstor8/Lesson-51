import './LotteryRandomNumber.css'

interface Props {
 randomNumber: number;
}

const LotteryRandomNumber: React.FC<Props> = ({randomNumber}) => {
    return (
            <div className="lottery-random-number box bounce-2">
                <span>{randomNumber}</span>
            </div>
    );
};

export default LotteryRandomNumber;