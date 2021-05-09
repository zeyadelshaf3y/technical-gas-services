import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import {RouterModule} from '@angular/router';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { ShareComponent } from './components/share/share.component';

const modules = [
  TranslateModule,
  FormsModule,
  RouterModule
];

@NgModule({
  declarations: [PageHeaderComponent, NewsCardComponent, ShareComponent],
  imports: [
    CommonModule,
      ...modules
  ],
  exports: [
    ...modules,
    PageHeaderComponent,
    NewsCardComponent,
    ShareComponent
  ]
})
export class SharedModule { }
