
const { response } = require('express');
const Event = require('../models/Event');

const getEvent = ( req, res = response ) => {

    res.json({
        ok:true,
        msg:'getEvent',
    })

}; 

const createEvent = async( req, res = response  ) => {

    //  verficar que tenga el evento
    // console.log( req.body);

    const event = new Event( req.body );

    try {

        event.user = req.uid;

        const savedEvent = await event.save();

        res.json({
            ok:true,
            event: savedEvent
        })
    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Comuníquese con el Amin',
        })
        
    }
}; 

const updateEvent = ( req, res = response  ) => {

    res.json({
        id:123456789,
        ok:true,
        msg: 'updateEvent'
    })

}; 

const deleteEvent = ( req, res = response ) => {

    res.json({
        id:123546789,
        ok:true,
        msg: 'deleteEvent'
    })

};

module.exports = {
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent,
}
