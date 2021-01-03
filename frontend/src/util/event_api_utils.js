import axios from 'axios';

export const getEvents = () => {
    return axios.get(`/api/events`)
};

export const getUserEvents = hostId => {
    return axios.get(`/api/events/host/${hostId}`)
};


export const getEvent = eventId => {
    return axios.get(`/api/events/${eventId}`)
};

export const createEvent = (event) => {
    return axios.post(`/api/events/new`, event)
};

export const updateEvent = (event) => {
    return axios.patch(`/api/events/edit/${event._id}`, event)
};

export const deleteEvent = (eventId) => {
    return axios.delete(`/api/events/${eventId}`)
};