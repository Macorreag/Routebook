import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Route } from '../models/route.model'

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  @Input() destino: Route;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  constructor() {}
  
  ngOnInit(): void {
  }

}
