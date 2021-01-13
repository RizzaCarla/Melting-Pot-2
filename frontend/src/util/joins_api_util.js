import axios from 'axios';

export const getJoins = () => {
    return axios.get(`/api/joins`)
};

export const getUserJoins = joinerId => {
    return axios.get(`/api/joins/joiner/${joinerId}`)
};

export const getEventJoins = eventId => {
    return axios.get(`/api/joins/events/${eventId}`)
};

export const getJoin = joinId => {
    return axios.get(`/api/joins/${joinId}`)
};

export const createJoin = (join) => {
    return axios.post(`/api/joins/new`, join)
};

export const updateJoin = (join) => {
    return axios.patch(`/api/joins/edit/${join._id}`, join)
};

export const deleteJoin = (joinId) => {
    return axios.delete(`/api/joins/${joinId}`)
};

