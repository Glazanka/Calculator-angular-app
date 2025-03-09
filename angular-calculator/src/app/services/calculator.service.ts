import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  calculate(expression: string): number {
    try {
      return eval(expression);
    } catch (error) {
      console.error('Invalid expression:', expression);
      return 0;
    }
  }
}
