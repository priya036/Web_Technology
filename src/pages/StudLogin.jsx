import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import loginImage from '../images/login.jpg';

const LoginPage = () => {
    const navigation = useNavigate();

    const [rollNo, setRollNo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    


    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(rollNo);
        // console.log(email);
        // console.log(password);

        try {
            const response = await axios.get(`http://localhost:3000/api/user/${rollNo}`);
            // console.log(response.data)
            if(response.data.rollno === rollNo && response.data.email === email && response.data.password === password){
                // console.log(response.data.department)
                localStorage.setItem('rollNo', rollNo);
                localStorage.setItem('emailu', email);
                localStorage.setItem('nameu',response.data.name)
                localStorage.setItem('deptu',response.data.department)
                localStorage.setItem('mobu',response.data.mobno)
                localStorage.setItem('hallnumu',response.data.hallnum)
                localStorage.setItem('seat',response.data.seatNumber)

                
                // localStorage.setItem('password', password);
                window.location.href = '/homeuser';
                navigation('/homeuser')

            }
            else{
                toast('Invalid Credintials');
            }
        } 
        catch (err) {
            console.log(err);
        }
    };

    return (
        
        <>
        <div className="containers">
            <div className="login-containers">
                <div className="image-containers">
                    <img src={loginImage} alt="Login" />
                    <p>Login as  <Link to='/admin'>faculty</Link></p>
                    

                </div>
                <div className="form-containers">
                    <h2>STUDENT LOGIN</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-groups">
                            <label htmlFor="rollno">Roll Number : </label>
                            <input
                                type="text"
                                id="rollno"
                                placeholder='21ADR001'
                                value={rollNo}
                                onChange={(e) => setRollNo(e.target.value)}
                            />
                        </div>
                        <div className="form-groups">
                            <label htmlFor="email">Email : </label>
                            <input
                                type="email"
                                id="email"
                                placeholder='anu@gmail.com'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-groups">
                            <label htmlFor="password">Password : </label>
                            <input
                                type="password"
                                id="password"
                                placeholder='23/06/2003'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className="but" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
        <ToastContainer/>
    </>
    )
};

export default LoginPage;
