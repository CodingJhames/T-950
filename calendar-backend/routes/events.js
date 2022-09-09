const { Router } = require('express');
const { getEvent, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { validateJWT } = require('../middlewares/validate-jwt');
const router = Router();

/* 
- Todas tienen que pasar por la validación del JWT
- Obtener eventos 
    */

router.use( validateJWT );

router.get('/', getEvent );

/*-Crear un Nuevo evento */

router.post('/', createEvent);

/*-Actualizar evento */

router.put('/:id', updateEvent);

/*-Borrar evento*/

router.delete('/:id', deleteEvent);


module.exports = router;
