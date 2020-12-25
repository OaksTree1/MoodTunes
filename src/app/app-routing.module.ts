import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPortalPageComponent } from './pages/user-portal-page/user-portal-page.component';

const routes: Routes = [
  {path: 'user-portal', component: UserPortalPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
