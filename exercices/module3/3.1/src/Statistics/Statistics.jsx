import StatisticsLine from "./StatisticsLine";

const Statistics = ({good, neutral, bad}) => {
    const total = good + neutral + bad;

    if (total === 0)return(
        <>
            <p>No feedback given</p>
        </>
    );

    const average = ((good * 1) + (neutral * 0) + (bad * (-1)))/total;
    const positive = good / total * 100;

    return (
        <>
            <StatisticsLine stat="good" value={good}></StatisticsLine>
            <StatisticsLine stat="neutral" value={neutral}></StatisticsLine>
            <StatisticsLine stat="bad" value={bad}></StatisticsLine>
            <StatisticsLine stat="total" value={total}></StatisticsLine>
            <StatisticsLine stat="average" value={average}></StatisticsLine>
            <StatisticsLine stat="positive" value={positive}></StatisticsLine>
        </>
    )
}

export default Statistics