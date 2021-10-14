import { Component } from 'react';
import './App.css';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickBtnFeedback = e => {
    const nameState = e.currentTarget.textContent;

    this.setState(prevState => ({
      ...prevState,
      [nameState]: prevState[nameState] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { onClickBtnFeedback } = this;
    const feedbacks = Object.keys(this.state);
    const totalFeedbacks = feedbacks.reduce(
      (acc, el) => acc + this.state[el],
      0,
    );
    const positivePercentage = Math.round((good / totalFeedbacks) * 100);

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbacks}
            onLeaveFeedback={onClickBtnFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedbacks === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbacks}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
