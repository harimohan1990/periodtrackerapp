import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/index';
import { deletePeriod } from '../../features/period/periodSlice';
import './PeriodList.css';

const PeriodList: React.FC = () => {
  const periods = useSelector((state: RootState) => state.period.entries);
  const dispatch = useDispatch<AppDispatch>();

  const handleDownload = () => {
    // CSV header
    const headers = ["Start Date", "End Date", "Symptoms"];
    
    // Convert periods to CSV format
    const csvRows = [
      headers.join(','),  // Header row
      ...periods.map(period => [
        period.startDate,
        period.endDate,
        period.symptoms ? period.symptoms.join('; ') : ''
      ].join(','))
    ];

    // Convert to string and prepare for download
    const csvString = csvRows.join('\n');
    const dataStr = "data:text/csv;charset=utf-8," + encodeURIComponent(csvString);
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "period-log.csv");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
  };

  return (
    <div className="list">
      <h2>Logged Periods</h2>
      <ul>
        {periods.map((entry, idx) => (
          <li key={idx} className="list-item">
            <span>{entry.startDate} → {entry.endDate}</span>
            <button onClick={() => dispatch(deletePeriod(idx))}>Delete</button>
          </li>
        ))}
      </ul>
      {periods.length > 0 && (
        <button className="download-button" onClick={handleDownload}>
          Download Data as CSV
        </button>
      )}
    </div>
  );
};

export default PeriodList;
