import { Component, OnInit } from '@angular/core';
import { TranslatorService } from '../services/translator.service';
import { languages } from '../models/languages';
import { of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-translate-page',
    templateUrl: './translate-page.component.html',
    styleUrls: ['./translate-page.component.css'],
    standalone: false
})
export class TranslatePageComponent implements OnInit {
  language$ = of(languages)
  fromLang = 'en'
  toLang: string = ''
  textInput: string = ''
  translatedText: string = '';
  error: string = ''
  isToastOpen: boolean = false;

  constructor(private translate: TranslateService, private translator: TranslatorService) { }

  ngOnInit(): void {
  }

  fromSelected(value: any) {
    this.fromLang = value.detail.value;
    this.translate.use(this.fromLang)
  }

  toSelected(value: any) {
    this.toLang = value.detail.value;
    this.translateText()
  }

  async translateText() {
    const input = this.textInput
    try {
      this.translatedText = await this.translator.translateText(input, this.toLang)     
    } catch (error: any) {
      this.error = error.error.error.message
      this.isToastOpen = true
    }
  }

  clearText() {
    this.textInput = ''
    this.translatedText = "Translation..."
    this.error = ''
    this.toLang = ''
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen
  }
}
