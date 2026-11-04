import { Component, input, output } from '@angular/core';

type ButtonVariant = 'filled' | 'outline';
type ButtonColor = 'accent1' | 'accent2';
type ButtonSize = 'sm' | 'md';

@Component({
  selector: 'app-ui-button',
  imports: [],
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.css',
})
export class UiButton {

  label = input.required<string>();
  variant = input<ButtonVariant>('filled');
  color = input<ButtonColor>('accent1');
  size = input<ButtonSize>('sm');
  type = input<'button' | 'submit' | 'reset'>('button');
  disabled =input(false);

  clicked = output<void>();

}
