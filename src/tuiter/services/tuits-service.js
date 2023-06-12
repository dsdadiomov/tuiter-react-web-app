

import axios from "axios";
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const TUITS_API = 'https://tuiter-node-server-app-pg0i.onrender.com/api/tuits';
const USERS_URL = `${SERVER_API_URL}/users`;


const api = axios.create({ withCredentials: true });


export const login = async ({ username, password }) => {
 const response = await api.post(`${USERS_URL}/login`, { username, password });
 const user = response.data;
 return user;
};

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
   }
   
export const findTuits = async () => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
   }
   
   export const deleteTuit = async (tid) => {
    const response = await axios.delete(`${TUITS_API}/${tid}`)
    return response.data
  }
  export const updateTuit = async (tuit) => {
    const response = await axios
      .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
  }
  
  
