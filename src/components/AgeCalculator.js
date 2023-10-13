import React, { useState } from 'react';

const AgeCalculator = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [age, setAge] = useState(null);

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
  };

  const calculateAge = () => {
    if (!selectedDate) return null;

    const today = new Date();
    const birthDate = new Date(selectedDate);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years} years, ${months} months, ${days} days`;
  };

  const handleCalculateAge = () => {
    const calculatedAge = calculateAge();
    if (calculatedAge) {
      setAge(calculatedAge);
    }
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <div>
        <label htmlFor="dateInput">Select your birth date:</label>
        <input
          type="date"
          id="dateInput"
          value={selectedDate || ''}
          onChange={handleDateChange}
        />
        <button onClick={handleCalculateAge}>Calculate Age</button>
      </div>

      {age && (
        <div id="displayAge">
          <h2>Age:</h2>
          <p>{age}</p>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;