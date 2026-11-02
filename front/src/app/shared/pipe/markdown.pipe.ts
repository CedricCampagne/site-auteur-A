import { Pipe, PipeTransform } from '@angular/core';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

@Pipe({ name: 'markdown' })
export class MarkdownPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    const html = marked.parse(value ?? '', { async: false, breaks: true });
    return DOMPurify.sanitize(html);
  }
}