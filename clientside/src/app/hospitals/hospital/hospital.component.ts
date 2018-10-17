import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/models/hospital';
import { HospitalService } from './hospital.service';
import { Subject, of } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, map, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  hospitals: Hospital[] = [];
  selectedHospital: Hospital;
  spec: string;
  name: string;
  latPartes: string[];
  longPartes: string[];
  latitude = -51;
  longitude = -30;
  cont: number;

  debounce: Subject<string> = new Subject<string>();

  constructor(private hospitalService: HospitalService) {
    const subscription = this.debounce.pipe(
      map(event => event),
      debounceTime(1000),
      distinctUntilChanged(),
      flatMap(search => of(search).pipe(delay(500)))
    ).subscribe(console.log);
   }

  ngOnInit(): void { this.hospitalService.getHospitals().subscribe(dados => this.hospitals = dados); }

  onSelect(h: Hospital): void {
    this.selectedHospital = h;
    this.latPartes = h.latitude.split(',');
    this.latitude = parseFloat(this.latPartes[0] + '.' + this.latPartes[1]);
    this.longPartes = h.longitude.split(',');
    this.longitude = parseFloat(this.longPartes[0] + '.' + this.longPartes[1]);
  }

  clearSel(): void {
    this.selectedHospital = null;
  }

  isSelected(h: Hospital): boolean {
    return(this.selectedHospital === h);
  }

  filterName(): void {
    this.cont = 0;
    this.hospitals.forEach(element => {
      const aux = element.name.toLowerCase();
      element.display = !(aux.includes(this.name.toLowerCase()));
      if (!element.display) {
        this.cont++;
      }
    });
  }

  filterSpec(): void {
    this.cont = 0;
    this.hospitals.forEach(element => {
      const aux = element.specialties.toLowerCase();
      element.display = !(aux.includes(this.spec.toLowerCase()));
      if (!element.display) {
        this.cont++;
      }
    });
  }
}
