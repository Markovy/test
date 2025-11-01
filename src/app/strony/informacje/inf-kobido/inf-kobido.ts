import {Component, inject} from '@angular/core';
import {HeadLinks} from '../../../serwisy/head-links/head-links';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'nat-inf-kobido',
  imports: [],
  templateUrl: './inf-kobido.html',
  styleUrl: './inf-kobido.scss'
})
export class InfKobido {
  headLinks = inject(HeadLinks)
  headMeta = inject(Meta)

  constructor() {
    this.headLinks.createPageLinks()
    this.headMeta.addTag({
      name: 'description',
      content: 'Krótki opis masażu twarzy kobido. Co to jest, dla kogo, wskazania i przeciwskazania.'
    })
  }
}
