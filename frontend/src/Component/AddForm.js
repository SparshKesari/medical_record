import React, { useState } from 'react'
// import img from '../Assests/landing_image-01-01-01.svg'
import delete_img from '../Assets/delete.svg'
import { Form, Button } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import '../Css/AddForm.css';
import axios from 'axios';
import fire from '../fire.js';
import Navigation2 from './Navigation2';

const url = 'http://localhost:8080/api/addform'

function AddForm() {

	const [medicineName, setMedicineName] = useState('')
	const [days, setDays] = useState('')
	const [perday, setPerday] = useState('')
	
	const [inputFields, setInputFields] = useState([]);
	const [inputObject, setInputObject] = useState({
		mediname: '',
		days1: '',
		perday1: ''
	});
	const [medicinesArray, setMedicinesArray] = useState([]);

	const [doctorName, setDoctorName] = useState("");
	const [diseaseName, setDiseaseName] = useState("");
	const [date, setDate] = useState("");
	const [doctorType, setDoctorType] = useState("");
	const [description, setDescription] = useState("");
	const history = useHistory();
	function handleAddFields(e){
		e.preventDefault();					
		// setInputObject({
		// 	medicinename : medicineName,
		// 	days: days,
		// 	perday: perday
		// })
		if(inputObject.mediname != ''){
			console.log('1', inputObject)
			setMedicinesArray(medicinesArray => [...medicinesArray, inputObject])
			console.log('2', medicinesArray)
			setInputFields([...inputFields, { medicineName: '', days: '', perday: '' }])
		}else{
			setInputFields([...inputFields, { medicineName: medicineName, days: days, perday: perday }])
		}	
	}
	const deleteItem = (i) => {
		setInputFields(currentItems => currentItems.filter((input, index) => index !== i));
	  }

	// function handleSubmit() {
	// 	alert("Formed Filled Up")
	// }
	function handleSubmit (e){
		e.preventDefault();
		// setInputObject({
		// 	medicinename : medicineName,
		// 	days: days,
		// 	perday: perday
		// })
		medicinesArray.push(inputObject);
		console.log(medicinesArray)
		var user = fire.auth().currentUser;
			if (user != null){
				var email1 = user.email
			}
		// const medicines = {
		// 	email: email1,
		// 	doctorName: doctorName,
		// 	diseaseName: diseaseName,
		// 	date: date,
		// 	doctype: doctorType,
		// 	description: description,
		// 	medicines: medicinesArray
		// }
		axios.post(url, {
			email: email1,
			doctorName: doctorName,
			diseaseName: diseaseName,
			date: date,
			doctype: doctorType,
			description: description,
			medicines: medicinesArray
		})
		// history.push('/home');
	}

	return (
		<>
		<Navigation2 />
			<div className="add-form">
		<div className='container mt-3'>
			<div className="layout">
				<Form className="form-layout box-shadow" onSubmit={handleSubmit} >
						<Form.Group controlId="formBasicName">
							<Form.Label>Doctor's Name</Form.Label>
							<Form.Control type="text" placeholder="Enter Doctor's Name"
								value={doctorName} onChange={(e) => setDoctorName(e.target.value)} />
						</Form.Group>

						<Form.Group controlId="formBasicDiseaseName">
							<Form.Label>Disease Name</Form.Label>
							<Form.Control type="text" placeholder="Disease Name"
								value={diseaseName} onChange={(e) => setDiseaseName(e.target.value)} />
						</Form.Group>

						<Form.Group controlId="formBasicName">
							<Form.Label>Date of visit</Form.Label>
							<Form.Control type="date" placeholder="Enter Doctor's Name"
								value={date} onChange={(e) => setDate(e.target.value)} />
						</Form.Group>

						<Form.Group>
							<Form.Label>Doctor's Type</Form.Label>
							<Form.Control as="select" value={doctorType} onChange={(e) => setDoctorType(e.target.value)}>
								<option>General Physician </option>
								<option>Paediatrician</option>
								<option>Gynaecologist</option>
								<option>Cardiologist</option>
								<option>Others</option>
							</Form.Control>
						</Form.Group>

						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Label>Disease Description</Form.Label>
							<Form.Control as="textarea" rows={4}
								value={description} onChange={(e) => setDescription(e.target.value)} />
						</Form.Group>

						<Form.Group controlId="">
							<Form.Label>Add photo of Prescription</Form.Label>
							<Form.Control type="file" />
						</Form.Group>
						{inputFields.map((input,i) => (
							<div >
								<Form.Group className="form-inline" key={i}>
									<Form.Control type="text" onChange= {(e) => setInputObject({mediname : e.target.value})}
										 placeholder="Medicines Name" className="col-sm-4 mr-2 mt-3" />
									<Form.Control type="number" min="1" onChange= {(e) => setInputObject({mediname: inputObject.mediname, days1 : e.target.value})}
										 placeholder="No of Days" className="col-sm-3 mr-2 mt-3" />
									<Form.Control type="number" min="1" onChange= {(e) => setInputObject({mediname: inputObject.mediname, days1: inputObject.days1, perday1 : e.target.value})}
										 placeholder="Per-Day" className="col-sm-3 mt-3" />
									<img className="delete_img" src={delete_img} onClick={() => deleteItem(i)} alt = ""/>
								</Form.Group>
							</div>))}

					<Button variant="warning" className="mt-2" onClick={handleAddFields}>
						Add More Medicines
					</Button>

					<Button type="submit" className="submitButton">Submit</Button>
				</Form>
			</div>
		</div>
		</div>
		</>

	)
}

export default AddForm;