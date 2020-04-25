import { Component, OnInit } from '@angular/core';
import { popular_route } from '../popular-route';
import { car_company} from '../car';
import { RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  popular_routes = popular_route;
  car_company = car_company;
  constructor() { }

  ngOnInit(): void {
  }

}
