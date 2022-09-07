const { response } = require('express');
const bcrypt = require('bcryptjs');
const { validationResult } = require( 'express-validator');
const User = require('../database/models/User');
const { generateJWT } = require('../helpers/jwt');


const crearUsuario = async(req, res = response )  => {

    const{ email, password } = req.body;

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

        let user = await User.findOne({ email });

        // console.log(user);

        if (user) {
            return res.status(400).json({
                ok:false,
                ms:'Ya existe un usuario con ese email'
            })
        }

        user = new User( req.body );

        // encriptar contraseña
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( password , salt );


        await user.save();

        // Generar JWT
        const token = await generateJWT( user.id, user.name );

        res.status(201).json({
            ok:true,
            uid: user.id,
            name: user.name,
            token
            /* 
            email,
            password */
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Por favor comníquese con el Admin',
        })
    }

}


const loginUsuario = async(req, res = response )  => {

    const{ email, password } = req.body;

    // const errors = validationResult( req );
    
    // if ( !errors.isEmpty() ) {
    //     return res.status(400).json({
    //         ok:false,
    //         errors: errors.mapped()
    //     });
    // }

    try {

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                ok:false,
                ms:'El User no existe con ese email'
            });
        }

        // confirmar los passwords
        const validPassword = bcrypt.compareSync( password, user.password );

        if ( !validPassword) {
            return res.status(400).json({
                ok:false,
                msg: 'Password incorrecto'
            });
        }

        // Generar neustro JWT
        const token = await generateJWT( user.id, user.name );

        res.json({
            ok:true,
            uid: user.id,
            name: user.name,
            token
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Por favor comníquese con el Admin',
        })
    }


    

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