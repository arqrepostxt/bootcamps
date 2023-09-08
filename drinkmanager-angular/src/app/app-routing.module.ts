import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/login/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'manage', component: ManageProductsComponent, canActivate: [authGuard] },
  { path: 'admin', redirectTo: '/manage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
