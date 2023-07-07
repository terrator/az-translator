import { Component, OnInit } from '@angular/core';
import { TranslatorService } from '../services/translator.service';
import { languages } from '../models/languages';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

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
  error: string = ''
  isToastOpen: boolean = false;

  constructor(private translator: TranslatorService) { }

  ngOnInit(): void {
  }

  fromSelected(value: any) {
    this.fromLang = value.detail.value;
  }

  toSelected(value: any) {
    this.toLang = value.detail.value;
  }

  async translate() {
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
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen
  }
}
