import { Component, OnInit } from '@angular/core';
import { TranslatorService } from '../services/translator.service';

@Component({
  selector: 'app-translate-page',
  templateUrl: './translate-page.component.html',
  styleUrls: ['./translate-page.component.css']
})
export class TranslatePageComponent implements OnInit{
  constructor(private translator: TranslatorService) { }

  ngOnInit(): void {
      // const input = "Hello from Toronto"
      // this.translator.translateText(input, 'es')
      // .then(resp => console.log(resp))
      // .catch(err => console.log(err));
  }
}
