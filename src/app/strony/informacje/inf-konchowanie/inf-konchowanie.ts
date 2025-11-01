import {Component, inject} from '@angular/core';
import {HeadLinks} from '../../../serwisy/head-links/head-links';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'nat-inf-konchowanie',
  imports: [],
  templateUrl: './inf-konchowanie.html',
  styleUrl: './inf-konchowanie.scss'
})
export class InfKonchowanie {
  headLinks = inject(HeadLinks)
  headMeta = inject(Meta)

  constructor() {
    this.headLinks.createPageLinks()
    this.headMeta.addTag({
      name: 'description',
      content: 'Krótki opis konchowania uszu. Co to jest, dla kogo, wskazania i przeciwskazania.'
    })
  }
}
