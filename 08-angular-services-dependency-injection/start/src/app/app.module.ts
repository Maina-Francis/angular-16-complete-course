import { NgModule, InjectionToken } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./header/home/home.component";
import { AdminComponent } from "./header/admin/admin.component";
import { HeroComponent } from "./header/home/hero/hero.component";
import { SidebarComponent } from "./header/home/sidebar/sidebar.component";
import { UserListComponent } from "./header/admin/user-list/user-list.component";
import { FormsModule } from "@angular/forms";
import { UserDetailComponent } from "./header/admin/user-detail/user-detail.component";
import { SubscribeService } from "./services/subscribe.service";
import { UserService } from "./services/user.service";
import { LoggerService } from "./services/logger.service";

export const USER_TOKEN = new InjectionToken<UserService>("User_Service");

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminComponent,
    HeroComponent,
    SidebarComponent,
    UserListComponent,
    UserDetailComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [
    SubscribeService,
    { provide: USER_TOKEN, useClass: UserService },
    LoggerService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
