import { Component } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent {
  onSubscribe() {
    console.log("Subscribe button in header is clicked");
    // Add user to the db
    // Send email with subscription detail
    // Allow user to access the services

    alert("Thank you for subscribing. You can access the services Now!");
  }
}
