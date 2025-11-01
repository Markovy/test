import {ChangeDetectionStrategy, Component, inject, ViewEncapsulation} from '@angular/core';
import {HeadLinks} from '../../serwisy/head-links/head-links';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'nat-uslugi',
  imports: [],
  templateUrl: './uslugi.html',
  styleUrl: './uslugi.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Uslugi {
  headLinks = inject(HeadLinks)
  headMeta = inject(Meta)

  constructor() {
    this.headLinks.createPageLinks()
    this.headMeta.addTag({
      name: 'description',
      content: 'Spis usług oferowanych przez studio terapii manualnych Naturalis.'
    })
  }
}
