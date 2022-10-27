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
import { LoginComponent } from './login/login.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { EggerLoadingComponent } from './egger-loading/egger-loading.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { PipesComponent } from './pipes/pipes.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    NgswitchComponent,
    CompDemoComponent,
    Card1Component,
    Card2Component,
    ContactComponent,
    LoginComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    EggerLoadingComponent,
    LazyLoadingComponent,
    PipesComponent,
    DataBindingComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DesignutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
