import axios from 'axios';

export const fetchUser = (userId) => {
  return axios.get(`/api/users/${userId}`)
}

export const fetchUsers = () => {
  return axios.get('/api/users/')
}

export const updateUser = (user) => {
  return axios.patch(`/api/users/edit/${user._id}`, user)
}

export const join = (event) => {
  return axios.post(`/api/users/${event}/join`);
}

export const unjoin = (event) => {
  return axios.delete(`/api/users/${event}/unjoin`);
};