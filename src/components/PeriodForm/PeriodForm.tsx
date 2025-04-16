import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPeriod } from '../../features/period/periodSlice';
import { AppDispatch } from '../../store';
import './PeriodForm.css';

const PeriodForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!startDate || !endDate) return;

    dispatch(addPeriod({ startDate, endDate }));
    setStartDate('');
    setEndDate('');
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
      <button type="submit">Add Period</button>
    </form>
  );
};

export default PeriodForm;