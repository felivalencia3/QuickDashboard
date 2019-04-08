import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { WeightFormComponent } from './weight-form/weight-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalculatorsComponent } from './calculators/calculators.component';
import { GraphComponent } from './graph/graph.component';
import { ChartModule } from 'angular2-chartjs';
import { WeightListComponent } from './weight-list/weight-list.component';
import { ConsoleComponent } from './console/console.component';

@NgModule({
  declarations: [
    AppComponent,
    WeightFormComponent,
    DashboardComponent,
    CalculatorsComponent,
    GraphComponent,
    WeightListComponent,
    ConsoleComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
// npm run build:ssr && npm run serve:ssr
