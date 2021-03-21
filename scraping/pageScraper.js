const scraperObject = {
  url: 'https://www.notino.cz/kosmetika/pletova-kosmetika/',
  scraper: async function (browser) {
    let fs = require('fs');
    let allProducts = [];
    let obj = {};

    async function downloadPages(url, fileName) {
      try {
        let newPage = await browser.newPage();
        await newPage.goto(url);
        const allHTML = await newPage.content();
        fs.writeFileSync('./pages/' + fileName + '.html', allHTML);
        console.log(fileName + ' was saved');
      } catch (err) {
        console.error(err);
      }
    }

    async function downloadAllPages() {
      await downloadPages('https://www.notino.cz/kosmetika/pletova-kosmetika/', '1_page');// first page
      for (let i = 344; i < 354; i++) {
        let path = 'https://www.notino.cz/kosmetika/pletova-kosmetika/?f=' + i + '-1-2-3645';
        let fileName = i + '_page';
        await downloadPages(path, fileName);
      }
      await browser.close(); //finish process
    }
  }
}

module.exports = scraperObject;
