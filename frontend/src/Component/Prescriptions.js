import React from 'react';
import Prescription from './Prescription.js'
import { Container } from 'react-bootstrap';


const Prescriptions = props => {
    let a = [];
    for(let i = 1; i <= 3; i++) a.push(i);
    let prescriptionJSX = a.map(el => <Prescription key = {el}></Prescription>)
    return (
        <Container className= "mt-3" style = {{display: 'flex' , justifyContent: 'center', flexWrap: 'wrap'}}>
            {prescriptionJSX}
        </Container>
    )
}

export default Prescriptions;