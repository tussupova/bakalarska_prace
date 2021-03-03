import axios from 'axios';

export default function loginAsync({ email, password }) {
  return axios.post('https://localhost:5001/user/login', { email, password});
}
