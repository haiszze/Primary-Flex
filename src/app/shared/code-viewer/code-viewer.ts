import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import  { ButtonModule } from 'primeng/button';
import { AfterViewInit, Component, inject, input, signal, OnInit } from '@angular/core';
import * as Prism from 'prismjs';

import 'prismjs/components/prism-typescript';


@Component({
  selector: 'app-code-viewer',
  standalone: true,
  imports: [CommonModule,ButtonModule],
  templateUrl: './code-viewer.html',
  styleUrl: './code-viewer.css',
})
export class CodeViewer implements OnInit, AfterViewInit {
  componentName = input<string>('');
  code = signal('');

  private readonly http = inject(HttpClient);

  ngOnInit(): void {
    const name = this.componentName().trim();
    if (name) {
      this.loadCode(name);
    }
  }

  ngAfterViewInit(): void {
    if (this.code()) {
      Prism.highlightAll();
    }
  }

  copied = signal(false);

  copyCode() {
    navigator.clipboard.writeText(this.code()).then(() => {
      this.copied.set(true);

      setTimeout(() => {
        this.copied.set(false);
      }, 1500);
    });
  }

  private loadCode(componentName: string): void {
    let url = '';
    
    if (componentName === 'platform') {
      url = `/prime-pt/platform.util.ts`;
    } else {
      url = `/prime-pt/${componentName}.pt.ts`;
    }

    this.http.get(url, { responseType: 'text' }).subscribe({
      next: (fileContent) => {
        this.code.set(fileContent);
        requestAnimationFrame(() => Prism.highlightAll());
      },
    });
  }
}
