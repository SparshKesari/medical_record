import React from 'react'
import Prescriptions from '../Component/Prescriptions.js'
import fire from '../fire'



function Home_Page() {
    var user = fire.auth().currentUser;
    console.log(user.email)
    return (
        <div className="">
            <Prescriptions/>
        </div>
    )
}

export default Home_Page