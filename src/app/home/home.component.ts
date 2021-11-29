import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface PORTFOLIO {
  name : string;
  shortDescription : string;
  description : string;
  projectDate : string;
  role : string;
  client : string;
  projectLink : string;
  images : [string];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  portfolios = this.getPortfolio();

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  getPortfolio() {
    return this.http.get<PORTFOLIO[]>('/assets/json/portfolio.json');
  }
}
