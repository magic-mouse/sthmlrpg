import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters = [{
    'name': 'Dagarin Thunderaxe',
    'badges': ['Dwarf','Cleric','Level 2'],
    'path': 'https://thenobleartist.com/wp-content/uploads/2018/03/board_game_characters3.jpg'
  },
    {
      'name': 'Evelina Flowersong',
      'badges': ['Elf','Druid','Level 5'],
      'path': './assets/woman-elf-face.png'
    },
    {
      'name': 'Gork',
      'badges': ['Orc','Bard','Level 15'],
      'path': './assets/orc-head.png'
    }];

  constructor() { }

  ngOnInit() {
  }



}
