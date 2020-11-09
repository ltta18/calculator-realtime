import React, { useState } from 'react';
import CalculatorComputation from './CalculatorComputation';
import CalculatorKeyPad from './CalculatorKeyPad';
import CalculatorResult from './CalculatorResult';
import './index.css';

const Calculator = ({ socket }) => {
  const [equation, setEquation] = useState('');
  const [result, setResult] = useState('');

  const onPressCalculator = (e) => {
    const button = e.target.id;
    let newEquation = equation;
    if (button === 'C') {
      setResult('');
      newEquation = '';
    }
    
    else if ((button >= '0' && button <= '9') || button === '.') newEquation += button
    else if (['+', '-', '*', '/', '%'].indexOf(button) !== -1) {
      if (['+', '-', '*', '/', '%'].includes(newEquation[newEquation.length-2])) newEquation = newEquation.substr(0, newEquation.length - 3);
      newEquation += ' ' + button + ' ';
    }
    else if (button === '=') {
      try {
        const evalResult = eval(newEquation);
        const result = Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(2);
        setResult(result)
        socket.emit('equation-submit', [localStorage.getItem('name'), `${newEquation} = ${result}`])
      } catch (error) {
        alert('Invalid Mathematical Equation');
      }
    }
    else if (button === '←') {
      newEquation = newEquation.trim();
      newEquation = newEquation.substr(0, newEquation.length - 1);
      newEquation = newEquation.trim();
    }
    else {
      console.log("Invalid input")
    }
    setEquation(newEquation);

  }

  return (
    <div className="calculator">
      <div className="calculator-body">
        <CalculatorResult result={result} />
        <CalculatorComputation equation={equation} />
        <CalculatorKeyPad onPressCalculator={onPressCalculator}/>
      </div>
    </div>
  );
}
 
export default Calculator;