import {Page, NavController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/settingsTab/settingsTab.html',
})
export class settingsTab {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
