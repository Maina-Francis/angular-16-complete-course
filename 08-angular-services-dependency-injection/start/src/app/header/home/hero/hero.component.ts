import { Component, Inject } from "@angular/core";
import { SubscribeService } from "src/app/services/subscribe.service";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html"
})
export class HeroComponent {
  // One way of injecting a service is using a constructor
  // constructor(private subService: SubscribeService){
  // }

  // the other way of injecting a service is using Inject()
subService = Inject(SubscribeService)

  onSubscribe() {
   
    this.subService.onSubscribeClicked("Yearly");
  }
}
