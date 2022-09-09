const { Router } = require('express');
const { check } = require('express-validator');
const { fileValidator } = require('../middlewares/file-validator');
const { getEvent, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { validateJWT } = require('../middlewares/validate-jwt');
const { isDate } = require('../helpers/isDate');
const router = Router();

/* 
- Todas tienen que pasar por la validación del JWT
- Obtener eventos 
    */

router.use( validateJWT );

router.get('/', getEvent );

/*-Crear un Nuevo evento */

router.post('/', 
    [
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'Fecha de incio es obligatoria').custom( isDate ),
        check('end', 'Fecha de finalización es obligatoria').custom( isDate ),

        fileValidator,
    ],
    createEvent);

/*-Actualizar evento */

router.put('/:id', updateEvent);

/*-Borrar evento*/

router.delete('/:id', deleteEvent);


module.exports = router;
