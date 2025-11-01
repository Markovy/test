import {ChangeDetectionStrategy, Component, inject, ViewEncapsulation} from '@angular/core';
import * as cennikCfg from '../../../../public/cfg/cennik.json'
import {HeadLinks} from '../../serwisy/head-links/head-links';
import {Meta} from '@angular/platform-browser';

interface PozycjaCennika {
  nazwa: string
  czas: string
  cena: string
  opis?: string
}

interface SekcjaCennika {
  nazwaSekcji: string
  pozycje: PozycjaCennika[]
}


@Component({
  selector: 'nat-cennik',
  imports: [],
  templateUrl: './cennik.html',
  styleUrl: './cennik.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cennik {
  headLinks = inject(HeadLinks)
  headMeta = inject(Meta)

  get sekcje(): SekcjaCennika[] {
    return cennikCfg.sekcje
  }

  constructor() {
    this.headLinks.createPageLinks()
    this.headMeta.addTag({
      name: 'description',
      content: 'Cennik usług studia terapii naturalnych Naturalis'
    })
  }

  czesciNazwy(nazwa: string) {
    return nazwa.split('\n');
  }
}
