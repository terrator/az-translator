import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { TranslatePageComponent } from './translate-page.component';

describe('TranslatePageComponent', () => {
  let component: TranslatePageComponent;
  let fixture: ComponentFixture<TranslatePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TranslateModule.forRoot(), IonicModule.forRoot(), FormsModule],
      declarations: [TranslatePageComponent]
    });
    fixture = TestBed.createComponent(TranslatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
