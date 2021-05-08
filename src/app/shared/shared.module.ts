import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

const modules = [
  TranslateModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      ...modules
  ],
  exports: [
    ...modules
  ]
})
export class SharedModule { }
