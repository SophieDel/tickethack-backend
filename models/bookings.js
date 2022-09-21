const mongoose = require('mongoose');
const moment = require("moment")

const bookingSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    price: Number,
    delayToDeparture:  {
        type: String,
        default: function() {
            return moment(this.date).fromNow()
    }
    }
});

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;