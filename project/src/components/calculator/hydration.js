import React, { useState } from 'react';

function HydrationCalculator() {
  const [weight, setWeight] = useState('');
  const [hydration, setHydration] = useState(null);

  const calculateHydration = () => {
    const waterIntake = weight * 0.033;
    setHydration(waterIntake.toFixed(2));
  };

  return (
    <div>
      <h2>Hydration Calculator</h2>
      <label>Weight (kg):</label>
      <input 
        type="number" 
        value={weight} 
        onChange={(e) => setWeight(e.target.value)} 
      />
      <button onClick={calculateHydration}>Calculate</button>
      {hydration && <p>You should drink: {hydration} liters of water per day</p>}
    </div>
  );
}

export default HydrationCalculator;