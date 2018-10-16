import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app.routing.modules';
import { ErrorsModule } from './errors/errors.module';
import { MainContentModule } from './main-content/main-content.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { HospitalService } from './hospitals/hospital/hospital.service';
import { HospitalComponent } from './hospitals/hospital/hospital.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HospitalComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainContentModule,
    ErrorsModule,
    FooterModule,
    HeaderModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyATgLZln-J3CqJ1g_uECsOz9EeV4NPIdaE'
    })
  ],
  providers: [HospitalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
