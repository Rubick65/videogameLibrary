import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-check-verification-code-component',
  imports: [],
  templateUrl: './check-verification-code-component.html',
  styleUrl: './check-verification-code-component.css',
})
export class CheckVerificationCodeComponent {
  characters = [signal(''), signal(''), signal(''), signal('')];

  onCharacterInput(input: InputEvent) {
    const inputElement = input.target as HTMLInputElement;

    // 1. Si meten un espacio, lo quitamos del input inmediatamente
    if (input.data === ' ') {
      inputElement.value = inputElement.value.replace(/\s/g, '');
      return;
    }

    // 2. Convertimos el valor a mayúsculas
    const cleanValue = inputElement.value.toUpperCase();
    inputElement.value = cleanValue;

    // 3. Sincronizamos CADA casilla según el texto del input
    this.characters.forEach((charSignal, index) => {
      // Asigna el carácter si existe en la posición, o un string vacío si se borró
      charSignal.set(cleanValue[index] || '');
    });
  }
}
