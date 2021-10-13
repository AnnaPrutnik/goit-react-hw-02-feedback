import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <button
      key={`btn-${option}`}
      className={s.button}
      type="button"
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));
}

export default FeedbackOptions;
