const toJson = {
  scraper: async function (browser) {
    let fs = require('fs');

    async function scrapeFromFile(url, fileName) {
      let x = await browser.newPage();
      await x.goto(url, {waitUntil: 'load', timeout: 0});
      await x.waitForSelector('#col-content');

      const list = await x.$$eval('#productsList > li', li => {
        return li.map(el => {
            const brand = el.querySelector('a > .title .brand').textContent;
            const name = el.querySelector('a > .title .name > strong').textContent;
            const img = el.querySelector('a > .title > .img-wrap > .responsively-lazy > img').getAttribute('src');
          // const img = el.querySelector('a > .title > .img-wrap > .img > img').getAttribute('src'); todo for first code is different
          return {
            brand: brand,
            name: name,
            img: img
          }
        })
      });
      fs.writeFileSync('./products/' + fileName, JSON.stringify(list));
    }

      for (let i = 1; i < 354; i++) {
        //chybi 53,54,342 54-58 null
        //28 sec ==10 souboru
          let fileName = i + '_productsFromPage.json';
          await scrapeFromFile('http://localhost:5000/' + i + '_page', fileName)
          console.log(fileName);
        }

    await browser.close();
  }
}
module.exports = toJson;
