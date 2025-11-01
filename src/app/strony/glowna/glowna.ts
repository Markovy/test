import {
  ChangeDetectionStrategy,
  Component, DOCUMENT,
  effect,
  ElementRef,
  inject,
  viewChild,
  ViewEncapsulation
} from '@angular/core';
import {Meta} from '@angular/platform-browser';
import {HeadLinks} from '../../serwisy/head-links/head-links';

@Component({
  selector: 'nat-glowna',
  imports: [],
  templateUrl: './glowna.html',
  styleUrl: './glowna.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Glowna {
  headLinks = inject(HeadLinks)
  headMeta = inject(Meta)
  document = inject(DOCUMENT)

  booksyScript = viewChild<ElementRef<HTMLSpanElement>>('booksyScript')

  constructor() {
    this.headLinks.createPageLinks([{
      rel: 'preconnect',
      href: 'https://booksy.com',
      crossorigin: true,
    }])
    this.headMeta.addTag({
      name: 'description',
      content: 'Studio terapii manualnych oferujące masaż twarzy kobido, terapię manualną zatok, jak również bańki ogniowe.'
    })
    effect(() => {
      const span = this.booksyScript()
      if (span && span.nativeElement) {
        const script = this.document.createElement('script')
        script.defer = true;
        script.src = 'https://booksy.com/widget/code.js?id=287546&country=pl&lang=pl'
        script.type = 'text/javascript'
        span.nativeElement.appendChild(script)
      }
    });
  }

  openBooksy() {
    const x = document.getElementsByClassName('booksy-widget-button').item(0)
    console.log(x)
    if (x) {
      (x as any).click()
    }

  }
}
