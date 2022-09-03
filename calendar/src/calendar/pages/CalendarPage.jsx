import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns';
import { NavBar, CalendarEvent } from '../';
import { localizer, getMessagesES } from '../../helpers';
import { useState } from 'react';
import { CalendarModal } from '../';
import { useCalendarStore, useUiStore } from '../../hooks';

// import enUS from 'date-fns/locale/en-US';

// import { NavBar } from "../";
// import { addHours,parse,startOfWeek,getDay,format } from 'date-fns'

// const locales = {
//   'en-US': enUS,
// }

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// })


// const events = [{
//   title: 'Cumple Parchita',
//   notes: 'comprar purina',
//   start: new Date(),
//   end: addHours( new Date(), 2  ),
//   bgColor: '#fafafa',
//   user: {
//     _id: '123',
//     name: 'Parchita'
//   }
// }];

export const CalendarPage = () => {

  const { events } = useCalendarStore();
  const { openDateModal } = useUiStore();

  const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'week');
  

  const eventStyleGetter = ( event, start, end, isSelected ) => {
    // console.log( event, start, end, isSelected );

    const style = {
      backgroundColor: '#347CF7',
      boderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    }

    return {
      style
    }

  }

  const onDoubleClick = (event ) => {
    // console.log({ doubleClick: event });
    openDateModal();
  };

  const onSelect = (event) => {
    console.log( { click: event });
  };

  const onViewChanged = ( event ) => {
    localStorage.setItem('lastView', event );
    setLastView( event );
  };




  return (
    <>
      <NavBar />

      <Calendar
        culture='es'
        localizer={localizer}
        events={ events }
        defaultView={ lastView }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent = { onDoubleClick }
        onSelectEvent = { onSelect }
        onView = { onViewChanged }
        

      />

      < CalendarModal />

    </>
  )
}
