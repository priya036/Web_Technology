import React, { useState } from 'react';
import axios from 'axios';
import '../pages/Adminl.css';
import loginImage from '../images/login.jpg';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const navigation = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [id,setId] = useState('');
  console.log(email)
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
            const response = await axios.get(`http://localhost:3000/api/admin/${id}`);
            console.log(response.data)
            if(response.data.facultyid === id && response.data.email === email && response.data.password === password){
                console.log(response.data)
                localStorage.setItem('id', id);
                localStorage.setItem('email', email);
                localStorage.setItem('name',response.data.name)
                localStorage.setItem('dept',response.data.department)
                localStorage.setItem('password', password);
                window.location.href = '/homeadmin';
                navigation('/homeadmin')

            }
            else{
                toast('Invalid Credintials');
            }
        } 
        catch (err) {
            
        }
  };

  return (
    <>
    <div className="containers">
      <div className="login-containers">
        <div className="image-containers">
          <img src={loginImage} alt="Login" />
          <p>Login as  <Link to='/user'>student</Link></p>
        </div>
        <div className="form-containers">
          <h2>FACULTY LOGIN</h2>
          <form onSubmit={handleSubmit}>
          <div className="form-groups">
              <label htmlFor="id">ID : </label>
              <input
                type="text"
                id="id"
                placeholder='16AD01'
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="form-groups">
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                id="email"
                placeholder='sudha@gmail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-groups">
              <label htmlFor="password">Password : </label>
              <input
                type="password"
                id="password"
                placeholder='12344'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className='btn'>Login</button>
          </form>
        </div>
      </div>
    </div>
    <ToastContainer/>
    </>
  );
};

export default LoginPage;
