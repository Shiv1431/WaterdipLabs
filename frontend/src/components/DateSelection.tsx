import React from 'react';
import './DateSelection.css'; // Create this CSS file for styling

interface DateSelectionProps {
    startDate: Date | null;
    setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
    endDate: Date | null;
    setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

export const DateSelection: React.FC<DateSelectionProps> = ({ startDate, setStartDate, endDate, setEndDate }) => {
    return (
        <div className="date-picker-container">
            <h2>Select Date Range</h2>
            <input
                type="date"
                value={startDate ? startDate.toISOString().split('T')[0] : ''}
                onChange={(e) => setStartDate(new Date(e.target.value))}
            />
            <input
                type="date"
                value={endDate ? endDate.toISOString().split('T')[0] : ''}
                onChange={(e) => setEndDate(new Date(e.target.value))}
            />
        </div>
    );
};
