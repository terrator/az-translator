import { Component, OnInit } from '@angular/core';
import { TranslatorService } from '../services/translator.service';
import { languages } from '../models/languages';
import { of } from 'rxjs';

@Component({
  selector: 'app-translate-page',
  templateUrl: './translate-page.component.html',
  styleUrls: ['./translate-page.component.css']
})
export class TranslatePageComponent implements OnInit {
  language$ = of(languages)
  fromLang = 'en'
  toLang: string = ''
  textInput: string = ''
  translatedText: string = "Translation..."

  constructor(private translator: TranslatorService) { }

  ngOnInit(): void {
    // const input = "Hello from Toronto"
    // this.translator.translateText(input, 'es')
    // .then(resp => console.log(resp))
    // .catch(err => console.log(err));
  }

  fromSelected(value: any) {
    this.fromLang = value.detail.value;
    // console.log('event', value.detail.value)
  }

  toSelected(value: any) {
    this.toLang = value.detail.value;
  }

  translate() {
    const input = this.textInput
    this.translator.translateText(input, this.toLang)
    .then(resp => { 
      this.translatedText = resp
    })
    .catch(err => console.log(err));
  }

  clearText() {
    this.textInput = ''
    this.translatedText = "Translation..."
  }
}
