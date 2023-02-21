import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicRouteStrategy, Platform } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { createTranslateLoader } from './core/utils/translate';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { FirebaseWebService } from './core/services/firebase/web/firebase-web.service';
import { HttpClientNativeProviderService } from './core/services/http-client-native.provider.service';
import { HttpClientWebProviderService } from './core/services/http-client-web.provider.service';
import { HttpClientProviderService } from './core/services/http-client.provider.service';
import { FirebaseService } from './core/services/firebase/firebase.service';

export function firebaseServiceFactory() {
  return  new FirebaseWebService();
}

export function httpProviderFactory(
  httpNative:HTTP,
  http:HttpClient,
  platform:Platform) {
  if(platform.is('mobile') && !platform.is('mobileweb'))
    return new HttpClientNativeProviderService(httpNative, http);
  else
    return new HttpClientWebProviderService(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })],
  providers: [{ 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy },
    HTTP,
    {
      provide: HttpClientProviderService,
      deps: [HTTP, HttpClient, Platform],
      useFactory: httpProviderFactory,  
    },
    {
      provide: FirebaseService,
      deps: [],
      useFactory: firebaseServiceFactory
    },
  ],

  bootstrap: [
    AppComponent],
})
export class AppModule {}
