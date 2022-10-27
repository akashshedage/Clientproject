import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DesktopComponent } from './desktop/desktop.component';
import { LaptopComponent } from './laptop/laptop.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  { path: "", component:ProductComponent, children:
      [
        {path:"desktop", component: DesktopComponent},
        {path:"laptop", component: LaptopComponent}
      ]
    }
];

@NgModule({
  declarations: [
    DesktopComponent,
    LaptopComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
 
  ]
})
export class ProductModule {

  constructor(){
    console.log("Lazy Loading called");
    
  }
 }
