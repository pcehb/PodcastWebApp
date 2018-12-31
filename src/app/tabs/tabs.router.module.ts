import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { GenrePage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
import { SearchPage } from '../search/search.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(YourShows:YourShows)',
        pathMatch: 'full',
      },
      {
        path: 'YourShows',
        outlet: 'YourShows',
        component: HomePage
      },
      {
        path: 'Genres',
        outlet: 'Genres',
        component: GenrePage
      },
      {
        path: 'Search',
        outlet: 'Search',
        component: SearchPage
      },
      {
        path: 'Settings',
        outlet: 'Settings',
        component: ContactPage
      }

    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(YourShows:YourShows)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
