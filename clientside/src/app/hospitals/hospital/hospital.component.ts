import { Component, OnInit, Input } from '@angular/core';
import { Hospital } from 'src/app/models/hospital';
import { HospitalService } from './hospital.service';
import {  } from 'rxjs';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  hospitals: Hospital[];
  selectedHospital: Hospital;
  spec: string;
  name: string;
  latPartes: string[];
  longPartes: string[];
  latitude: number = -51;
  longitude: number = -30;

  // latitude: number;
  // longitude: number;

  constructor(private hospitalService: HospitalService) { }

  ngOnInit(): void {
    this.getAllHospitals();
  }
  getAllHospitals(): void {
    this.hospitalService.getHospitals().subscribe(dados => this.hospitals = dados);
  }
  onSelect(h: Hospital): void {
    this.selectedHospital = h;
    this.latPartes = h.latitude.split(',');
    this.latitude = parseFloat(this.latPartes[0]+'.'+this.latPartes[1]);
    this.longPartes = h.longitude.split(',');
    this.longitude = parseFloat(this.longPartes[0]+'.'+this.longPartes[1]);

    // this.latitude = this.parseLatitude(h);
    // console.log(this.latitude);
    // this.longitude = this.parseLongitude(h);
    // console.log(this.longitude);

  }
  clearSel(): void {
    this.selectedHospital = null;
  }
  isSelected(h: Hospital): boolean {
    return(this.selectedHospital === h);
  }
  filterName(): void {
    this.hospitals.forEach(element => {
      const aux = element.name.toLowerCase();
      element.display = !(aux.includes(this.name.toLowerCase()));
    });
  }
  filterSpec(): void {
    this.hospitals.forEach(element => {
      const aux = element.specialties.toLowerCase();
      element.display = !(aux.includes(this.spec.toLowerCase()));
    });
  }

  // parseLatitude(h: Hospital): number {
  //   let latitudex: number;
  //   let latPartes: string[];
  //   let latitudeString: string = '-51.';
  //   latPartes = h.latitude.split(',');
  //   latitudex = parseFloat(latitudeString+latPartes[1]);
  //   console.log(latitudex);
  //   return latitudex;
  // }
  // parseLongitude(h: Hospital): number {
  //   let longitudey: number;
  //   let longPartes: string[];
  //   let longitudeString: string = '-30.';
  //   longPartes = h.longitude.split(',');
  //   longitudey = parseFloat(longitudeString+longPartes[1]);
  //   console.log(longitudey);
  //   return longitudey;
  // }
}