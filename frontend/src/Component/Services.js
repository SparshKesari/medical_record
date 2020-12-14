import axios from 'axios';
import fire from '../fire.js';
const url = 'http://localhost:3001/api';
const createToken = async () => {
    const user = fire.auth().currentUser;
    const token = user && (await user.getIdToken());
    const payloadHeader = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    return payloadHeader;
  }
export const Services = (name, email , number,password) => {
  const payload = {
    name,
    email,
    number,
    password
  }
 /* try {
    const res = await axios.post(url, payload, header);
    return res.data;
} catch (e) {
    console.error(e);
  }*/
  //axios.post(url, payload, header);
};