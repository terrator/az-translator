import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TranslatorService {
  private endpoint: string = environment.azureTranslatorEndpoint;
  private apiKey: string = environment.azureTranslatorKey;
  private location: string = environment.location;

  constructor(private http: HttpClient) { 
  }

  async translateText(text: string, targetLang: string): Promise<string> {
    const url = `${this.endpoint}/translate`;
    const headers = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': this.apiKey,
      'Ocp-Apim-Subscription-Region': this.location
    });
    const params = new HttpParams()
      .set('api-version', '3.0')
      .set('to', targetLang)
      .set('textType', 'plain')
      .set('includeSentenceLength', 'true');
    
    const body = [ { Text: text } ];

    const options = { headers, params };
    const response = await this.http.post<any[]>(url, body, options).toPromise();
    return response![0].translations[0].text;  }
}
