import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'genres', loadChildren: './genres/genres.module#GenrePageModule'},
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'details', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'details/:id', loadChildren: './details/details.module#DetailsPageModule'},
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule'},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'resetpassword', loadChildren: './reset-password/reset-password.module#ResetPasswordPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'playing', loadChildren: './playing/playing.module#PlayingPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
