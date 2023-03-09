import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AboutmeService } from 'src/app/core/services/aboutme.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.page.html',
  styleUrls: ['./about-me.page.scss'],
})
export class AboutMePage {
  language = 0;
  constructor(
    private translate: TranslateService,
    private _aboutmeService: AboutmeService,
    private userService: UserService,
    private router: Router
  ) { }

  getInfos() {
    return this._aboutmeService.aboutMeList$
  }

  signOut(){
    this.userService.signOut();
    this.router.navigate(['login'])
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

}
