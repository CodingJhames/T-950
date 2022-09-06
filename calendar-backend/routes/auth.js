const { Router } = require('express');
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

/* 
    Rutas de Usuarios / Auth
    host + /api/auth

*/

router.post('/new', crearUsuario);

router.post('/', loginUsuario );

router.post('/renew', revalidarToken );

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