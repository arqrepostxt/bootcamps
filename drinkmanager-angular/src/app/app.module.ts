import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { AddItemDialogComponent } from './components/manage-products/add-item-dialog/add-item-dialog.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { LoginComponent } from './components/login/login.component';
import { UsernameComponent } from './components/login/username/username.component';
import { PasswordComponent } from './components/login/password/password.component';
import { RegisterComponent } from './components/login/register/register.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
    UsernameComponent,
    PasswordComponent,
    RegisterComponent,
    HomeComponent,
    AddItemDialogComponent,
    ManageProductsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
