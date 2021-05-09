import {Component, Input, OnInit} from '@angular/core';
import {LanguageService} from '../../services/language.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input('bg') background: string;
  @Input('title') title: string;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
  }

  isArabic(): boolean {
    return this.languageService.direction === 'rtl';
  }

}
