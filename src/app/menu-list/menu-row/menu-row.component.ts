import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-row',
  templateUrl: './menu-row.component.html',
  styleUrls: ['./menu-row.component.css']
})
export class MenuRowComponent implements OnInit {
  @Input() topTitle: any;
  @Input() path: any;
  @Input() badges: any;
  @Input() download: any;

  constructor() { }

  ngOnInit() {
  }

  changePage() {
    alert("this is the page change")
  }
}
