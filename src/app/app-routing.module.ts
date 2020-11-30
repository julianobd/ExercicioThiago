import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvatarEditComponent } from './pages/avatar/avatar-edit/avatar-edit.component';
import { AvatarListComponent } from './pages/avatar/avatar-list/avatar-list.component';
import { ItemAddComponent } from './pages/item/item-add/item-add.component';
import { ItemDelComponent } from './pages/item/item-del/item-del.component';
import { ItemListComponent } from './pages/item/item-list/item-list.component';
import { JobsAddComponent } from './pages/jobs/jobs-add/jobs-add.component';
import { JobsEditComponent } from './pages/jobs/jobs-edit/jobs-edit.component';
import { JobsListComponent } from './pages/jobs/jobs-list/jobs-list.component';
import { LoginComponent } from './pages/login/login.component';
import { MachinesEditComponent } from './pages/machines/machines-edit/machines-edit.component';
import { MachinesGetComponent } from './pages/machines/machines-get/machines-get.component';
import { ServersAddComponent } from './pages/servers/servers-add/servers-add.component';
import { ServersListComponent } from './pages/servers/servers-list/servers-list.component';
import { UsersAddComponent } from './pages/users/users-add/users-add.component';
import { UsersEditComponent } from './pages/users/users-edit/users-edit.component';
import { UsersGetComponent } from './pages/users/users-get/users-get.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'servers', component: ServersListComponent},
  {path: 'addServer', component: ServersAddComponent},
  {path: 'avatars', component: AvatarListComponent},
  {path: 'editAvatars', component: AvatarEditComponent},
  {path: 'users', component: UsersGetComponent},
  {path: 'editUser', component: UsersEditComponent},
  {path: 'addUser', component: UsersAddComponent},
  {path: 'item', component: ItemListComponent},
  {path: 'delItem', component: ItemDelComponent},
  {path: 'addItem', component: ItemAddComponent},
  {path: 'jobs', component: JobsListComponent},
  {path: 'editJobs', component: JobsEditComponent},
  {path: 'addJobs', component: JobsAddComponent},
  {path: 'machines', component: MachinesGetComponent},
  {path: 'editMachines', component: MachinesEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
