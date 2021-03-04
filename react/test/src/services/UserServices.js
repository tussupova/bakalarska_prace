import axios from 'axios';

export function loginAsync({email, password}) {
  return axios.post('https://localhost:5001/user/login', {email, password});
}

export function signUpAsync({email, password, name, birthday, gender}) {
  return axios.post('https://localhost:5001/user/signUp', {email, password, name, birthday, gender});
}

export function sendData() {
  return axios.get('https://localhost:5001/user/test', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
    }
  );
}

