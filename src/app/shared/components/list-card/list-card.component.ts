import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'list-card',
  standalone: true,
  imports: [
      CommonModule
  ],
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.css'
})
export class ListCardComponent {

  @Input() cardTitle: string = "Card Title"
}
