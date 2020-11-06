import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { BestsellersList } from '../bestsellers-list'; 
import { Bestseller } from '../bestseller';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.scss']
})
export class BestsellersComponent implements OnInit {

  bestsellerslist = BestsellersList;
  constructor() { }

  ngOnInit(): void {
  }

}
