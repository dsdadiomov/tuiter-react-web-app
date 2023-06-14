import axios from "axios";


const API_BASE = "https://idyllic-sunshine-7e8711.netlify.app";//process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
const TUITS_API = `${API_BASE}/tuits`;

console.log(API_BASE);

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit);
    return response.data;
}

export const findTuits = async () => {
    const response = await axios.get(TUITS_API); 
    const tuits = response.data; 
    return tuits;
}

export const deleteTuit = async (tid) => {
    const response = await axios.delete(`${TUITS_API}/${tid}`);
    return response.data; 
}

export const updateTuit = async (tuit) => {
  const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
  return tuit; 
}
