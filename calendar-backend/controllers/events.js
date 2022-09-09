
const { response } = require('express');

const getEvent = ( req, res = response ) => {

    res.json({
        ok:true,
        msg:'getEvent',
    })

}; 

const createEvent = ( req, res = response  ) => {

    //  verficar que tenga el evento
    console.log( req.body);

    res.json({
        ok:true,
        msg:'createEvent',
    })

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
