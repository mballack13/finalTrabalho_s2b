import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  facebook: string = 'https://facebook.com/';
  twitter: string = 'https://twitter.com/'
  github: string = 'https://github.com/mballack13/finalTrabalho_s2b';
  linkedin: string = 'https://linkedin.com';
  s2b: string = 'http://www.centrodeinovacao.org.br/StudentToBusiness/Apresentacao';
  ci: string = 'Centrode Inovacao/S2b';

  constructor() {}

  ngOnInit() {}

}
