//3rd Party Modules
const mongoose = require('mongoose');
const rideSchema = new mongoose.Schema({
    fromCity:{
        required:true,
        type:String
    },
    toCity:{
        required:true,
        type:String
    },
    driverName:{
        required:true,
        type:String
    },
    driverRating:{
        type: String,
        enum : ['1','2', '3', '4', '5'],
    },
    totalRideTimeInSecond:{
        required:true,
        type:Number
    },
});

module.exports = mongoose.model('Ride',rideSchema);