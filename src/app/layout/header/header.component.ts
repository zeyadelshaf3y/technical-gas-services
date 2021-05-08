import {Component, Input, OnInit} from '@angular/core';
import {LanguageService} from '../../shared/services/language.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('home') home: boolean;
  moreThan200 = false;


  constructor(private translateService: TranslateService,
              public languageService: LanguageService) { }

  ngOnInit(): void {
    window.addEventListener('scroll', (e) => {
      window.scrollY > 200 ? this.moreThan200 = true : this.moreThan200 = false;
    });
  }

  setArabic(): void {
    if (this.languageService.getDirection() !== 'rtl') {
      this.languageService.setArabicDirection();
      this.translateService.use('ar');
    }
  }

  setEnglish(): void {
    if (this.languageService.getDirection() !== 'ltr') {
      this.languageService.setEnglishDirection();
      this.translateService.use('en');
    }
  }

  isArabic(): boolean {
    return this.languageService.direction === 'rtl';
  }

}
