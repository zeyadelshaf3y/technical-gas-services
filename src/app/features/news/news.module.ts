import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import {SharedModule} from '../../shared/shared.module';
import {LayoutModule} from '../../layout/layout.module';
import { NewsInnerComponent } from './components/news-inner/news-inner.component';


@NgModule({
  declarations: [NewsComponent, NewsInnerComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule,
    LayoutModule
  ]
})
export class NewsModule { }
