"use client"
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import VendorLayout from '@/components/vendorComponent/VendorLayout';
import { ClassNames } from '@emotion/react';

const initialEvents = [
  {
    id: 1,
    title: "Snow Banquet",
    start: "2024-03-17T09:00:00",
    end: "2024-03-17T11:00:00",
    members: 500,
    paymentStatus: "paid"
  },
  {
    id: 2,
    title: "Sunset Banquet",
    start: "2024-03-18T10:00:00",
    end: "2024-03-18T12:00:00",
    members: 1200,
    paymentStatus: "10% paid"
  },
  {
    id: 3,
    title: "Sunset Banquet",
    start: "2024-04-10T10:00:00",
    end: "2024-04-10T12:00:00",
    members: 1200,
    paymentStatus: "paid"
  }
];

const getEventColor = (paymentStatus) => {
  return paymentStatus === "paid" ? "#F00000" : "#E99151";
};

const Calendar = () => {
  const [events, setEvents] = useState(initialEvents);
  const [eventDetails, setEventDetails] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleDateClick = (arg) => {
    const date = arg.dateStr;
    const filteredEvents = events.filter(event => event.start.includes(date));
    setEventDetails(filteredEvents);
    setShowModal(true);
  };

  const handleEventDrop = (arg) => {
    const updatedEvents = events.map(event => {
      if (event.id === arg.event.id) {
        return { ...event, start: arg.event.startStr, end: arg.event.endStr };
      }
      return event;
    });

    setEvents(updatedEvents);
    setEventDetails(updatedEvents.filter(event => event.id === arg.event.id));
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <VendorLayout>
      <div className=" flex -mt-9 gap-1 items-center">
          <p className="text-sm text-gray-500">Pages </p>
          <p className="text-[#F00000]">/calendar</p>
        </div>
        <div>
          <p className="uppercase cazelFont text-[#F00000] text-2xl md:text-3xl font-extrabold mt-2 mb-4">
            Calendar
          </p>
        </div>
        <div className="flex justify-between min-h-screen flex-wrap">
          <div className="md:w-[23%] w-[full]  px-2 md:px-5 border rounded-md border-[#E0E0E0] py-0 ">
            <h2 className='cazelFont text-[#F00000] mb-3 mt-3  text-xl font-bold'>Recent Booking</h2>
            <div className='flex md:flex-col flex-wrap flex-row gap-3 '>

              {events.map(event => (
            <ul className='p-4 rounded-lg md:w-[100%] border border-[#E0E0E0]' key={event.id}>
                <li className='text-sm font-semibold capitalize'>{event.title}</li>
                <li className='text-xs  text-gray-500'>{event.start} - {event.end}</li>
                <li className='text-xs text-gray-500'>{event.members} members</li>
                <li className='text-xs text-gray-500'>{event.paymentStatus}</li>
                
                   
            </ul>
              ))}
            </div>
          </div>
          <div className="md:w-[75%] w-full mt-10 md:mt-0">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                start: 'prev,next',
                center: 'title',
                end: 'dayGridMonth,timeGridWeek'
              }}
              eventContent={(arg, createElement) => {
                const color = getEventColor(arg.event.extendedProps.paymentStatus);
                return createElement('div', { style: { backgroundColor: color  , padding:"5px",color:"white"} }, arg.event.title);
              }}
              dayHeaderClassNames={["bg-gray-200"]}
              dateClick={handleDateClick}
              events={events}
              editable={true}
              eventClick={handleEventDrop}

          
            />
          </div>
          {showModal && (
            <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-500 bg-opacity-50">
              <div className="bg-white p-8 rounded-lg">
                <h2>Event Details</h2>
                <ul>
                  {eventDetails.map(event => (
                    <li key={event.id}>
                      <strong>{event.title}</strong><br />
                      <strong>Time:</strong> {event.start} - {event.end}<br />
                      <strong>Members:</strong> {event.members}<br />
                      <strong>Payment Status:</strong> {event.paymentStatus}
                    </li>
                  ))}
                </ul>
                <button className="mt-4 bg-[#F00000] hover:bg-[#f00000c4] text-white font-bold py-2 px-4 rounded" onClick={closeModal}>Close</button>
              </div>
            </div>
          )}
        </div>
      </VendorLayout>
    </>
  );
};

export default Calendar;
