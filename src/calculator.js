import React, { useState } from 'react';
//se debe importar el nuevo CSS
import './calculator.css';
import * as math from 'mathjs';

function Calculator() {
  const [display, setDisplay] = useState('');

  function handleClick(e) {
    const value = e.target.value;

    if (value === '=') {
      try {
        const result = math.evaluate(display);
        setDisplay(result);
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  }

  return (
    <div className="calculator">
      <div className="title-container">
      <h1 className="title">Calculadora</h1>
    </div>
      <input type="text" value={display} disabled />
      <button value="7" onClick={handleClick}>7</button>
      <button value="8" onClick={handleClick}>8</button>
      <button value="9" onClick={handleClick}>9</button>
      <button value="+" onClick={handleClick}>+</button>
      <button value="4" onClick={handleClick}>4</button>
      <button value="5" onClick={handleClick}>5</button>
      <button value="6" onClick={handleClick}>6</button>
      <button value="-" onClick={handleClick}>-</button>
      <button value="1" onClick={handleClick}>1</button>
      <button value="2" onClick={handleClick}>2</button>
      <button value="3" onClick={handleClick}>3</button>
      <button value="*" onClick={handleClick}>*</button>
      <button value="0" onClick={handleClick}>0</button>
      <button value="." onClick={handleClick}>.</button>
      <button value="/" onClick={handleClick}>/</button>
      <button value="C" onClick={handleClick}>C</button>
      <button value="=" onClick={handleClick}>=</button>
      <p>by darsito92</p>
    </div>
    
  );
}

//debes exportar la funcion sino aunque esta definida no se usa
export default Calculator;
//https://github.com/darsito92
//esta calculadora se realizo por Diego Sepulveda Temuco Chile 18-3-2023 
//usarla para fines que estime conveniente