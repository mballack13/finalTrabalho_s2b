import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app.routing.modules';
import { ErrorsModule } from './errors/errors.module';
import { MainContentModule } from './main-content/main-content.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { HospitalService } from './hospitals/hospital/hospital.service';
import { HospitalComponent } from './hospitals/hospital/hospital.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HospitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainContentModule,
    ErrorsModule,
    FooterModule,
    HeaderModule,
    HttpClientModule
  ],
  providers: [HospitalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
