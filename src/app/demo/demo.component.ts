import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
  toggleBlueTheme(): void {
    document.body.classList.toggle('blue-theme');
  }
  toggleYellowTheme(): void {
    document.body.classList.toggle('yellow-theme');
  }
  togglePinkTheme(): void {
    document.body.classList.toggle('pink-theme');
  }
}
