import { Component, OnInit } from '@angular/core';
import {IAtores} from '../model/IAtores';
import {ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router'


@Component({
  selector: 'app-atores-detalhe',
  templateUrl: './atores-detalhe.page.html',
  styleUrls: ['./atores-detalhe.page.scss'],
})
export class AtoresDetalhePage implements OnInit {

  Atores: any;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      const getNav = this.router.getCurrentNavigation();
      if (getNav?.extras.state) {
        this.Atores = getNav.extras.state['paramAtores'];
      }
    });
  }

}
