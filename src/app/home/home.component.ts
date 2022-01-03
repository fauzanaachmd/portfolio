import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as AOS from 'aos';
import { ActivatedRoute } from '@angular/router';

interface PORTFOLIO {
  id: number
  name: string
  shortDescription: string
  description: string
  projectDate: string
  role: string
  client: string
  projectLink: string
  images: [string]
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  portfolios = this.getPortfolio()

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    AOS.init({
      duration: 800,
      easing: 'ease',
      once: true,
   });

   this.route.fragment
    .subscribe(fragment => {
      var element = document.getElementById(fragment as string)
      element?.scrollIntoView()
    });
  }

  getPortfolio() {
    return this.http.get<PORTFOLIO[]>(environment.baseUrl + '/assets/json/portfolio.json')
  }
}
