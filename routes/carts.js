var express = require('express');
var router = express.Router();
const Trip = require("../models/trips")
const Cart = require("../models/carts")
var ObjectId = require('mongoose').Types.ObjectId;

router.post("/", async function(req, res) {
    const filteredCart = await Cart.findOne({trip: req.body.id})
    if (filteredCart && filteredCart != null){
        res.json({result: false, error: "Trip already added in cart"})
    } else {
        const addedTrip = await Trip.findById({_id: req.body.id})
        const newTrip = new Cart({
            departure: addedTrip.departure,
            arrival: addedTrip.arrival,
            date: addedTrip.date,
            price: addedTrip.price,
            isPaid: true,
            trip: addedTrip.id
        })
        newTrip.save().then(data => {
            res.json({result: true, message: "Trip sucessfully added to the cart !"})
        }
        )
    }
})

module.exports = router;