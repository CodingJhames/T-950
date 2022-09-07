const { response } = require('express');
const { validationResult } = require( 'express-validator');
const User = require('../database/models/User');



const crearUsuario = async(req, res = response )  => {

    const{ name, email, password } = req.body;

    //  manejo de errores
    // const errors = validationResult( req );
    //  console.log( errors );
    // if ( !errors.isEmpty() ) {
    //     return res.status(400).json({
    //         ok:false,
    //         errors: errors.mapped()
    //     });
    // }


    // ? validación hecha como ejemplo de Fernando

    // if ( name.length < 5) {
    //     return res.status(400).json({
    //         ok:false,
    //         msg:'El nombre debe de ser menor a 5 letras'
    //     })
    // }

    try {
        const user = new User( req.body );

        await user.save();

        res.status(201).json({
            ok:true,
            msg:'registro',
            /* name,
            email,
            password */
        })    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Por favor comníquese con el Admin',
        })
    }


    

}


const loginUsuario = (req, res = response )  => {

    const{ email, password } = req.body;

    // const errors = validationResult( req );
    
    // if ( !errors.isEmpty() ) {
    //     return res.status(400).json({
    //         ok:false,
    //         errors: errors.mapped()
    //     });
    // }


    res.status(201).json({
        ok:true,
        msg:'login',
        email,
        password
    })

}


const revalidarToken = (req, res = response )  => {

    res.json({
        ok:true,
        msg:'renew'
    })

}



module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
}