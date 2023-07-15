import React, { useState } from 'react';
import axios from 'axios';
import './AdminInsertStudents.css'

function AdminInsertStudents() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    name: '',
    rollno: '',
    email: '',
    mobno: '',
    password: '',
    department: '',
    hallnum: '',
    seatNumber: ''
  });
  const [count, setCount] = useState(0);

  const handleInputChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, newStudent]);
    setNewStudent({
      name: '',
      rollno: '',
      email: '',
      mobno: '',
      password: '',
      department: '',
      hallnum: '',
      seatNumber: ''
    });
    setCount(count + 1);
  };

  const handleSaveStudents = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/user', students);
      console.log(response.data); 
      alert('Students inserted successfully!');
      setStudents([]); // Clear the student list after successful insertion
    } catch (error) {
      console.error(error);
      alert('Error inserting students. Please try again.');

    }
  };

  const renderStudents = () => {
    return students.map((student, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{student.name}</td>
        <td>{student.rollno}</td>
        <td>{student.email}</td>
        <td>{student.mobno}</td>
        <td>{student.department}</td>
        <td>{student.hallnum}</td>
        <td>{student.seatNumber}</td>
      </tr>
    ));
  };

  return (
    <div className="container">
      <h1>Admin Insert Students</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newStudent.name}
          onChange={handleInputChange}
          className="input"
        />
        <input
          type="text"
          name="rollno"
          placeholder="Roll No"
          value={newStudent.rollno}
          onChange={handleInputChange}
          className="input"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={newStudent.email}
          onChange={handleInputChange}
          className="input"
        />
        <input
          type="text"
          name="mobno"
          placeholder="Mobile No"
          value={newStudent.mobno}
          onChange={handleInputChange}
          className="input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={newStudent.password}
          onChange={handleInputChange}
          className="input"
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={newStudent.department}
          onChange={handleInputChange}
          className="input"
        />
        <input
          type="text"
          name="hallnum"
          placeholder="Hall Number"
          value={newStudent.hallnum}
          onChange={handleInputChange}
          className="input"
        />
        <input
          type="text"
          name="seatNumber"
          placeholder="Seat Number"
          value={newStudent.seatNumber}
          onChange={handleInputChange}
          className="input"
        />
        <button type="submit" className="button">Add Student</button>
      </form>
      <button onClick={handleSaveStudents} className="button">Save Students</button>
      <table className="table">
        <thead>
          <tr>
            <th>s.no</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Department</th>
            <th>Hall Number</th>
            <th>Seat Number</th>
          </tr>
        </thead>
        <tbody>
          {renderStudents()}
        </tbody>
      </table>
      <div className="count">Total Students: {count}</div>
    </div>
  );
}

export default AdminInsertStudents;


