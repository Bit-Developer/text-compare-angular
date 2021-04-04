import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  envName: string;

  constructor(public router: Router) { }

  ngOnInit() {
    this.envName = environment.env_name;
  }

}
