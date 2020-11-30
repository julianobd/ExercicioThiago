import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarListComponent } from './pages/avatar/avatar-list/avatar-list.component';
import { AvatarEditComponent } from './pages/avatar/avatar-edit/avatar-edit.component';
import { ItemListComponent } from './pages/item/item-list/item-list.component';
import { ItemAddComponent } from './pages/item/item-add/item-add.component';
import { ItemDelComponent } from './pages/item/item-del/item-del.component';
import { JobsListComponent } from './pages/jobs/jobs-list/jobs-list.component';
import { JobsAddComponent } from './pages/jobs/jobs-add/jobs-add.component';
import { JobsEditComponent } from './pages/jobs/jobs-edit/jobs-edit.component';
import { MachinesGetComponent } from './pages/machines/machines-get/machines-get.component';
import { MachinesEditComponent } from './pages/machines/machines-edit/machines-edit.component';
import { ServersListComponent } from './pages/servers/servers-list/servers-list.component';
import { ServersAddComponent } from './pages/servers/servers-add/servers-add.component';
import { ServersEditComponent } from './pages/servers/servers-edit/servers-edit.component';
import { UsersGetComponent } from './pages/users/users-get/users-get.component';
import { UsersAddComponent } from './pages/users/users-add/users-add.component';
import { UsersDelComponent } from './pages/users/users-del/users-del.component';
import { UsersEditComponent } from './pages/users/users-edit/users-edit.component';
import { HeaderComponent } from './pages/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarListComponent,
    AvatarEditComponent,
    ItemListComponent,
    ItemAddComponent,
    ItemDelComponent,
    JobsListComponent,
    JobsAddComponent,
    JobsEditComponent,
    MachinesGetComponent,
    MachinesEditComponent,
    ServersListComponent,
    ServersAddComponent,
    ServersEditComponent,
    UsersGetComponent,
    UsersAddComponent,
    UsersDelComponent,
    UsersEditComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
