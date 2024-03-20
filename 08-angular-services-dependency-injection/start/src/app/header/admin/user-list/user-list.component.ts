import { Component, Inject } from "@angular/core";
import { User } from "src/app/Models/user.model";
import { USER_TOKEN } from "src/app/app.module";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
})
export class UserListComponent {
  constructor(@Inject(USER_TOKEN) private userService: UserService) {}

  userList: User[] = this.userService.getAllUsers();
}
