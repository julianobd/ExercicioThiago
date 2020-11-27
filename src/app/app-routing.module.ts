import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvatarListComponent } from './pages/avatar/avatar-list/avatar-list.component';
import { ItemListComponent } from './pages/item/item-list/item-list.component';
import { ServersListComponent } from './pages/servers/servers-list/servers-list.component';

const routes: Routes = [
  {path: 'servers', component: ServersListComponent},
  {path: 'avatars', component: AvatarListComponent},
  {path: 'item', component: ItemListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
