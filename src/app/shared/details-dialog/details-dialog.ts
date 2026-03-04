import { Component, input, output, signal } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CodeViewer } from "../code-viewer/code-viewer";

@Component({
  selector: 'app-details-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, CodeViewer],
  templateUrl: './details-dialog.html',
})
export class DetailsDialog {
  visible = input<boolean>(false);
  visibleChange = output<boolean>();

  onVisibleChange(value: boolean): void {
    this.visibleChange.emit(value);
  }

  close(): void {
    this.visibleChange.emit(false);
  }
}
