import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { SettingsPageModule } from '../settings/settings.module';
import { ChartPageModule } from '../charts/charts.module';
import { HomePageModule } from '../home/home.module';
import { SearchPageModule } from '../search/search.module';
import { PlayingPageModule } from '../playing/playing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    ChartPageModule,
    PlayingPageModule,
    SettingsPageModule,
    SearchPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
