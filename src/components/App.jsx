import { useState } from 'react';
import { Box } from './App.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onElementClick = e => {
    switch (e.target.value) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  const totalFeedbacks = good + neutral + bad;
  const feedbackPercentage = Math.floor((good / totalFeedbacks) * 100);
  const options = Object.keys({ good, neutral, bad });

  return (
    <Box>
      <Section
        title="Please leave feedback"
        children={
          <FeedbackOptions options={options} onLeaveFeedback={onElementClick} />
        }
      />
      <Section
        title="Statistics"
        children={
          totalFeedbacks > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbacks}
              positiveFeedback={feedbackPercentage}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )
        }
      />
    </Box>
  );
};
