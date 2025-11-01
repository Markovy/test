import {DOCUMENT, inject, Injectable} from '@angular/core';

export interface HeadLink {
  rel: string
  href: string
  crossorigin: boolean
}

export const ALL_PAGES_LINKS: HeadLink[] = [
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
    crossorigin: true,
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossorigin: true,
  },
  {
    rel: 'preconnect',
    href: 'https://facebook.com',
    crossorigin: true,
  },
  {
    rel: 'canonical',
    href: 'https://naturalis.waw.pl',
    crossorigin: false,
  }
]

@Injectable({
  providedIn: 'root'
})
export class HeadLinks {
  doc = inject(DOCUMENT)

  createPageLinks(links?: HeadLink[]) {
    const headLinks = this.#getHeadLinks()
    for (const link of [...ALL_PAGES_LINKS, ...links ?? []]) {
      this.#createLink(link, headLinks)
    }
  }

  #createLink(link: HeadLink, headLinks: HeadLink[]) {
    if (!headLinks.some(l => l.rel === link.rel && l.href === link.href)) {
      let linkEl: HTMLLinkElement = this.doc.createElement('link');
      linkEl.setAttribute('rel', link.rel);
      linkEl.setAttribute('href', link.href);
      if (link.crossorigin) {
        linkEl.setAttribute('crossorigin', '');
      }
      this.doc.head.appendChild(linkEl)
    }
  }

  #getHeadLinks() {
    const links: HeadLink[] = []
    const headLinks = this.doc.head.getElementsByTagName('link');
    for (let i=0; i< headLinks.length; i++) {
      const hLink = headLinks.item(i);
      if (hLink) {
        links.push({
          rel: hLink.rel,
          href: hLink.href,
          crossorigin: hLink.crossOrigin !== null
        })
      }
    }
    return links;
  }
}
