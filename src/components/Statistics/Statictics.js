import s from './Statistics.module.css';

function Statistics({ positivePercentage, ...feedbacks }) {
  return (
    <ul className={s.list}>
      {Object.keys(feedbacks).map(feedback => (
        <li className={s.text} key={`stat-${feedback}`}>
          {feedback}: {feedbacks[feedback]}
        </li>
      ))}
      <li className={s.text}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
}

export default Statistics;
