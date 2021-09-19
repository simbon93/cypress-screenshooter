

import  {config} from './config';

const screenshotClip = {x: 330, y: 20, width: 470, height: 670};

describe('Let egt some training data', () => {
	it('Does not do much!', () => {

	  for(const slug of config.slugs){


		  cy.visit(config.baseUrl+slug);
		  cy.get('.pdfemb-toolbar-top > .pdfemb-fs').click();
		  cy.get('.pdfemb-fsp-content > .pdfemb-viewer > .pdfemb-toolbar > .pdfemb-page-area > .pdfemb-page-count').invoke('text')
		  .then(text => {
			const totalPages = parseInt(text);
			let currentPage = 0;

			for(currentPage; currentPage<=totalPages; currentPage++){

				cy.get('.pdfemb-fsp-content > .pdfemb-viewer > .pdfemb-toolbar > .pdfemb-next').click();
				const filename = `${slug}_page_${currentPage+1}`;
				cy.get('.pdfemb-fsp-content > .pdfemb-viewer').screenshot(filename, {capture: 'fullPage',clip: config.clip,scale: true})
				cy.wait(2)
			}
		  })

	  }

	})
  })
