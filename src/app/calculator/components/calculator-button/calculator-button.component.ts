import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, input, output, signal, viewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'calculator-button',
  imports: [],
  templateUrl: './calculator-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './calculator-button.component.css',
  //con el "host: {..." es lo mismo que el @hostbinding
  //el hostbinding lo que hace es agregarle al host (tag html de este componente)
  //valores a atributos que yo quiera
  //por ej al atributo class le va a agregar el valor que dice abajo
  //los [] es porque es un binding
  host: {
    class: 'border-r border-b border-indigo-400',
    '[class.w-2/4]': 'isDoubleSize()',
    '[class.w-1/4]': '!isDoubleSize()'
    // attribute: 'hola' -> esto crea un attribute="hola" en el html de este componente
    // data-size: 'XL' -> similar a lo de arriba
  },
})
export class CalculatorButtonComponent{
  public isPressed = signal(false);
  public onClick = output<string>();
  public contentValue = viewChild<ElementRef<HTMLButtonElement>>('button');

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
  // @HostBinding('class.w-2/4') get commandStyle() {
  //   return this.isDoubleSize();
  // }

  handleClick(){
    if(!this.contentValue()?.nativeElement){
      return;
    }

    const value = this.contentValue()!.nativeElement.innerText;
    this.onClick.emit(value.trim());
  }

  public keyboardPressedStyle(key:string) {
    if(!this.contentValue()) return;

    const value = this.contentValue()!.nativeElement.innerText;

    if(value !== key) return;

    this.isPressed.set(true);

    setTimeout(()=>{
      this.isPressed.set(false);
    },100)
  }
 }
