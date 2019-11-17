import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GharComponent } from './ghar/ghar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { Ou1Component } from './ou1/ou1.component';
import { In1Component } from './in1/in1.component';

// const appRoutes : Routes   = [
//   { path: '', component: HomeComponent },
//   { 
//     path: 'servers', component: ServersComponent, children: [
//       { path: ':id', component: ServerComponent },
//       { path: ':id/edit', component: EditServerComponent }
//     ] 
//   },
//   { 
//     path: 'users', component: UsersComponent, children: [
//       { path: ':id/:name', component: UserComponent }
//     ]
//   },
//   { path: 'hello', redirectTo: '/users' },
//   { path: '**', component: PageNotFoundComponent }
// ]

const appRoutes:Routes =  [
  { path: 'ghar', component: GharComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'employees', component: EmployeeListComponent, children: [
    { path: ':id', component: EmployeeComponent }
  ] },
  { path: 'department', component: DepartmentListComponent },
  { path: '', redirectTo: 'ghar', pathMatch: 'full' },
  { path: 'tform', component: TemplateFormComponent},
  { path: 'mform', component: ModelFormComponent },
  { path: 'o', component: Ou1Component, children: [
    {path: 'i', component: In1Component}
  ] }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}