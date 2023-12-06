var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let dataArray = [
      { 
              id: "A083",
              name: "Neil Sims",
              image: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
              email: "neilsims@gmail.com"
        },
        { 
              id: "A0928",
              name: "Bonnie Green",
              image: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
              email: "bgreen@gmail.com"
        },
        { 
              id: "A09",
              name: "Michael Gough",
              image: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
              email: "gmicheal@gmail.com"
        },
        { 
              id: "A99",
              name: "Thomes Lean",
              image: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
              email: "leanth@gmail.com"
        },
  ];

  res.json({
    data: dataArray
  });
  
});

module.exports = router;
