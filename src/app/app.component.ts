import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from './core/services/user.service';
import 'zone.js';
import { LocalService } from './core/services/local.service';
// import 'zone.js/dist/long-stack-trace-zone.js';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  language = 0;
  constructor(
    private translate: TranslateService,
    private userService: UserService,
    private router: Router,
    private locale: LocalService,
  ) {
    this.translate.setDefaultLang('es');
    this.translate.get('home.title').subscribe((Text: any) =>{
      console.log(Text);
    })
  }

  onLanguage() {
    this.language = (this.language + 1) %2;
    switch(this.language) {
      case 0:
        this.translate.setDefaultLang('es')
        this.locale.registerCulture('es')
        break
      case 1:
        this.translate.setDefaultLang('en')
        this.locale.registerCulture('es')
        break
    }
  }

  signOut(){
    this.userService.signOut();
    this.router.navigate(['login'])
  }

}