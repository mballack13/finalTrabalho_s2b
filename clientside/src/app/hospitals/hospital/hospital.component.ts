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

  constructor(private hospitalService: HospitalService) { }

  ngOnInit(): void {
    this.getAllHospitals();
  }
  getAllHospitals(): void {
    this.hospitalService.getHospitals().subscribe(dados => this.hospitals = dados);
  }
  onSelect(h: Hospital): void {
    this.selectedHospital = h;
  }
  clearSel(): void {
    this.selectedHospital = null;
  }
  isSelected(h: Hospital): boolean {
    return(this.selectedHospital === h);
  }
}
