import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  selectProduct: string;
  istrue = true;
  colorValue = {'color': 'blue', 'background-color': '#ddd'};
  arr =[ "Reshma", "Vinayak", "Dinesh"];

  people:any[] = [
    {'name': "Jack", 'country': "UK"},
    {'name': "Sumit", 'country': "USA"},
    {'name': "Anup", 'country': "HK"},
    {'name': "Codemind", 'country': "UK"},
    {'name': "Surya", 'country': "USA"},

  ]
  constructor() { }

  ngOnInit() {
  }
  getProductValue(value){
    console.log(value.value);
    this.selectProduct = value.value;
    
  }

  onClick(){
    this.istrue=false;
  }


}

