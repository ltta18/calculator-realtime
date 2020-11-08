import React from 'react';

const CalculatorResult = ({ result }) => (
  <div className="result-screen">
    {result ? result : '0'}
  </div>
);

export default CalculatorResult;