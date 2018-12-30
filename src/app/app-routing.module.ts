import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'details', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'details/:id', loadChildren: './details/details.module#DetailsPageModule'},
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'Login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'ResetPassword', loadChildren: './reset-password/reset-password.module#ResetPasswordPageModule' },
  { path: 'Signup', loadChildren: './signup/signup.module#SignupPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
