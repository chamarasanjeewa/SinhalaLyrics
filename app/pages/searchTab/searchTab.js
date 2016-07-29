import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the TabthreePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/searchTab/searchTab.html',
})
export class searchTab {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
