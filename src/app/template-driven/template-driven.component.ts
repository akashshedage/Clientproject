import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  defaultCourse='Angular'
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    console.log(form.value);
  }

}
