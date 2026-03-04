import { Component, inject, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.html',
  standalone: true,
  imports: [ButtonModule],
})
export class StatsCardComponent {
  private readonly router = inject(Router);

  title = input<string>('');
  subtitle = input<string>('');
  emitVisible = output<boolean>();
  description = input<string>('');
  componentType = input<string>('');
  path = input<string>('');

  onNavigateTo(path: string) {
    this.router.navigate([path]);
  }
  setVisible(value: boolean) {
      this.emitVisible.emit(value);
  }
}
