var express = require('express');
var router = express.Router();
const Trip = require("../models/trips")
const Cart = require("../models/carts")

router.post("/", async function(req, res) {
    const filteredCart = Cart.findOne({id: req.body.id})
    if (!filteredCart){
        res.json({result: false, error: "Trip already added in Cart"})
    } else {
        const addedTrip = Trip.findOne({id: req.body.id})
        const newTrip = new Cart({
            departure: addedTrip.departure,
            arrival: addedTrip.arrival,
            date: addedTrip.date,
            price: addedTrip.price
        })
        newTrip.save().then(data => {
            console.log(data)
            res.json({result: true, message: "Trip sucessfully added to the cart !"})
        }
        )
    }
})

module.exports = router;