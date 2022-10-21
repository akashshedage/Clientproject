import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../services/designutility.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {

  constructor(private _msgService: DesignutilityService) { }
  product={};

  ngOnInit() {
    this.product= this._msgService.product
  }

  btnClick(){
    this._msgService.messageAlert()

  }

}
