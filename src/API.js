import axios from 'axios';
 
const api = axios.create({
 baseURL: 'http://localhost:44305',
 headers: {
 'Access-Control-Allow-Origin': "*",
 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
 'Access-Control-Allow-Headers': '*',
 'Access-Control-Max-Age': 86400,
 'Content-Type': 'application/json',
 'Accept': 'application/json'
 },
});
 
export default api;