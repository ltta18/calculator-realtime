import React from 'react';
import CalculatorKeyPadRow from './CalculatorKeyPadRow';

const CalculatorKeyPad = ({ onPressCalculator }) => {
  const KEY_PAD = [
    ['C', '←', '%', '/'],
    ['9', '8', '7', '*'],
    ['6', '5', '4', '-'],
    ['3', '2', '1', '+'],
    ['0', '.', '=']
  ]

  return (
    <div className="keypad">
      {KEY_PAD.map((row, i) => (
        <CalculatorKeyPadRow
          onPressCalculator={onPressCalculator}
          buttonContent={row}
          key={`row-${i}`}
        />
      ))}
    </div>
  );
}
export default CalculatorKeyPad;