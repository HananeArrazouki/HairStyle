import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { createTranslateLoader } from './core/utils/translate';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LoginPipe } from './pages/login.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginPipe],
  imports: [
    BrowserModule, 
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })],
  providers: [{ 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy }],
  bootstrap: [
    AppComponent],
})
export class AppModule {}
