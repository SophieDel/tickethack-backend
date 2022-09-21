var express = require("express");
var router = express.Router();
const moment = require("moment");
const Booking = require("../models/bookings");
const Cart = require("../models/carts");

/* GET users listing. */
router.get("/", async function (req, res) {
  const paidTrips = await Cart.find();
  for (let i = 0; i < paidTrips.length; i++) {
    let booking = new Booking({
      departure: paidTrips[i].departure,
      arrival: paidTrips[i].arrival,
      date: paidTrips[i].date,
      price: paidTrips[i].price,
      isPaid: false,
      delayToDeparture: moment(paidTrips[i].date).fromNow(),
    });
    booking.save();
  }
  Cart.deleteMany({}).then(() => console.log("The cart is empty."));
  Booking.find().then((data) => {
    console.log(data);
    res.json({ result: true, bookings: data });
  });
});

module.exports = router;
