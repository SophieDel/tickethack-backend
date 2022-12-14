var express = require('express');
var router = express.Router();
const Trip = require("../models/trips")

/* GET home page. */
// Renvoyer tous les trajets qui correspondent à l'heure de départ, d'arrivée et de la date.

function checkDate(db, date) {
  date = new Date(date)
  return (db.date.getYear() == date.getYear() && db.date.getMonth() == date.getMonth() && db.date.getDate() == date.getDate())
}

router.post('/search', function(req, res) {
  const {departure, arrival, date} = req.body
  console.log(req.body)
  Trip.find({departure: departure, arrival: arrival}).then(data => {
    if (!data){
      res.json({result: false, error: "No trips found"})
    } else {
      let dataF = data.filter(e => checkDate(e, date))
      if (!dataF){
        res.json({result: false, error: "No trips found"})
      } else {
        res.json({result: true, trips: dataF})
      }
    }
  })
});

module.exports = router;
