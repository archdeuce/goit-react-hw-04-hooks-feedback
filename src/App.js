import './App.css';
import { useState } from 'react';
import Section from './components/Section/';
import Statistics from './components/Statistics/';
import FeedbackOptions from './components/FeedbackOptions/';

export default function App() {
  const [bad, setBad] = useState(0);
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const onLeaveFeedback = value => {
    switch (value) {
      case 'bad':
        setBad(state => state + 1);
        break;
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (good / (good + neutral + bad)) * 100;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage().toFixed(0);

  const options = [
    { id: 'id-1', name: 'Good', value: 'good' },
    { id: 'id-2', name: 'Neutral', value: 'neutral' },
    { id: 'id-3', name: 'Bad', value: 'bad' },
  ];

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </div>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   feedbackChanged = newState => {
//     setState({ newState });
//   };

//   onLeaveFeedback = value => {
//     setState(prevState => {
//       return { [value]: prevState[value] + 1 };
//     });
//   };

//   countTotalFeedback = () => {
//     let { good, neutral, bad } = state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     let { good, neutral, bad } = state;

//     return (good / (good + neutral + bad)) * 100;
//   };

//   render() {
//     const { good, neutral, bad } = state;
//     const total = countTotalFeedback();
//     const positivePercentage = countPositiveFeedbackPercentage().toFixed(
//       0,
//     );

//     const options = [
//       { id: 'id-1', name: 'Good', value: 'good' },
//       { id: 'id-2', name: 'Neutral', value: 'neutral' },
//       { id: 'id-3', name: 'Bad', value: 'bad' },
//     ];

//     return (
//       <div className="App">
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={onLeaveFeedback}
//           />

//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={positivePercentage}
//             onChanged={feedbackChanged}
//           />
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
