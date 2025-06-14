import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorComponent } from '../calculator/calculator.component';

@Component({
  selector: 'calculator-view',
  imports: [CalculatorComponent],
  templateUrl: './calculator-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CalculatorViewComponent { }
