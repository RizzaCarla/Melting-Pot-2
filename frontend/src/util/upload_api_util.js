import axios from 'axios';


// data is FormData
export const uploadPhoto = (data) => {
  return axios.post('/api/images/upload', data)
}