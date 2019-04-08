import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UniversalInterceptor } from './universal-interceptor';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

@NgModule({
  imports: [AppModule, ServerModule, ModuleMapLoaderModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UniversalInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
