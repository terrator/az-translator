import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { languages } from './models/languages'
import { of } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  @ViewChild('popover') popover: any;
  
  title = 'translator-demo';
  language$ = of(languages)

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
    translate.addLangs(['en', 'fr', 'es']);
  }
}
