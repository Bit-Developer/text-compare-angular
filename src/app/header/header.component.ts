import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: false
})
export class HeaderComponent implements OnInit {
  envName: string;

  protected router = inject(Router);

  ngOnInit() {
    this.envName = environment.env_name;
  }
}
