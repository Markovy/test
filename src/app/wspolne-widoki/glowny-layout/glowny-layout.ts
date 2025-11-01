import {ChangeDetectionStrategy, Component, inject, ViewEncapsulation} from '@angular/core';
import {GornaBelka} from './gorna-belka/gorna-belka';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'nat-glowny-layout',
  imports: [
    GornaBelka,
    RouterOutlet,
  ],
  templateUrl: './glowny-layout.html',
  styleUrl: './glowny-layout.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlownyLayout {
}
