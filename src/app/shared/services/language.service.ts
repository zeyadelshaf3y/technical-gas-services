import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() {
    this.direction = this.getDirection();
  }

  direction = '';

  getDirection(): string {
    return localStorage.getItem('dir');
  }

  setArabicDirection(): void {
    localStorage.setItem('dir', 'rtl');
    document.body.dir = 'rtl';
    this.direction = 'rtl';
    // window.location.href = '/';
  }

  setEnglishDirection(): void {
    localStorage.setItem('dir', 'ltr');
    document.body.dir = 'ltr';
    this.direction = 'ltr';
    // window.location.href = '/';
  }
}
