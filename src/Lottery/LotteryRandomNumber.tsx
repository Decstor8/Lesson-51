interface Props {
 randomNumber: number;
}

const LotteryRandomNumber: React.FC<Props> = ({randomNumber}) => {
    return (
        <div className="lottery-random-number">
            <span>{randomNumber}</span>
        </div>
    );
};

export default LotteryRandomNumber;