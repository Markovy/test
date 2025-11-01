import {ChangeDetectionStrategy, Component, inject, signal, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as menuCfg from '../../../../../public/cfg/menu.json'
import * as kontaktCfg from '../../../../../public/cfg/kontakt.json'
import {Drawer} from 'primeng/drawer';

@Component({
  selector: 'nat-belka-menu',
  imports: [
    Drawer,
  ],
  templateUrl: './belka-menu.html',
  styleUrl: './belka-menu.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BelkaMenu {

  leftMenuVisible = false

  // [style]="{'background-color': '#9bbd9b'}
  leftMenuDt = {
    'background': '#9bbd9b',
    'content.padding': '0 10px',
    'header.padding': '0 20px',
  }

  activatedRoute = inject(ActivatedRoute)
  nazwaWidoku = signal('')

  constructor() {
    this.#leafData().subscribe(data => {
      console.log(data['nazwaWidoku'])
      this.nazwaWidoku.set(data['nazwaWidoku'] ?? '')
    })
  }

  get cfg() {
    return menuCfg.pozycje as {
      nazwa: string
      link: string
      nazwaWidoku: string
      opened?: boolean
      submenu?: {
        nazwa: string
        link: string
        nazwaWidoku: string
      }[]
    }[];
  }

  get linkFB() {
    return kontaktCfg.linkFacebook
  }

  get linkInsta() {
    return kontaktCfg.linkInstagram
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

  #leafData() {
    let ar = this.activatedRoute
    while (ar.firstChild) {
      ar = ar.firstChild
    }
    return ar.data
  }

  openMenu(p: { opened?: boolean }, $event: FocusEvent) {
    console.log('openMenu', p)
    p.opened = true;
    $event.stopPropagation();
    $event.stopImmediatePropagation()
    return false
  }

  closeMenu(p: { opened?: boolean }, $event: FocusEvent) {
    p.opened = false;
    $event.stopPropagation();
    $event.stopImmediatePropagation()
    return false
  }
}
