import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MainPageComponent } from './pages/main-page/main-page.component'
import { HeaderComponent } from './pages/header/header.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './modules/material/material.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AppDescriptionComponent } from './pages/app-description/app-description.component'
import { TrainersComponent } from './pages/trainers/trainers.component'
import { StrongmanComponent } from './pages/strongman/strongman.component'
import { PricesComponent } from './pages/prices/prices.component'
import { HttpClientModule } from '@angular/common/http'
import { CountdownModule } from 'ngx-countdown';
import { StrongmanFirstTextComponent } from './pages/strongman-first-text/strongman-first-text.component'
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    AppDescriptionComponent,
    TrainersComponent,
    StrongmanComponent,
    PricesComponent,
    StrongmanFirstTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
