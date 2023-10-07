import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-subtitle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subtitle.component.html'
})
export class SubtitleComponent {
  @Input()
  styleClass = '';

  
}
