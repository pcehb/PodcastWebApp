import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { ChartPage } from '../charts/charts.page';
import { SettingsPage } from '../settings/settings.page';
import { SearchPage } from '../search/search.page';
import { PlayingPage } from '../playing/playing.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(Playing:Playing)',
        pathMatch: 'full',
      },
      {
        path: 'Playing',
        outlet: 'Playing',
        component: PlayingPage
      },
      {
        path: 'YourShows',
        outlet: 'YourShows',
        component: HomePage
      },
      {
        path: 'Charts',
        outlet: 'Charts',
        component: ChartPage
      },
      {
        path: 'Search',
        outlet: 'Search',
        component: SearchPage
      },
      {
        path: 'Settings',
        outlet: 'Settings',
        component: SettingsPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(Playing:Playing)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
