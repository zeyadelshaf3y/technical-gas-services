import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NewsComponent} from './news.component';
import {NewsInnerComponent} from './components/news-inner/news-inner.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent
  },
  {
    path: ':id',
    component: NewsInnerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {
}
