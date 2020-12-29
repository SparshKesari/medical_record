import Axios from 'axios';
import fire from '../fire.js';
const url = 'http://localhost:8080/api/signup';
const createToken = async () => {
    const user = fire.auth().currentUser;
    const token = user && (await user.email());
    const payloadHeader = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    return payloadHeader;
  }
export const Services = (name, email , number,password) => {
  console.log("services is up")
  const payload = {
    name,
    email,
    number,
    password
  }
  const Headers =  createToken()
  Axios.post(url,payload,Headers).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err.message)
  })
 /* try {
    const res = await axios.post(url, payload, header);
    return res.data;
} catch (e) {
    console.error(e);
  }*/
  //axios.post(url, payload, header);
};