import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public showCollapseMenu: boolean = false;
  public imageLink: string = '../../assets/icons/menu-simple-line-icons@2x.png';

  constructor() { }

  ngOnInit() {

  }

  showHideMenu(){
    this.showCollapseMenu === false ? 
    (this.showCollapseMenu = true, this.imageLink =  '../../assets/icons/close-simple-line-icons@2x.png'): 
    (this.showCollapseMenu = false, this.imageLink = '../../assets/icons/menu-simple-line-icons@2x.png')
  }

}
