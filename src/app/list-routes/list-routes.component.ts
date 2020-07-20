import { Component, OnInit } from '@angular/core';
import { RouteComponent } from '../route/route.component';

import { Route } from '../models/route.model';

@Component({
  selector: 'app-list-routes',
  templateUrl: './list-routes.component.html',
  styleUrls: ['./list-routes.component.css']
})
export class ListRoutesComponent implements OnInit {
  destinos: Route[];
  constructor() { 
    this.destinos = [];
  }

  ngOnInit(): void {
  }

  guardar(RouteName:string,url:string,descriptionRoute:string):boolean{
    this.destinos.push(new Route(RouteName,url,descriptionRoute));
    console.log(this.destinos);    
    return false;
  }
}
