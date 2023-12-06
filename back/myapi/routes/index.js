var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  let dataArray = [
        { 
              name: "aayush",
              image: {
                    mainImg: "sdfsdf",
                    img2: "dfsdf",
                    img3: "sdfdf",
                    img4: "sdfd"
              },
              price: "9000",
              location: {
                    city: "lap",
                    state: "aaaa",
                    streetName:"asasd",
              },
              description: "asdasdsd",
              bedrooms: "5",
              bathrooms:"6"
    },
  ];

  res.json({
    data: dataArray
  }); 
});

module.exports = router;
