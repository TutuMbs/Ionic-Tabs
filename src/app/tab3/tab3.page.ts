import { Component } from '@angular/core';
import { IAtores } from '../model/IAtores';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  listaAtores: IAtores[] = [
    {
      nome: 'Daniel Readliffe',
      nascimento: '1989-07-23 ',
      localdenascimento: 'Hammersmith, London, England, UK',
      idade: 33,
      Foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/iPg0J9UzAlPj1fLEJNllpW9IhGe.jpg',
      generos: ['HarryPotter',],
      pagina: '/10980-daniel-radcliffe',
      favorito: true
    },
    {
      nome: 'Paul Walker',
      nascimento: '1973-09-12',
      localdenascimento: 'Glendale, California, USA',
      idade: 39,
      Foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/q2PLqKHYCs35HR7QybaNPH3JT96.jpg',
      generos: ['Velozes e Furioso'],
      pagina: '/8167-paul-walker',
      favorito: false
    },

    {
      nome: 'Jenna Ortega',
      nascimento: '2002-09-27',
      localdenascimento: 'Coachella Valley, Palm Desert, California, USA',
      idade: 20,
      Foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/q1NRzyZQlYkxLY07GO9NVPkQnu8.jpg',
      generos: ['Panico','A Vida Depois','Wandinha'],
      pagina: '/974169-jenna-ortega',
      favorito: false
    },
    {
      nome: 'Keanu Reeves',
      nascimento: '1964-09-02',
      localdenascimento: 'Beirut, Lebanon',
      idade: 58,
      Foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg',
      generos: ['Matrix','John Wick'],
      pagina: '/6384-keanu-reeves',
      favorito: false
    },
    {
      nome: 'Alexandra Daddario',
      nascimento: '1986-03-16',
      localdenascimento: 'New York City, New York, USA',
      idade: 37,
      Foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/lh5zibQXYH1MNqkuX8TmxyNYHhK.jpg',
      generos: ['Percy Jackson','Terremoto','Baywatch'],
      pagina: '/6384-keanu-reeves',
      favorito: false
    },
  ]
}
