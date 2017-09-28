import { Component, OnInit } from '@angular/core';

declare var c3: any;
declare var Maplace: any;
declare var Noty: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    '../../../assets/fonts/weather/css/weather-icons.min.css',
    '../../../assets/libs/c3js/c3.min.css',
    '../../../assets/libs/noty/noty.css',
    '../../../assets/styles/widgets/payment.min.css',
    '../../../assets/styles/widgets/panels.min.css',
    '../../../assets/styles/dashboard/tabbed-sidebar.min.css'
  ]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    c3.generate({
      bindto: '#ks-next-payout-chart',
      data: {
        columns: [
          ['data1', 6, 5, 6, 5, 7, 8, 7]
        ],
        types: {
          data1: 'area'
        },
        colors: {
          data1: '#81c159'
        }
      },
      legend: {
        show: false
      },
      tooltip: {
        show: false
      },
      point: {
        show: false
      },
      axis: {
        x: {show:false},
        y: {show:false}
      }
    });

    c3.generate({
      bindto: '#ks-total-earning-chart',
      data: {
        columns: [
          ['data1', 6, 5, 6, 5, 7, 8, 7]
        ],
        types: {
          data1: 'area'
        },
        colors: {
          data1: '#4e54a8'
        }
      },
      legend: {
        show: false
      },
      tooltip: {
        show: false
      },
      point: {
        show: false
      },
      axis: {
        x: {show:false},
        y: {show:false}
      }
    });

    c3.generate({
      bindto: '.ks-chart-orders-block',
      data: {
        columns: [
          ['Revenue', 150, 200, 220, 280, 400, 160, 260, 400, 300, 400, 500, 420, 500, 300, 200, 100, 400, 600, 300, 360, 600],
          ['Profit', 350, 300,  200, 140, 200, 30, 200, 100, 400, 600, 300, 200, 100, 50, 200, 600, 300, 500, 30, 200, 320]
        ],
        colors: {
          'Revenue': '#f88528',
          'Profit': '#81c159'
        }
      },
      point: {
        r: 5
      },
      grid: {
        y: {
          show: true
        }
      }
    });

    // setTimeout(function () {
    //   new Noty({
    //     text: '<strong>Welcome to MillBorn',
    //     type   : 'information',
    //     theme  : 'mint',
    //     layout : 'topRight',
    //     timeout: 3000
    //   }).show();
    // }, 1500);

    var maplace = new Maplace({
      map_div: '#ks-payment-widget-table-and-map-map',
      controls_on_map: false
    });
    maplace.Load();
  }
}
