import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importuj FormsModule

@Component({
  selector: 'app-kalkulator',
  standalone: true,
  imports: [FormsModule], // Přidej FormsModule sem
  templateUrl: './kalkulator.component.html',
  styleUrls: ['./kalkulator.component.css']
})
export class KalkulatorComponent {
  display: string = '0';
  firstOperand: number | null = null;
  operator: string | null = null;

  shouldClearDisplay: boolean = false;

  addToDisplay(value: string) {
    if (this.display === '0' || this.shouldClearDisplay) {
      this.display = value;
      this.shouldClearDisplay = false; // Resetujeme příznak
    } else {
      this.display += value;
    }
  }

  clearDisplay() {
    this.display = '0';
    this.firstOperand = null;
    this.operator = null;
  }

  operate(op: string) {
    if (this.firstOperand === null) {
      this.firstOperand = parseFloat(this.display);
    } else if (this.operator) {
      this.calculateResult();
      this.firstOperand = parseFloat(this.display);
    }
    this.operator = op;
    this.shouldClearDisplay = true; // Přidáme příznak, že displej má být vyčištěn
  }

  calculate() {
    if (this.firstOperand === null || this.operator === null) {
      return;
    }
    this.calculateResult();
    this.operator = null;
    this.firstOperand = null;
  }

  private calculateResult() {
    const secondOperand = parseFloat(this.display);
    switch (this.operator) {
      case '+':
        this.display = (this.firstOperand! + secondOperand).toString();
        break;
      case '-':
        this.display = (this.firstOperand! - secondOperand).toString();
        break;
      case '*':
        this.display = (this.firstOperand! * secondOperand).toString();
        break;
      case '/':
        if (secondOperand === 0) {
          this.display = 'Error';
          break;
        }
        this.display = (this.firstOperand! / secondOperand).toString();
        break;
    }
  }
}