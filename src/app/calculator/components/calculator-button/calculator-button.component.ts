import { ChangeDetectionStrategy, Component, HostBinding, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'calculator-button',
  imports: [],
  templateUrl: './calculator-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './calculator-button.component.css',
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400'
    // attribute: 'hola' -> esto crea un attribute="hola" en el html de este componente
    // data-size: 'XL' -> similar a lo de arriba
  },
})
export class CalculatorButtonComponent{
  public isCommand = input(false, {
    transform: (value: boolean | string) => 
      typeof value === 'string' ? value === '' : value
  });

  public isDoubleSize = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value
  })

  //tengo acceso al host element que es el <calculator-button>
  // que se imprime en el inspeccionar por ej
  // @HostBinding('class.is-command') get commandStyle() {
  //   return this.isCommand();
  // }

  @HostBinding('class.w-2/4') get commandStyle() {
    return this.isDoubleSize();
  }
 }
