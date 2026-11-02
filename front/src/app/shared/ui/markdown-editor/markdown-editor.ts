import {
  Component, ElementRef, forwardRef, viewChild, afterNextRender,
  inject, ChangeDetectorRef, OnDestroy,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import EasyMDE from 'easymde';

@Component({
  selector: 'app-markdown-editor',
  template: `<textarea #area></textarea>`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MarkdownEditor),
      multi: true,
    },
  ],
})
export class MarkdownEditor implements ControlValueAccessor, OnDestroy {
  private cdr = inject(ChangeDetectorRef);
  private area = viewChild.required<ElementRef<HTMLTextAreaElement>>('area');
  private editor?: EasyMDE;
  private pendingValue = '';

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  constructor() {
    afterNextRender(() => {
      this.editor = new EasyMDE({
        element: this.area().nativeElement,
        initialValue: this.pendingValue,
        spellChecker: false,
        status: false,
        minHeight: '300px',
        autoDownloadFontAwesome: false,
        previewClass: ['markdown'],
      });

      this.editor.codemirror.on('change', () => {
        this.onChange(this.editor!.value());
        this.cdr.markForCheck();
      });

      this.editor.codemirror.on('blur', () => {
        this.onTouched();
        this.cdr.markForCheck();
      });
    });
  }

  writeValue(value: string | null): void {
    this.pendingValue = value ?? '';
    if (this.editor && this.editor.value() !== this.pendingValue) {
      this.editor.value(this.pendingValue);
    }
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  ngOnDestroy(): void {
    this.editor?.toTextArea();
    this.editor = undefined;
  }
}