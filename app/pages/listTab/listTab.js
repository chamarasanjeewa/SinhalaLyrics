import {Page, NavController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/listTab/listTab.html',
})
export class listTab {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
