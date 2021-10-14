import s from './Statistics.module.css';
import PropTypes from 'prop-types';

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

Statistics.propTypes = {
  positivePercentage: PropTypes.number,
  feedbacks: PropTypes.object,
};

export default Statistics;
