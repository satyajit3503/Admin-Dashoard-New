import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LoginComponent } from './login/login.component';
import { BranchPageComponent } from './branch-page/branch-page.component';

const routes: Routes = [
  { path: 'admin', component: AdminHomeComponent },
  { path: '', component: LoginComponent },
  { path: 'branch', component: BranchPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
