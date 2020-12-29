import React from 'react';
import Prescription from './Prescription.js'
import { Container } from 'react-bootstrap';


const Prescriptions = props => {
    // let a = [];
    let prescriptionJSX;
    // props.mediData[0].medicalRecords.records.map(el => <Prescription key = {Date.now()} data = {el}></Prescription>);
    props.mediData.forEach(medi => {
        prescriptionJSX = medi.medicalRecords.records.map(el => <Prescription key = {Date.now()} data = {el}></Prescription>)
    })
    //let prescriptionJSX = a.map(el => <Prescription key = {Date.now()} data = {el}></Prescription>)
    return (
        <Container className= "mt-3" style = {{display: 'flex' , justifyContent: 'center', flexWrap: 'wrap'}}>
            {prescriptionJSX}
        </Container>
    )
}

export default Prescriptions;