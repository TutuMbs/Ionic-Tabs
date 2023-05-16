import {NavigationExtras, Router} from '@angular/router';
import { ISeries } from './../model/ISeries';
import { Component } from '@angular/core';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router:Router) {}

  listaSeries: ISeries[] = [
    {
      nome: 'Greys Anatomy',
      lancamento: '27/03/2005',
      duracao: 'Ep43m',
      classificacao: 8.3,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/diS4zWXohKIp9VuN9sJDRrqe5en.jpg',
      generos: ['Drama'],
      pagina: '/1416-grey-s-anatomy',
      favorito: false
    },
    {
      nome: 'Sobrenatural',
      lancamento: '13/09/2005 (BR)',
      duracao: 'Ep45m',
      classificacao: 8.3,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ovFzkkKknAo2SbM2DfOabxRvzmy.jpg',
      generos: ['Drama', 'Mistério', 'Sci-Fi e Fantasy'],
      pagina: '/1622-supernatural',
      favorito: true
    },

    {
      nome: 'Suits',
      lancamento: '23/06/2011 (BR)',
      duracao: 'Ep42m',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ubEYUaE1EOBnSgb1OteAeGJP1E5.jpg',
      generos: ['Drama'],
      pagina: '/37680-suits',
      favorito: true
    },



  ];

  exibirSeries(series:ISeries){
    const navigationExtras: NavigationExtras = {state:{paramSeries:series}};
    this.router.navigate(['serie-detalhe'], navigationExtras);
  }

}
