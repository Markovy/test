import {Component, inject} from '@angular/core';
import {HeadLinks} from '../../../serwisy/head-links/head-links';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'nat-inf-terapia-zatok',
  imports: [],
  templateUrl: './inf-terapia-zatok.html',
  styleUrl: './inf-terapia-zatok.scss'
})
export class InfTerapiaZatok {
  headLinks = inject(HeadLinks)
  headMeta = inject(Meta)

  constructor() {
    this.headLinks.createPageLinks()
    this.headMeta.addTag({
      name: 'description',
      content: 'Krótki opis terapii manualnej zatok. Co to jest, dla kogo, wskazania i przeciwskazania.'
    })
  }
}
