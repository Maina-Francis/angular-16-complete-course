import { Component } from "@angular/core";
import { SubscribeService } from "../services/subscribe.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  selectedTab: string = "home";

  //When HOME Link is clicked
  HomeClicked() {
    this.selectedTab = "home";
  }

  //When Admin Link is clicked
  AdminClicked() {
    this.selectedTab = "admin";
  }

  onSubscribe() {
    let subService = new SubscribeService();
    subService.onSubscribeClicked('monthly');
  }
}
