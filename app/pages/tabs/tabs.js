import {Page} from 'ionic-angular';
import {settingsTab} from '../settingsTab/settingsTab';
import {listTab} from '../listTab/listTab';
import {searchTab} from '../searchTab/searchTab';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    this.settingsTab = settingsTab;
    this.listTab = listTab;
    this.searchTab = searchTab;
  }
}