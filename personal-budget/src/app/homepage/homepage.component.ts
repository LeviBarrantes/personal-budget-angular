import { AfterViewInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {
public dataSource =  {
  datasets: [
   {
      data: [],
      backgroundColor:[
      '#ffcd56',
      '#ff6384',
      '#36a2eb',
      '#fd6b19',
      '#00FFFF',
      '#008000',
      '#CD5C5C',
    ],
  }
],

labels: [ ]
};



  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      for (var i = 0; i < res.myBudget.length; i++){
         this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
         this.dataSource.labels[i] = res.myBudget[i].title;
      }
      this.createChart();
    });
  }

  createChart(){
  var ctx = document.getElementById('myChart');
  var myChart  = new Chart(ctx, {

        type: 'pie',
        data: this.dataSource
    });
}

}
