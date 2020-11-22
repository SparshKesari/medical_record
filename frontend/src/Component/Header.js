import React from 'react';
import {Container, Button} from 'react-bootstrap';
import Landing_Img from '../Assets/landing_image-01-01-01.svg';
import Notification from '../Assets/notification.svg';
import Touch from '../Assets/touch.svg';
import Record from '../Assets/medical-report.svg';

function Header() {
    return (
        <div>
            <Container>
                <div className="row header">
                    <div className="col-12 col-lg-6  content mt-md-3 ">
                        <h1>Keep your Medical Records safe with us.</h1>
                        <p className="lead mt-4" >We help you to maintain and manage your health information in a private, secure, and confidential environment. With all your past health records just a click away.</p>
                        {/* <Button className="mt-1" >Get Started</Button> */}
                        <div className="row functions ">
                            <div className="col-4">
                                <img className="icons" src={Record} ></img>
                                <p className="pt-2">All your Health Records at one place</p>
                            </div>
                            <div className="col-4">
                                <img className="icons" src={Touch} ></img>
                                <p className="pt-2">All your past Health Records just a click away</p>
                            </div>
                            <div className="col-4">
                                <img className="icons" src={Notification} ></img>
                                <p className="pt-2">Get Notified about the tablets</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-none d-lg-block">
                        <img className="image" src={Landing_Img}/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header;
