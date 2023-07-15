import React, { useState } from 'react';
import axios from 'axios';
import './AdUpdateStud.css';

const UpdateStudent = () => {
  const [rollNo, setRollNo] = useState('');
  const [hallNum, setHallNum] = useState('');
  const [seatNumber, setSeatNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:3000/api/user/${rollNo}`, {
        hallnum: hallNum,
        seatNumber,
      });

      console.log(response.data); 
      
      alert('Exam hall allocated successfully!');
    } catch (error) {
      console.error('Error updating student data:', error);
      alert('Error updating student data. Please try again.');
    }
  };

  return (
    <div className="update-student-container">
      <h2>Allocate Hall</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="rollNo">Roll Number:</label>
          <input
            type="text"
            id="rollNo"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="hallNum">Hall Number:</label>
          <input
            type="text"
            id="hallNum"
            value={hallNum}
            onChange={(e) => setHallNum(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="seatNumber">Seat Number:</label>
          <input
            type="text"
            id="seatNumber"
            value={seatNumber}
            onChange={(e) => setSeatNumber(e.target.value)}
            required
          />
        </div>
        <button className="update-button" type="submit">Allocate</button>
      </form>
      
    </div>
  );
};

export default UpdateStudent;
