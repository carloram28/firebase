import { Component, Input, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-grafica-barra-horizontal',
  templateUrl: './grafica-barra-horizontal.component.html',
  styleUrl: './grafica-barra-horizontal.component.css'
})
export class GraficaBarraHorizontalComponent implements OnDestroy {

  @Input() results: any[] = [];
  // results: any[] = [
  //   {
  //     "name": "Juego 1",
  //     "value": 20
  //   },
  //   {
  //     "name": "Juego 2",
  //     "value": 25
  //   },
  //   {
  //     "name": "Juego 3",
  //     "value": 15
  //   },
  //   {
  //     "name": "Juego 4",
  //     "value": 30
  //   }
  // ];




  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights'
  // intervalo;
  constructor() {


    // this.intervalo = setInterval(() => {
    //   const newResults = [...this.results];

    //   for (let i in newResults) {
    //     newResults[i].value = Math.round(Math.random() * 500);
    //   }
    //   this.results = [...newResults];
    // }, 1500);

  }
  ngOnDestroy(): void {
    // clearInterval(this.intervalo);
  }

  onSelect(event: any) {
    console.log(event);
  }
}
