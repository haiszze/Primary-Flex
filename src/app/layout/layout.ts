import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';


@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  imports: [RouterOutlet, PanelMenuModule],
})

export class Layout {
}

