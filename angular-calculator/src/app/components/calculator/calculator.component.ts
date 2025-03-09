import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  templateUrl: './calculator.component.html',
  imports: [CommonModule],
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  displayValue: string = '0';
  buttons: string[] = [
    ' ', ' ', 'C','/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    ' ', '0', '.', '='
  ];
  warningMessage: string = ''; 

  onButtonClick(button: string): void {
    if (this.displayValue === 'Error' || this.displayValue === 'Infinity') {
      this.displayValue = ''; 
    }

    if (button === 'C') {
      this.displayValue = '0';
      this.warningMessage = '';
    } else if (button === '⌫') {
      this.displayValue = this.displayValue.slice(0, -1) || '0';
      this.warningMessage = '';
    } else if (button === '=') {
      try {
        this.displayValue = this.evaluateExpression(this.displayValue);
      } catch {
        this.displayValue = 'Error';
      }
      this.warningMessage = '';
    } else {
      if (this.displayValue.length >= 10) {
        this.warningMessage = 'Maximum input length reached!';
        return;
      }


      const lastChar = this.displayValue.slice(-1);
      if (['+', '-', '*', '/'].includes(button) && ['+', '-', '*', '/'].includes(lastChar)) {
        this.displayValue = this.displayValue.slice(0, -1) + button; // Replace operator
      } 

      else if (this.displayValue === '0' && !['.', '+', '-', '*', '/'].includes(button)) {
        this.displayValue = button;
      } else {
        this.displayValue += button;
      }
      this.warningMessage = '';
    }
  }
  private evaluateExpression(expression: string): string {
    try {
      let result = Function(`'use strict'; return (${expression})`)().toString();
  
      if (result.length > 10) {
        if (result.includes('.')) {
          result = parseFloat(result).toExponential(6);
        } else {
          result = result.slice(0, 10);
        }
      }
      
      return result;
    } catch {
      return 'Error';
    }
  }
  
}
