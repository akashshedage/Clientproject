import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor() { }

  messageAlert(){
    alert("Thanks for Subscribe.")
  }

  product=[
    {name: "Laptop", id: "001"},
    {name: "Mobile", id: "002"},
    {name: "TV", id: "003"},
    {name: "Washing Machine", id: "004"}
  ]
}

