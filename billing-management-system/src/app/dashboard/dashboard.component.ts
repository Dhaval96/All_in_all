import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataSets, ChartOptions, RadialChartOptions } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { WorkService } from '../work/work.service';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  countWork = 0;
  totalEarn = 0;



  constructor(private _dashboardService: DashboardService) { }

  ngOnInit() {

    this._dashboardService.getDashboardData().subscribe(response => {
      console.log(response);
      if (response['data']) {
        this.chartConfig(response['data']);
      }
    })

  }


  // public barChartOptions: ChartOptions = {
  //   responsive: true,
  //   // We use these empty structures as placeholders for dynamic theming.
  //   scales: { xAxes: [{}], yAxes: [{}] },
  //   plugins: {
  //     datalabels: {
  //       anchor: 'end',
  //       align: 'end',
  //     }
  //   }
  // };
  // public barChartLabels: Label[] = ['January', 'Febuary', 'March', 'April', 'May', 'Jun', 'July'];
  // public barChartType: ChartType = 'bar';
  // public barChartLegend = true;
  // public barChartPlugins = [pluginDataLabels];

  // public barChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Earn' },
  //   // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  // ];


  // // events
  // public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // public randomize(): void {
  //   // Only Change 3 values
  //   const data = [
  //     Math.round(Math.random() * 100),
  //     59,
  //     80,
  //     (Math.random() * 100),
  //     56,
  //     (Math.random() * 100),
  //     40];
  //   this.barChartData[0].data = data;
  // }



  // ----------------------------------------------------------0
  public radarChartLabels: Label[] = [];

  public radarChartData: ChartDataSets[] = [
    { data: [], label: 'Workers' },
    { data: [], label: 'Days' }
  ];
  chartConfig(response) {


    response.forEach(element => {

      const work = element['work'];
      const totalWorker = element['workers'];


      this.radarChartLabels.push('' + work.workName);
      const days = this.getDifference(work);
      this.radarChartData[0].data.push(totalWorker);
      this.radarChartData[1].data.push(days)
      console.log(this.radarChartData);

      this.countWork++;
      this.totalEarn += work.amount


    });


  }


  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };


  public radarChartType: ChartType = 'radar';

  public radarChartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public radarChartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }



  getDifference(work) {
    let date1: any = new Date(work.createddate);
    console.log(date1);
    let date2: any = new Date(work.updateddate);
    let diffTime = Math.abs(date2 - date1);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
}
