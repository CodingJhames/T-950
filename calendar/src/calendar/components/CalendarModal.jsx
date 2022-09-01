
import Modal from 'react-modal';


import React, { useState } from 'react'

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

    const onCloseModal = () => {
        console.log('modal cerrando');
        setIsOpen( false );
    }

  return (
    <Modal
    isOpen={ isOpen }
        onRequestClose={onCloseModal}
        style={customStyles}
        className="modal" 
        overlayClassName="modal-fondo"
        closeTimeoutMS={400}>
            <h1>Hola Mundo</h1>
            <hr/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores tempora, incidunt iusto, non molestias et distinctio aspernatur itaque odit beatae fuga quae illo. Ipsum corporis dignissimos quae distinctio harum?</p>
    </Modal>
  )
}
