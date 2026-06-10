import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DataService } from '../../core/services/data.service';
import { DashboardOverview } from '../../core/models/stats.model';

import {
  ApexNonAxisChartSeries,
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexYAxis,
  ApexLegend,
  ApexTheme,
  ApexStroke
} from 'ng-apexcharts';

export type DonutChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: string[];
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  stroke: ApexStroke;
};

export type BarChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  colors: string[];
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
};

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    NgApexchartsModule
  ],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  
  overview?: DashboardOverview;
  
  // Chart configurations
  public genderChartOptions!: DonutChartOptions;
  public ageChartOptions!: BarChartOptions;
  public academicChartOptions!: BarChartOptions;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // 1. Fetch Overview Data
    this.dataService.getOverview().subscribe(data => {
      this.overview = data;
    });

    // 2. Initialize Gender Chart (77.3% Women, 22.7% Men)
    this.dataService.getGenderStats().subscribe(stats => {
      const series = stats.map(s => s.percentage);
      const labels = stats.map(s => s.gender);
      const colors = stats.map(s => s.color);

      this.genderChartOptions = {
        series: series,
        chart: {
          type: 'donut',
          height: 320,
          fontFamily: 'Cairo, sans-serif'
        },
        colors: colors,
        labels: labels,
        stroke: {
          show: true,
          width: 2,
          colors: ['#ffffff']
        },
        plotOptions: {
          pie: {
            donut: {
              size: '70%',
              labels: {
                show: true,
                total: {
                  show: true,
                  label: 'مجموع المستفيدات',
                  formatter: () => '77.3%'
                }
              }
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: (val) => `${Number(val).toFixed(1)}%`
        },
        legend: {
          position: 'bottom',
          fontFamily: 'Cairo',
          fontSize: '14px',
          fontWeight: 600
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                height: 280
              },
              legend: {
                position: 'bottom'
              }
            }
          }
        ]
      };
    });

    // 3. Initialize Age Chart (35% Under 30, 45% 30-45, 20% Over 45)
    this.dataService.getAgeStats().subscribe(stats => {
      const seriesData = stats.map(s => s.percentage);
      const categories = stats.map(s => s.range);

      this.ageChartOptions = {
        series: [
          {
            name: 'النسبة المئوية',
            data: seriesData
          }
        ],
        chart: {
          type: 'bar',
          height: 320,
          toolbar: { show: false },
          fontFamily: 'Cairo, sans-serif'
        },
        colors: ['#c5a880'], // Premium Gold
        plotOptions: {
          bar: {
            horizontal: true,
            borderRadius: 6,
            barHeight: '50%',
            dataLabels: {
              position: 'end'
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: (val) => `${val}%`,
          style: {
            colors: ['#1e293b'],
            fontSize: '12px',
            fontFamily: 'Cairo'
          },
          offsetX: 30
        },
        xaxis: {
          categories: categories,
          labels: {
            show: true,
            style: { fontFamily: 'Cairo' }
          }
        },
        yaxis: {
          labels: {
            style: {
              fontFamily: 'Cairo',
              fontSize: '13px',
              fontWeight: 600
            }
          }
        },
        legend: { show: false }
      };
    });

    // 4. Initialize Academic Chart (25% Basic, 40% Vocational, 35% Higher Ed)
    this.dataService.getAcademicStats().subscribe(stats => {
      const seriesData = stats.map(s => s.percentage);
      const categories = stats.map(s => s.level);

      this.academicChartOptions = {
        series: [
          {
            name: 'النسبة المئوية',
            data: seriesData
          }
        ],
        chart: {
          type: 'bar',
          height: 320,
          toolbar: { show: false },
          fontFamily: 'Cairo, sans-serif'
        },
        colors: ['#1e3a8a'], // Deep Blue
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '45%',
            borderRadius: 8,
            dataLabels: {
              position: 'top'
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: (val) => `${val}%`,
          offsetY: -20,
          style: {
            colors: ['#1e3a8a'],
            fontSize: '13px',
            fontFamily: 'Cairo',
            fontWeight: 700
          }
        },
        xaxis: {
          categories: categories,
          labels: {
            style: {
              fontFamily: 'Cairo',
              fontSize: '11px',
              fontWeight: 600
            }
          }
        },
        yaxis: {
          labels: {
            formatter: (val) => `${val}%`,
            style: { fontFamily: 'Cairo' }
          }
        },
        legend: { show: false }
      };
    });
  }
}
