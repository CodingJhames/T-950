const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

/* 
    Rutas de Usuarios / Auth
    host + /api/auth

*/

router.post(
    '/new', 
    [//   middlewares
        check( 'name', 'El nombre es obligatorio' ).not().isEmpty(),
        check( 'email', 'El email es obligatorio' ).isEmail(),
        check( 'password', 'El password debe de ser de 6 caracteres' ).isLength({min: 6 }),
    ],
    crearUsuario);

router.post(
    '/',
    [
        check( 'email', 'El email es obligatorio' ).isEmail(),
        check( 'password', 'El password debe de ser de 6 caracteres' ).isLength({min: 6 }),
    ],
    loginUsuario );

router.get('/renew', revalidarToken );

// router.post('/', (req, res )  => {

//     res.json({
//         ok:true,
//         msg:'login'
//     })
// });

// router.get('/renew', (req, res )  => {

//     res.json({
//         ok:true,
//         msg:'renew'
//     })
// });


module.exports = router;