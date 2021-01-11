import React from 'react';
import { Card } from 'react-bootstrap';
// import Card_Img from '../Assets/Login_Signup-01.svg';
import Card_Img from '../Assets/card_bg.jpg';
import '../Css/Prescription.css';
const Prescription = props => {
    let jsx = props.data.Medicines.map(el => (
        <tr>
            <td className="name pl-2">{el.mediname}</td>
            <td className="days">{el.days1}</td>
            <td className="per_day">{el.perday1}</td>
        </tr>
    ));
    return (
        <div className="pres mt-3 mx-3 mb-4">
            <Card style={{ width: '18rem', marginRight: '1rem', marginBottom: '1rem'}} className="pres">
                <div className="card_img">
                    <Card.Img src={Card_Img}></Card.Img>
                    <div className="date">
                        <p>12 Nov 2020</p>
                    </div>
                </div>            
                <Card.Body>
                    <Card.Title className="text-center doc">{props.data.doctorName}</Card.Title>
                    <Card.Subtitle className="disease text-center mb-2">{props.data.disease}</Card.Subtitle>
                    <p className="text-center description">{props.data.description}</p>
                    <Card.Text className = "mt-2">
                        <h5 className="text-center medicine">Medicines</h5>
                        {/* <ul className="list">
                            <li>Acolate plus</li>
                            <li>Azithromycin</li>
                            <li>Pernec AC</li>
                            <li>Acutret</li>
                        </ul> */}
                        <table className="mt-2">
                            <tr>
                                <th className="pl-2">Name</th>
                                <th className="pl-2">Days</th>
                                <th className="pl-2">Per Day</th>
                            </tr>
                            {jsx}
                            {/* <tr>
                                <td className="name pl-2">Acolate plus</td>
                                <td className="days">7</td>
                                <td className="per_day">2</td>
                            </tr>
                            <tr>
                                <td className="name pl-2">Azithromycin</td>
                                <td className="days">7</td>
                                <td className="per_day">2</td>
                            </tr>
                            <tr>
                                <td className="name pl-2">Pernec AC</td>
                                <td className="days">5</td>
                                <td className="per_day">1</td>
                            </tr>
                            <tr>
                                <td className="name pl-2">Acutret</td>
                                <td className="days">3</td>
                                <td className="per_day">1</td>
                            </tr> */}
                        </table>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Prescription;