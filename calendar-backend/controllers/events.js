
const { response } = require('express');
const Event = require('../models/Event');

const getEvent = async( req, res = response ) => {

    const events = await Event.find()
                                .populate( 'user', 'name');
    res.json({
        ok:true,
        events
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

const updateEvent = async( req, res = response  ) => {

    const eventId = req.params.id;
    const uid = req.uid;

    try {
        
        const event = await Event.findById(eventId);

        if ( !event) {
            res.status(404).json({
                ok: false,
                msg: 'Event does not exist'
            });
        }

        if ( event.user.toString()  !== uid ) {
            return res.status(401).json({
                ok:false,
                msg: 'No tiene privilegio de editar este evento'
            });
        }

        const newEvent = {
            ...req.body,
            user:uid
        }

        const updatedEvent = await Event.findByIdAndUpdate( eventId, newEvent, { new: true } );
        res.json({
            ok: true,
            event: updatedEvent
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Contact Admin',
        });
    }



    res.json({
        ok:true,
        msg: 'updateEvent',
        eventId
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
