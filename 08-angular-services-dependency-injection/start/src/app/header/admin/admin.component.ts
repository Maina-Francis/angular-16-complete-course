import { Component, Inject } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
})
export class AdminComponent {
  constructor(private userService: UserService) {}

  name: string = "";
  gender: string = "Male";
  status: string = "Active";
  subType: string = "Yearly";

  createNewUser() {
    this.userService.createUser(
      this.name,
      this.gender,
      this.subType,
      this.status
    );
  }
}
