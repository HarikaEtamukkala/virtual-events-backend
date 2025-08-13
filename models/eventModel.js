const events = [];  
let eventId = 1;    
export const EventModel = {
    createEvent: (eventData) => {
        const newEvent = { id: eventId++, ...eventData };
        events.push(newEvent);
        return newEvent;
    },
    getAllEvents: () => {
        return events;
    },
    getEventById: (id) => {
        console.log('events:', events);
        return events.find(event => event.id === id);
    },
    updateEvent: (id, updatedData) => { 
        const eventIndex = events.findIndex(event => event.id === id);
        if (eventIndex === -1) return null;
        events[eventIndex] = { ...events[eventIndex], ...updatedData };
        return events[eventIndex];
    },
    deleteEvent: (id) => {
        const eventIndex = events.findIndex(event => event.id === id);
        if (eventIndex === -1) return null;
        const deletedEvent = events.splice(eventIndex, 1);
        return deletedEvent[0];
    }
};  