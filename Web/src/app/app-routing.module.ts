import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/access/login/login.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
