import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { CompDemoComponent } from './comp-demo/comp-demo.component';
import {HttpClientModule} from '@angular/common/http';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { ContactComponent } from './contact/contact.component';
import { DesignutilityService } from './services/designutility.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    NgswitchComponent,
    CompDemoComponent,
    Card1Component,
    Card2Component,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DesignutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
