import { ProfileComponent } from './profile/profile.component';
import { FilesComponent } from './files/files.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'status', component: FilesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
