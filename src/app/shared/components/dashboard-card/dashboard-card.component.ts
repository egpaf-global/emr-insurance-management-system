import { Component, Input } from '@angular/core';

@Component({
  selector: 'dashboard-card',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.css'
})
export class DashboardCardComponent {
  @Input() title: string = "Stats";
  @Input() counts: string | null = "0.0";
  @Input() iconName: string = "bi bi-ticket-perforated";
  @Input() iconColor: string = "bg-gradient-to-br from-orange-500 to-orange-700"
}
