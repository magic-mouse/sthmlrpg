import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  @Input() title: any;
  @Input() headline: any;
  @Input() description: any;

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
