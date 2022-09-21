var express = require('express');
var router = express.Router();
const Booking = require("../models/bookings")

/* GET users listing. */
router.get('/', function(req, res) {
  // console.log(moment().format(date).fromNow())
  Booking.find().then(data => {
    console.log(data)
    // res.json({result: true, bookings: data})
    if (!data || data.length === 0){
      res.json({result: false, error: "No booking yet. Why not plan a trip?"})
    } else {
      res.json({result: true, bookings: data})
    }
  })
  
});

module.exports = router;
