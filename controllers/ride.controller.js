const Ride = require('../models/ride.model');
const HttpError = require('../models/httpErrors')

const createRide = async(req, res, next)=>{   
    const {fromCity, toCity, driverName, driverRating, totalRideTimeInSecond} = req.body;
    const newRide = Ride({
        fromCity, 
        toCity,
        driverName,
        driverRating,
        totalRideTimeInSecond
    });
    
    try{
        await newRide.save();
    }
    catch{
        const error = new HttpError("Couldn't Create Ride, Something went wrong.", 500);
        return next(error);
    }

    return res.status(201).json({success:true, data:newRide});
};

const getAllRide = async(req, res, next)=>{   
    let allRides;
    try{
        allRides = await Ride.find();
    }
    catch{
        const error =  new HttpError("Couldn't Get Rides, Something went wrong.",500); 
        return next(error);
    }
    return res.status(201).json({success:true, data: allRides});
};

module.exports = {
    getAllRide,
    createRide
}