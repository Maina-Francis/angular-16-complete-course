import { Component, inject } from "@angular/core";
import { SubscribeService } from "src/app/services/subscribe.service";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
})
export class HeroComponent {
  onSubscribe() {
    let subService = new SubscribeService();
    subService.onSubscribeClicked("Yearly");
  }
}
