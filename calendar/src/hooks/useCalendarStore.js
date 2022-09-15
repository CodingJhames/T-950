
import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api";
import { convertEventsToDateEvents } from "../helpers";
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store";


export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const { events, activeEvent } = useSelector( state => state.calendar );
    const { user } = useSelector( state => state.auth );


    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent )  );
    };

    const startSavingEvent = async( calendarEvent ) => {

        // ? TODO: Update Event


        if ( calendarEvent._id ) {
            // ? actualizando
            dispatch( onUpdateEvent( {...calendarEvent} ) );
        } else {
            // ? Creando
            const { data } = await calendarApi.post('/events', calendarEvent );
            // console.log( {data} );
            dispatch(  onAddNewEvent( {...calendarEvent, id: data.event.id, user }) );
        }

    }

    const startDeletingEvent = () => {
        dispatch( onDeleteEvent() );
    }

    const startLoadingEvent = async() => {

        try {
            
            const {data} = await calendarApi.get('/events');
            // console.log({data});
            const events = convertEventsToDateEvents( data.events );
            dispatch( onLoadEvents( events ) );
            console.log(events);

        } catch (error) {
            console.log('Error cargando eventos');
            console.log(error);
        }


    }

    return {
        // * propiedades
        events,
        activeEvent,
        hasEventSelected : !!activeEvent,

        // * eventos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
        startLoadingEvent,
    }
}
