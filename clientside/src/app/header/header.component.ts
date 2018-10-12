import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'S.O.S. POA';
  main_page = 'http://localhost:4200/home';

  constructor() { }

  ngOnInit() {
  }

}
