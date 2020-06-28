import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { UnviredCordovaSDK } from "@ionic-native/unvired-cordova-sdk/ngx"

@Component({
  selector: "app-folder",
  templateUrl: "./folder.page.html",
  styleUrls: ["./folder.page.scss"],
})
export class FolderPage implements OnInit {
  public folder: string

  constructor(
    private activatedRoute: ActivatedRoute,
    private customPlugin: UnviredCordovaSDK
  ) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get("id")
  }

  callWinRT() {
    this.customPlugin.login(null)
  }
}
