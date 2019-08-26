import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homebrew',
  templateUrl: './homebrew.component.html',
  styleUrls: ['./homebrew.component.css']
})
export class HomebrewComponent implements OnInit {
  data = [{    'name': 'Dagarin Thunderaxe',
    'badges': ['Dwarf','Cleric','Level 2'],
    'download': "assets/DnDHomebrew.pdf"}];

  constructor() { }

  ngOnInit() {
  }

}
