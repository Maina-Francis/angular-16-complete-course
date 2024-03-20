import { Injectable } from "@angular/core";

@Injectable()
export class SubscribeService {
  onSubscribeClicked(type: string) {
    console.log("Subscribe button in header is clicked");
    // Add user to the db
    // Send email with subscription detail
    // Allow user to access the services

    alert(`Thank you for the ${type} subscription. You can access the services Now!`);
  }
}
