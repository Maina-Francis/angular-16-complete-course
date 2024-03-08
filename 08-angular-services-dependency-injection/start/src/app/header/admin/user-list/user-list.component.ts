import { Component, Inject } from "@angular/core";
import { User } from "src/app/Models/user.model";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
})
export class UserListComponent {
  constructor(private userService: UserService) {}

  userList: User[] = this.userService.getAllUsers();
}
