const pageScraper = require('./pageScraper');
const writeDataToJson=require('./writeDataToJson')
async function scrapeAll(browserInstance){
  let browser;
  try{
    browser = await browserInstance;
    //await pageScraper.scraper(browser);
    //await writeDataToJson.scraper(browser);

  }
  catch(err){
    console.log("Could not resolve the browser instance => ", err);
  }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)
