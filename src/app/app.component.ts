import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LanguageService} from './shared/services/language.service';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService,
              public languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.translate.setDefaultLang('ar');
    if (this.languageService.getDirection()) {
      document.body.dir = this.languageService.getDirection();
    } else {
      this.languageService.setArabicDirection();
      document.body.dir = 'rtl';
    }
    localStorage.getItem('dir') === 'ltr' ? this.translate.use('en') : this.translate.use('ar');
    AOS.init({
      duration: '700'
    });
  }

}
