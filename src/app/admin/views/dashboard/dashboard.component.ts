import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { pageTransition } from 'src/app/shared/utils/animations';
import { CommonService } from 'src/app/_core/services/common.service';
import { AppRoutes } from 'src/app/app.routes';
import { AdminRoutes } from '../../admin.routes';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [pageTransition]
})
export class DashboardComponent implements OnInit {
  readonly appRoutes = AppRoutes;
  readonly adminRoutes = AdminRoutes;
  
  constructor(
    public readonly commonServices: CommonService
  ){}

  eventDate: any = formatDate(new Date(), 'MMM dd, yyyy', 'en');

  ngOnInit(): void {
    var myChart = new Chart("areaWiseSale", {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
        }]
      },
      options: {
        scales: {
          x: {
            display: false
          },
          y: {
            display: false
          },
        },
        plugins: {
          legend: {
            position: 'right',
            align: 'center',
          },
        },
      },
    });
  }
}
