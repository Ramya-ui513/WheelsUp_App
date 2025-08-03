import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://wheelsup-app.onrender.com/api/',  
});

export default instance;
