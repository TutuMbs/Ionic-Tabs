import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router:Router) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'Pânico 6',
      lancamento: '09/03/2023 (BR)',
      duracao: '2h02min',
      classificacao: 7.4,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dbd7DQCHZ57SF4tM2puHtwNxDQD.jpg',
      generos: ['Terror', 'Mistério', 'Thriller'],
      pagina: '934433-scream-vi',
      favorito: true
    },

    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },

    {
      nome: 'Arremessando Alto',
      lancamento: '03/06/2022 (US)',
      duracao: '1h 58m',
      classificacao: 7.8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/25aPHMlZNP5F3fgxUo4XB7xUVz7.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/705861-hustle',
      favorito: true
    },

    {
      nome: 'Harry Potter e o Cálice de Fogo',
      lancamento: '25/11/2005 (BR)',
      duracao: '2h37m',
      classificacao: 7.8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5oWB3hjzyECRBAjgWkmZinxl9qA.jpg',
      generos: ['Aventura', 'Fantasia', 'Fámilia'],
      pagina: '/674-harry-potter-and-the-goblet-of-fire',
      favorito: true
    }
  ];

  exibirFilme(filme:IFilme){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'], navigationExtras);
  }

}
