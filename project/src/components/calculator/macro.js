import React, { useState } from 'react';

function MacronutrientCalculator() {
  const [calories, setCalories] = useState('');
  const [proteinRatio, setProteinRatio] = useState('0.3');
  const [carbRatio, setCarbRatio] = useState('0.4');
  const [fatRatio, setFatRatio] = useState('0.3');
  const [macros, setMacros] = useState(null);

  const calculateMacros = () => {
    const protein = (calories * proteinRatio) / 4;
    const carbs = (calories * carbRatio) / 4;
    const fats = (calories * fatRatio) / 9;
    setMacros({ protein: protein.toFixed(2), carbs: carbs.toFixed(2), fats: fats.toFixed(2) });
  };

  return (
    <div>
      <h2>Macronutrient Ratio Calculator</h2>
      <label>Calories (kcal):</label>
      <input 
        type="number" 
        value={calories} 
        onChange={(e) => setCalories(e.target.value)} 
      />
      <label>Protein Ratio:</label>
      <input 
        type="number" 
        step="0.01" 
        value={proteinRatio} 
        onChange={(e) => setProteinRatio(e.target.value)} 
      />
      <label>Carb Ratio:</label>
      <input 
        type="number" 
        step="0.01" 
        value={carbRatio} 
        onChange={(e) => setCarbRatio(e.target.value)} 
      />
      <label>Fat Ratio:</label>
      <input 
        type="number" 
        step="0.01" 
        value={fatRatio} 
        onChange={(e) => setFatRatio(e.target.value)} 
      />
      <button onClick={calculateMacros}>Calculate</button>
      {macros && (
        <p>
          Protein: {macros.protein}g, Carbs: {macros.carbs}g, Fats: {macros.fats}g
        </p>
      )}
    </div>
  );
}

export default MacronutrientCalculator;