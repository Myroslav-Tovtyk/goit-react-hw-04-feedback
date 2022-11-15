import { useState } from 'react';
import Controls from './FeedbackControls/FeedbackControls';
import Section from './Statistics/Statistics';
import Value from './Value/Value';
import Notification from './Notification/Notification';
import { Container } from '../components/Global.styled';

export default function App() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const feedbacks = ['goodFeedback', 'neutralFeedback', 'badFeedback'];

  const handleFeedback = e => {
    const feedback = e.target.name;

    switch (feedback) {
      case 'goodFeedback':
        setGoodFeedback(prev => prev + 1);
        break;
      case 'neutralFeedback':
        setNeutralFeedback(prev => prev + 1);
        break;
      case 'badFeedback':
        setBadFeedback(prev => prev + 1);
        break;
      default:
        break;
    }
  };

  const Total = () => {
    return goodFeedback + neutralFeedback + badFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    if (Total() === 0) {
      return;
    } else {
      const percentPositive = Math.round((goodFeedback / Total()) * 100);
      return percentPositive;
    }
  };

  return (
    <Container>
      <Controls options={feedbacks} onLeaveFeedback={handleFeedback} />

      <Section title="Statistics:">
        {Total() ? (
          <Value
            good={goodFeedback}
            neutral={neutralFeedback}
            bad={badFeedback}
            total={Total()}
            positive={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedbacks yet:(" />
        )}
      </Section>
    </Container>
  );
}
