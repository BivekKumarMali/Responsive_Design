import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  AddOpenClass: string;
  AddSideNavClass: string;
  AddToCross: string;
  isLoading: string;
  constructor() { }

  ngOnInit(): void {
    this.checkIfLoaded();
    const primary = '#fff';
    document.documentElement.style.setProperty('--primary-color', primary);
  }

  checkIfLoaded() {
    window.addEventListener('load', () => {
      this.isLoading = 'preloader-finish';
    });
  }
  toggle() {
    this.AddOpenClass = this.AddOpenClass ? '' : 'openToggleNav';
    this.AddSideNavClass = this.AddSideNavClass ? '' : 'openToggleSideBar';
    this.AddToCross = this.AddToCross ? '' : 'toCross';
  }
}
