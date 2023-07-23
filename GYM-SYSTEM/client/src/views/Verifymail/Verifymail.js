import React, { useEffect, useState } from 'react'

import "./Verifymail.css";
import swal from 'sweetalert';


import { Link } from 'react-router-dom';
import axios from 'axios';
import Marquee from 'react-fast-marquee';
function Verifymail() {
    const [otp, setOtp] = useState('');
    const myOTP = JSON.parse(localStorage.getItem('otp'));
    const [name, setName] = useState('')
    const [weight, setWeight] = useState('')
    const [age, setAge] = useState('')

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('user')
    
   
useEffect(()=>{
    setName(JSON.parse(localStorage.getItem('name')))
    setWeight(JSON.parse(localStorage.getItem('weight')))
    setAge(JSON.parse(localStorage.getItem('age')))
    setEmail(JSON.parse(localStorage.getItem('email')))
    setPhone(JSON.parse(localStorage.getItem('phone')))
    setPassword(JSON.parse(localStorage.getItem('password')))
    setRole(JSON.parse(localStorage.getItem('role')))
},[])

    async function verifyOtp(otp) {


        const otp1 = document.getElementById('name').value;
        if (otp1.length !== 4) {
            await swal({
                title: "Invalid Otp",
                text: "Otp Must Contain 4 Digit",
                icon: "warning",
                dangerMode: true,
            });
        }

        else {
            if (myOTP == otp1) {
                console.log(name)
                const response = await axios.post('/signup', {
                    name: name,
                    email: email,
                    phone: phone,
                    password: password,
                    weight : weight,
                    age : age,
                    role: role
                })
                if (response.data.success) {
                   await window.Email.send({
                        SecureToken: process.env.REACT_APP_MAIL_KEY,
                        To: email,
                        From: "yashbomble2002@gmail.com",
                        Subject: "Success",
                        Body: "Congrats...! Your Registration is Successfull."               
                       });
                    await swal({
                        title: "Success",
                        text: response.data.message,
                        icon: "success",
                        button: "Continue",
                    });
                   
                    window.location.href = "/login";
                    localStorage.removeItem('otp')
                      localStorage.removeItem('name')
                      localStorage.removeItem('weight')
                      localStorage.removeItem('age')
                      localStorage.removeItem('email')
                      localStorage.removeItem('phone')
                      localStorage.removeItem('password')
                      localStorage.removeItem('role')
                }
                else {
                    swal({
                        title: "Error",
                        text: response.data.message,
                        icon: "error",
                        button: "Try Again!",
                    });
                }




            }
            else {

                await swal({
                    title: "Invalid Otp",
                    text: "Enter Valid Otp",
                    icon: "warning",
                    dangerMode: true,
                });

            }
        }


    }

function removeOtp(){
    localStorage.removeItem('otp')
}
    return (
        <div>

            <div className='row'>
                <div className='col-md-12'>
                    <div className='text-center'>
                        <h1>  Verify Gmail Account</h1>
                    </div>
                </div>

            </div>
            <hr />
            <div className='row'>
                <div className='col-md-12'>
                    
                    
                </div>

            </div>
            <div className='row'>
                <div className='col-md-4'>

                </div>
                <div className='containier col-md-4'>
                    <div className='center-container'>
                        <label htmlFor='name' className='otp-title'>Enter Otp </label> <br />
                        <span className='mb-3'>(Check Your Mail Id For Otp)</span>
                        <input type='text' id='name' placeholder='_ _ _ _' className='otp-input'
                        />
                        <br />
                        <button onClick={verifyOtp} className="verfiy-btn">Verify Otp</button>
                        <br />
                        <Link to='/signup' onClick={removeOtp}><b>Back to Signup</b></Link>
                    </div>
                </div>
                <div className='col-md-4'>

                </div>



            </div>
         
        </div>
    )
}

export default Verifymail