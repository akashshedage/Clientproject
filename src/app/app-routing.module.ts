import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EggerLoadingComponent } from './egger-loading/egger-loading.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { LoginComponent } from './login/login.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';


const routes: Routes = [
  {path:'templateForm', component: TemplateDrivenComponent},
  {path:'reactiveForm', component: ReactiveComponent},
  {path:'eggerLoading', component: EggerLoadingComponent},
  {path:'lazyLoad', component: LazyLoadingComponent},
  {path:'pipes', component: PipesComponent},
  {path:'data-binding', component: DataBindingComponent},
  {path:'directives', component: DirectivesComponent}


  // {path:'', redirectTo:'login', pathMatch: 'full'},
  // {path:'login', component: LoginComponent },
  // { path: "", component:ContactComponent },
  // {path:"product", canActivate: [AuthGuard], loadChildren: "./product/product.module#ProductModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
