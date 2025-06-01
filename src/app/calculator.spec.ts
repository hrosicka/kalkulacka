import { KalkulatorComponent } from './kalkulator/kalkulator.component';

describe('KalkulatorComponent', () => {
  let component: KalkulatorComponent;

  beforeEach(() => {
    component = new KalkulatorComponent();
  });

  it('should start with display 0', () => {
    expect(component.display).toBe('0');
  });

  it('should add numbers correctly', () => {
    component.addToDisplay('2');
    component.operate('+');
    component.addToDisplay('3');
    component.calculate();
    expect(component.display).toBe('5');
  });

  it('should subtract numbers correctly', () => {
    component.addToDisplay('7');
    component.operate('-');
    component.addToDisplay('3');
    component.calculate();
    expect(component.display).toBe('4');
  });

  it('should multiply numbers correctly', () => {
    component.addToDisplay('6');
    component.operate('*');
    component.addToDisplay('4');
    component.calculate();
    expect(component.display).toBe('24');
  });

  it('should divide numbers correctly', () => {
    component.addToDisplay('8');
    component.operate('/');
    component.addToDisplay('2');
    component.calculate();
    expect(component.display).toBe('4');
  });

  it('should handle division by zero', () => {
    component.addToDisplay('8');
    component.operate('/');
    component.addToDisplay('0');
    component.calculate();
    expect(component.display).toBe('Error');
  });

  it('should clear display', () => {
    component.addToDisplay('123');
    component.clearDisplay();
    expect(component.display).toBe('0');
    expect(component.firstOperand).toBeNull();
    expect(component.operator).toBeNull();
  });
});