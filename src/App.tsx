import React from 'react';
import PeriodForm from './components/PeriodForm/PeriodForm';
import PeriodList from './components/PeriodList/PeriodList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="container">
    <h1>Period Menstruation Tracker</h1>
    <p className="intro">
      🌸 Understanding Menstruation: A Natural Part of Life<br/>
      Menstruation, or a period, is a normal and healthy part of the reproductive cycle. It happens when the uterus sheds its lining if pregnancy doesn’t occur.<br/><br/>
      Cycles usually last 21–35 days, with bleeding for 3–7 days. Common symptoms include cramps, mood changes, bloating, and fatigue.<br/><br/>
      Periods are nothing to be ashamed of — they’re a natural sign of health. Tracking your cycle helps you stay in tune with your body and supports overall well-being.
    </p>
    <PeriodForm />
    <PeriodList />
  </div>
  );
};

export default App;