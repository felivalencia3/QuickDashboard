import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { WeightFormComponent } from './weight-form/weight-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalculatorsComponent } from './calculators/calculators.component';
import { GraphComponent } from './graph/graph.component';
import { ChartModule } from 'angular2-chartjs';

@NgModule({
  declarations: [
    AppComponent,
    WeightFormComponent,
    DashboardComponent,
    CalculatorsComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    ChartModule
  ],
  providers: [CookieService, ],
  bootstrap: [AppComponent]
})
export class AppModule {}
// npm run build:ssr && npm run serve:ssr
