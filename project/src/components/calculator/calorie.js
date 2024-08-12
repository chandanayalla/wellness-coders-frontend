import React, { useState } from 'react';

function CalorieCalculator() {
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('1.2');
  const [calories, setCalories] = useState(null);

  const calculateCalories = () => {
    const calorieNeed = weight * activityLevel * 24;
    setCalories(calorieNeed.toFixed(2));
  };

  return (
    <div>
      <h2>Calorie Needs Calculator</h2>
      <label>Weight (kg):</label>
      <input 
        type="number" 
        value={weight} 
        onChange={(e) => setWeight(e.target.value)} 
      />
      <label>Activity Level:</label>
      <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
        <option value="1.2">Sedentary</option>
        <option value="1.375">Lightly active</option>
        <option value="1.55">Moderately active</option>
        <option value="1.725">Very active</option>
        <option value="1.9">Extremely active</option>
      </select>
      <button onClick={calculateCalories}>Calculate</button>
      {calories && <p>Your daily calorie needs: {calories} kcal</p>}
    </div>
  );
}

export default CalorieCalculator;