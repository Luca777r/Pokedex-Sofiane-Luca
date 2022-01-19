import { Component, OnInit, Type } from '@angular/core';
import { pokemon } from '../models/types';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  Carapuce: pokemon = {
    nom: 'Carapuce',
    taille: '0,50 m',
    numero: 7,
    type: 'Eau',
    poids: '9,0 kg',
    description:
      "Quand il rentre son cou dans sa carapace, il peut projeter de l'eau à haute pression.",
    evolution: 8,
  };

  constructor() {}

  ngOnInit(): void {}
}
