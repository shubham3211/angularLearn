import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, ROUTES, Route, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { FormsModule } from '@angular/forms'
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GharComponent } from './ghar/ghar.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShortPipe } from './short.pipe';
import { GenderPipe } from './gender.pipe';
import { HighlightDirective } from './highlight.directive';
import { In1Component } from './in1/in1.component';
import { Ou1Component } from './ou1/ou1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServerComponent,
    ServersComponent,
    UserComponent,
    UsersComponent,
    EditServerComponent,
    PageNotFoundComponent,
    GharComponent,
    EmployeeListComponent,
    DepartmentListComponent,
    ProductListComponent,
    ProductComponent,
    EmployeeComponent,
    TemplateFormComponent,
    ModelFormComponent,
    ShortPipe,
    GenderPipe,
    HighlightDirective,
    In1Component,
    Ou1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
