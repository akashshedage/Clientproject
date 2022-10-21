import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-comp-demo',
  templateUrl: './comp-demo.component.html',
  styleUrls: ['./comp-demo.component.css']
})
export class CompDemoComponent implements OnInit {

  abc :string[];
  dev : string[];
  constructor(private _demoService : DemoService) { }

  ngOnInit() {
    this.abc = this._demoService.arrDemo;
    this._demoService.createPost().subscribe(data => this.dev = data)
  }

}
