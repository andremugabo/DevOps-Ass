import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const EmployeeComponents = () => {

    const [firstName, setFirstName] = useState('') 
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const navigator = useNavigate();



function saveEmployee(e){
    e.preventDefault();
    const employee = {firstName, lastName, email}
    console.log(employee)
    createEmployee(employee).then((response) => {
        console.log(response)
        navigator('/employees')
    })
}
  return (
    <div  className='container'>
        <br /> <br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3'>
                <h2 className='text-center'>Add Employee</h2>
                <div className='card-body'>
                    <form action="">
                        <div className='form-group mb-2'>
                            <label htmlFor="firstName" className='form-label'>First Name:</label>
                            <input 
                            type="text" 
                            name="firstName" id="firstName" 
                            placeholder='Enter Employee First Name' 
                            value={firstName} 
                            className='form-control'
                            onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="lastName" className='form-label'>Last Name:</label>
                            <input 
                            type="text" 
                            name="lastName" id="lastName" 
                            placeholder='Enter Employee Last Name' 
                            value={lastName} 
                            className='form-control'
                            onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="email" className='form-label'>Email:</label>
                            <input 
                            type="email" 
                            name="email" id="email" 
                            placeholder='Enter Employee Email' 
                            value={email} 
                            className='form-control'
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                    </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default EmployeeComponents