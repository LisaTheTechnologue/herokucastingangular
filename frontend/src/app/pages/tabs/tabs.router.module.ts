import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      // { path: 'drink-menu', loadChildren: '../drink-menu/drink-menu.module#DrinkMenuPageModule' },
      { path: 'user-page', loadChildren: '../user-page/user-page.module#UserPagePageModule' }, 
      { path: 'movies-list', loadChildren: '../movies-list/movies-list.module#MoviesListPageModule' },
      { path: 'actors-list', loadChildren: '../actors-list/actors-list.module#ActorsListPageModule' },
      { path: 'schedule-table', loadChildren: '../schedule-table/schedule-table.module#ScheduleTablePageModule' },
      { path: 'home', loadChildren: '../default/default.module#DefaultPageModule' },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
