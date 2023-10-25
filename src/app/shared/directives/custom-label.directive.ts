import { Directive, ElementRef, Input, Renderer2, inject } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
  standalone: true,
})
export class CustomLabelDirective {
  private htmlElement?: ElementRef<HTMLElement>;
  private _color!: string;
  private _errors?: ValidationErrors | null;

  private elementRef = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);

  @Input()
  set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input()
  set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessage();
  }

  constructor() {
    this.htmlElement = this.elementRef;
  }

  setStyle(): void {
    this.renderer.addClass(this.elementRef.nativeElement, this._color!);
  }

  setErrorMessage(): void {
    if (!this.htmlElement) return;

    // Si no existe ningún error devolver una cadena vacía
    if (!this._errors) {
      this.htmlElement.nativeElement.innerText = '';
      return;
    }

    // Obtener las keys del error que esta en el momento
    const errors = Object.keys(this._errors);
    console.log(errors);

    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerText = 'Este campo es obligatorio.';
      return;
    }

    if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerText =
        'Este campo debe ser un correo electrónico valido.';
      return;
    }

    if (errors.includes('minlength')) {
      const { requiredLength } = this._errors['minlength'];
      this.htmlElement.nativeElement.innerText = `Este campo debe tener como mínimo ${requiredLength} caracteres.`;
      return;
    }

    if (errors.includes('maxlength')) {
      const { requiredLength } = this._errors['maxlength'];
      this.htmlElement.nativeElement.innerText = `Este campo debe tener como máximo ${requiredLength} caracteres.`;
      return;
    }

    if (errors.includes('pattern')) {
      const { requiredPattern } = this._errors['pattern'];
      let message = '';

      switch (requiredPattern) {
        case
      
          '/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/':
          message =
            'El campo debe tener al menos una mayúscula, una minúscula, un número y un carácter especial @ # $ % ^ & + = ! ';
          break;

        default:
          break;
      }

      this.htmlElement.nativeElement.innerText = message;
      return;
    }
    if (errors.includes('min')) {
      const { min } = this._errors['min'];
      this.htmlElement.nativeElement.innerText = `Este campo no puede ser menor a ${min}.`;
      return;
    }
  }
}