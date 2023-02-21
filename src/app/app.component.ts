import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from './core/services/user.service';

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
    private router: Router
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
        break
      case 1:
        this.translate.setDefaultLang('en')
        break
    }
  }

  signOut(){
    this.userService.signOut();
    this.router.navigate(['login'])
  }

}