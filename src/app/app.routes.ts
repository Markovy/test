import { Routes } from '@angular/router';
import {GlownyLayout} from './wspolne-widoki/glowny-layout/glowny-layout';
import {Glowna} from './strony/glowna/glowna';
import {Uslugi} from './strony/uslugi/uslugi';
import {Cennik} from './strony/cennik/cennik';
import {InfKobido} from './strony/informacje/inf-kobido/inf-kobido';
import {InfKonchowanie} from './strony/informacje/inf-konchowanie/inf-konchowanie';
import {InfTerapiaProzniowa} from './strony/informacje/inf-terapia-prozniowa/inf-terapia-prozniowa';
import {InfTerapiaZatok} from './strony/informacje/inf-terapia-zatok/inf-terapia-zatok';
import {Kontakt} from './strony/kontakt/kontakt';

export const routes: Routes = [
  {
    path: '',
    component: GlownyLayout,
    data: {
      nazwaWidoku: 'xxx'
    },
    children: [
      {
        path: '',
        component: Glowna,
        title: 'Naturalis',
        data: {
          nazwaWidoku: 'strGlowna'
        }
      },
      {
        path: 'uslugi',
        component: Uslugi,
        title: 'Naturalis - usługi',
        data: {
          nazwaWidoku: 'strUslugi'
        }
      },
      {
        path: 'cennik',
        component: Cennik,
        title: 'Naturalis - cennik',
        data: {
          nazwaWidoku: 'strCennik'
        }
      },
      {
        path: 'kontakt',
        component: Kontakt,
        title: 'Naturalis - kontakt',
        data: {
          nazwaWidoku: 'strKontakt'
        }
      },
      {
        path: 'informacje/kobido',
        component: InfKobido,
        title: 'Naturalis - kobido (info)',
        data: {
          nazwaWidoku: 'strInfoKobido'
        }
      },
      {
        path: 'informacje/konchowanie',
        component: InfKonchowanie,
        title: 'Naturalis - konchowanie (info)',
        data: {
          nazwaWidoku: 'strInfoKonchowanie'
        }
      },
      {
        path: 'informacje/terapia-prozniowa',
        component: InfTerapiaProzniowa,
        title: 'Naturalis - terapia próżniowa (info)',
        data: {
          nazwaWidoku: 'strInfoTerapiaProzniowa'
        }
      },
      {
        path: 'informacje/terapia-zatok',
        component: InfTerapiaZatok,
        title: 'Naturalis - terapia manualna zatok (info)',
        data: {
          nazwaWidoku: 'strInfoTerapiaZatok'
        }
      }
    ]
  }
];
