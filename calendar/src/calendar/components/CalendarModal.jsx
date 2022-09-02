
import React, { useState } from 'react'
import { addHours } from 'date-fns/esm';
import Modal from 'react-modal';
import DatePicker, { registerLocale } from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { es } from 'date-fns/locale';
import { differenceInSeconds } from 'date-fns';

registerLocale('es', es );

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement("#root");



export const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState( true );

    const [formValues, setFormValues] = useState({
        title:'James',
        notes:'Mejia',
        start: new Date(),
        end: addHours( new Date(), 2 ),
    })


    const onCloseModal = () => {
        console.log('modal cerrando');
        setIsOpen( false );
    }

    const onInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onDateChanged = ( event, changing ) => {
        setFormValues({
            ...formValues,
            [changing]: event
        })
    }

    const onSubmit = ( event ) => {
        event.preventDefault();

        const difference = differenceInSeconds(formValues.end, formValues.start );
        // console.log( difference );

        if( isNaN( difference ) || difference <= 0 ) {
            console.log('Error en las fechas');
            return;  
        }

        if( formValues.title.length <= 0 ) return;

        console.log( formValues );

        // cerrar modal
        // remover errores en pantalla

    }


  return (
    <Modal
    isOpen={ isOpen }
        onRequestClose={onCloseModal}
        style={customStyles}
        className="modal" 
        overlayClassName="modal-fondo"
        closeTimeoutMS={400}>
            <h1> Nuevo evento </h1>
<hr />
<form className="container" onSubmit={ onSubmit } >

    <div className="form-group mb-2">
        <label>Fecha y hora inicio</label>
        <DatePicker
            onChange={ ( event ) => onDateChanged( event, 'start') }
            selected={ formValues.start }
            className='form-control'
            dateFormat='Pp'
            showTimeSelect
            locale='es'
        />
    </div>

    <div className="form-group mb-2">
        <label>Fecha y hora fin</label>
        <DatePicker
            minDate={ formValues.start}
            onChange={ ( event ) => onDateChanged( event, 'end') }
            selected={ formValues.end }
            className='form-control'
            dateFormat='Pp'
            showTimeSelect
            locale='es'
        />
    </div>

    <hr />
    <div className="form-group mb-2">
        <label>Titulo y notas</label>
        <input 
            type="text" 
            className="form-control"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={ formValues.title }
            onChange={onInputChange }
        />
        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
    </div>

    <div className="form-group mb-2">
        <textarea 
            type="text" 
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={ formValues.notes }
            onChange={onInputChange }
        ></textarea>
        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
    </div>

    <button
        type="submit"
        className="btn btn-outline-primary btn-block"
    >
        <i className="far fa-save"></i>
        <span> Guardar</span>
    </button>

</form>
    </Modal>
    )
}
