function connecting() {
  const mysql = require('mysql');
  const fs = require('fs');
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "kymbat",
    database: "kymbat"
  })
  let product = [];
  con.connect();
  for (i = 1; i <50 ; i++) {
    const fileName = 'C:/Users/Kymbat/bp/bakalarska_prace/scraping/products/' + i + '_productsFromPage.json';
    const files = fs.readFileSync(fileName);
    product = JSON.parse(files);
    var arr = product.map(function (obj) {
      return Object.keys(obj).reduce(function (arr, current) {
        arr.push(obj[current]);
        return arr
      }, [])
    })

    let myQuery = "INSERT INTO AllProducts (brand, name, image) VALUES ?";
    let values = arr;
    con.query(myQuery, [values], function (err, result) {
      if (err) throw err;
      console.log(i, 'inserted');
    });

  }


}

module.exports = connecting();
