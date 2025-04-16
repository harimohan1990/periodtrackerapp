import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPeriod } from '../../features/period/periodSlice';
import { AppDispatch } from '../../store';
import './PeriodForm.css';

const PeriodForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [mood, setMood] = useState('happy'); // default mood
  const [selectedDates, setSelectedDates] = useState<string[]>([]); // Track selected dates for multi-month calendar

  const handleDateClick = (date: string) => {
    if (selectedDates.length === 0) {
      setStartDate(date);
      setSelectedDates([date]);
    } else if (selectedDates.length === 1) {
      setEndDate(date);
      setSelectedDates([selectedDates[0], date]);
    } else {
      setStartDate(date);
      setEndDate('');
      setSelectedDates([date]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!startDate || !endDate || !mood) return;

    dispatch(addPeriod({ startDate, endDate, mood }));
    setStartDate('');
    setEndDate('');
    setMood('happy');
    setSelectedDates([]);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </div>
      <div>
        <label>End Date:</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>
      <div>
        <label>Mood:</label>
        <select value={mood} onChange={(e) => setMood(e.target.value)}>
          <option value="happy">😊 Happy</option>
          <option value="sad">😢 Sad</option>
          <option value="tired">😴 Tired</option>
          <option value="angry">😠 Angry</option>
          <option value="normal">🙂 Normal</option>
          <option value="stressed">😓 Stressed</option>
          <option value="relaxed">😌 Relaxed</option>
          <option value="moody">😤 Moody</option>
          <option value="energetic">💪 Energetic</option>
          <option value="cravings">🍫 Cravings</option>
        </select>
      </div>
      <button type="submit">Add Period</button>
    </form>
  );
};

export default PeriodForm;
