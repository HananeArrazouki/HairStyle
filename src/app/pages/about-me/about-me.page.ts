import { Component } from '@angular/core';
import { AboutmeService } from 'src/app/core/services/aboutme.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.page.html',
  styleUrls: ['./about-me.page.scss'],
})
export class AboutMePage {

  constructor(
    private _aboutmeService: AboutmeService
  ) { }
  
  getAboutMeInformations() {
    this._aboutmeService.getAboutme()
  }

}
