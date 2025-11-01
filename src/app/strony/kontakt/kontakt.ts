import {Component, inject} from '@angular/core';
import * as kontaktCfg from '../../../../public/cfg/kontakt.json';
import {HeadLinks} from '../../serwisy/head-links/head-links';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'nat-kontakt',
  imports: [],
  templateUrl: './kontakt.html',
  styleUrl: './kontakt.scss'
})
export class Kontakt {

  headLinks = inject(HeadLinks)
  headMeta = inject(Meta)

  get cfg() {
    return kontaktCfg
  }

  get cfgTelefon() {
    return kontaktCfg.telefon
  }

  get cfgTelefonHref() {
    return 'tel:' + this.cfgTelefon.replace(/\s/g, '')
  }

  get cfgMail() {
    return kontaktCfg.email
  }

  get cfgMailHref() {
    return 'mailto:' + kontaktCfg.email
  }

  get cfgGodziny() {
    return kontaktCfg.godzinyOtwarcia
  }

  constructor() {
    this.headLinks.createPageLinks()
    this.headMeta.addTag({
      name: 'description',
      content: 'Dane kontaktowe i dojazdu do studia terapii manualnych Naturalis.'
    })
  }
}
