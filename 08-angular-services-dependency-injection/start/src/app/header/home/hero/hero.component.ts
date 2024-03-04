import { Component, inject } from "@angular/core";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
})
export class HeroComponent {
  onSubscribe() {
    console.log("Subscribe button in header is clicked");
    // Add user to the db
    // Send email with subscription detail
    // Allow user to access the services

    alert("Thank you for subscribing. You can access the services Now!");
  }
}
