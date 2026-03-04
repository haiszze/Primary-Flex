import { Component, signal, ViewChild } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { CodeViewer } from "../../shared/code-viewer/code-viewer";
import { DetailsDialog } from "../../shared/details-dialog/details-dialog";
import { componentTitles } from '../../utils/props.util';

@Component({
  selector: 'app-component-select',
  standalone: true,
  imports: [CodeViewer, TooltipModule, DialogModule, DetailsDialog],
  templateUrl: './component-select.html',
  styleUrl: './component-select.css',
})
export class ComponentSelect {
  componentTitles = componentTitles;
  detailsDialogVisible = signal(false);
  onVisibleChange(value: boolean): void {
    this.detailsDialogVisible.set(value);
  }
}
