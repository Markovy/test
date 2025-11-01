import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

import * as kontaktCfg from '../../../../../public/cfg/kontakt.json'
import {BelkaMenu} from '../belka-menu/belka-menu';

@Component({
  selector: 'nat-gorna-belka',
  imports: [
    BelkaMenu
  ],
  templateUrl: './gorna-belka.html',
  styleUrl: './gorna-belka.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GornaBelka {
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
}
