import {Component, inject} from '@angular/core';
import {HeadLinks} from '../../../serwisy/head-links/head-links';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'nat-inf-terapia-prozniowa',
  imports: [],
  templateUrl: './inf-terapia-prozniowa.html',
  styleUrl: './inf-terapia-prozniowa.scss'
})
export class InfTerapiaProzniowa {
  headLinks = inject(HeadLinks)
  headMeta = inject(Meta)

  constructor() {
    this.headLinks.createPageLinks()
    this.headMeta.addTag({
      name: 'description',
      content: 'Krótki opis terapii próżniowej. Co to jest, dla kogo, wskazania i przeciwskazania.'
    })
  }
}
