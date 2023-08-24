import React, { useState } from 'react';
import css from '../Feedbak/Feedbackm.module.css';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbakOptions/FeedbakOptions';
import Section from '../Section/Section';
import Notification from 'components/Notification/Notification';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = type => {
    type === 'good'
      ? setGood(prevGood => prevGood + 1)
      : type === 'neutral'
      ? setNeutral(prevNeutral => prevNeutral + 1)
      : setBad(prevBad => prevBad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : (good / total) * 100;
  };

  const total = countTotalFeedback();

  return (
    <div className={css.feedbackContainer}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleClick}
        />
      </Section>
      {total > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </div>
  );
};

export default Feedback;




// .feedbackContainer {
  
//   flex-direction: column;
//   align-items: center;
//   margin-top: 20px;
//   background-color: rgb(255, 255, 255);
//   border: 1px solid rgb(204, 204, 204);
//   padding: 20px;
// }




// .please{
//   font-size: 24px;
//   margin-bottom: 20px;
// }