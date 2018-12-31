import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ContactPageModule } from '../contact/contact.module';
import { GenrePageModule } from '../about/about.module';
import { HomePageModule } from '../home/home.module';
import { SearchPageModule } from '../search/search.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    GenrePageModule,
    ContactPageModule,
    SearchPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
