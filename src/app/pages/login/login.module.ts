import { NgModule } from '@angular/core';
import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { CoreModule } from 'src/app/core/core.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/core/utils/translate';
import { HttpClient } from '@angular/common/http';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  imports: [
    CoreModule,
    TranslateModule.forChild({
      loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
      }
      }),
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
