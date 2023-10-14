import React, { Component } from 'react';
import Display from './Display';
import Button from './Button';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: '0',
      currentInput: '',
      previousInput: '',
      operator: null,
    };
  }

  handleDigitClick = (digit) => {
    const { currentInput, display } = this.state;
    if (display === '0') {
      this.setState({ display: digit, currentInput: digit });
    } else {
      this.setState({ display: display + digit, currentInput: currentInput + digit });
    }
  };

  handleOperatorClick = (operator) => {
    const { currentInput, previousInput } = this.state;
    if (currentInput !== '') {
      this.setState({ operator, previousInput: currentInput, currentInput: '' });
    }
  };

  handleEqualsClick = () => {
    const { currentInput, previousInput, operator } = this.state;
    if (previousInput !== '' && operator !== '' && currentInput !== '') {
      const result = this.calculate(previousInput, currentInput, operator);
      this.setState({
        display: result,
        previousInput: '',
        currentInput: result,
        operator: null,
      });
    }
  };

  handleClearClick = () => {
    this.setState({
      display: '0',
      currentInput: '',
      previousInput: '',
      operator: null,
    });
  };

  calculate = (num1, num2, operator) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
      case '+':
        return (num1 + num2).toString();
      case '-':
        return (num1 - num2).toString();
      case '*':
        return (num1 * num2).toString();
      case '/':
        return (num1 / num2).toString();
      default:
        return '';
    }
  };

  render() {
    const { display } = this.state;

    return (
        <center>
      <div className="calculator" >
        <Display value={display} />
        <div className="buttons">
          <div className="row">
            <Button label="7" onClick={() => this.handleDigitClick('7')} />
            <Button label="8" onClick={() => this.handleDigitClick('8')} />
            <Button label="9" onClick={() => this.handleDigitClick('9')} />
            <Button label="+" onClick={() => this.handleOperatorClick('+')} />
          </div>
          
          <div className="row">
            
            <Button label="4" onClick={() => this.handleDigitClick('4')} />
            <Button label="5" onClick={() => this.handleDigitClick('5')} />
            <Button label="6" onClick={() => this.handleDigitClick('6')} />
            <Button label="-" onClick={() => this.handleOperatorClick('-')} />
            
          </div>
         
          <div className="row">
            <Button label="1" onClick={() => this.handleDigitClick('1')} />
            <Button label="2" onClick={() => this.handleDigitClick('2')} />
            <Button label="3" onClick={() => this.handleDigitClick('3')} />
            <Button label="*" onClick={() => this.handleOperatorClick('*')} />
          </div>
          
          <div className="row">
            <Button label="0" onClick={() => this.handleDigitClick('0')} />
            <Button label="C" onClick={() => this.handleClearClick()} />
            <Button label="=" onClick={() => this.handleEqualsClick()} />
            <Button label="/" onClick={() => this.handleOperatorClick('/')} />
          </div>
        </div>
      </div>
      </center>
    );
  }
}

export default Calculator;
