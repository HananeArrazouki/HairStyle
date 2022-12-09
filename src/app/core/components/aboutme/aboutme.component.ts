import { Component, Input } from '@angular/core';
import { Aboutme } from '../../interfaces/aboutme';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
})
export class AboutmeComponent {

  constructor() { }

  @Input() aboutme : Aboutme = {id: 1, name: "", image: ""}


}
