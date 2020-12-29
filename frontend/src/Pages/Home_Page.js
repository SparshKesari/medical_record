import React, {useEffect, useState} from 'react'
import Prescriptions from '../Component/Prescriptions.js'
import fire from '../fire'
import axios from 'axios';
const url = 'http://localhost:8080/api/search';

function Home_Page() {
    const [mediData, setMediData] = useState([]);
    var user = fire.auth().currentUser;
    console.log(user.email)
    useEffect(() => {
        axios.post(url , { email: user.email })
        .then(data => {
            console.log(data);
            setMediData(data.data);
        })
        console.log('Use Effect');
    }, []);
    return (
        <div className="">
            <Prescriptions mediData = {mediData} />
        </div>
    )
}

export default Home_Page