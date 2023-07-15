import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Hall.css'
const AdminExamHallAllocation = () => {
  const [exams, setExams] = useState([]);
  const [selectedExam, setSelectedExam] = useState('');
  const [rollNumbers, setRollNumbers] = useState('');
  const [hallNumber, setHallNumber] = useState('');
  const [seatNumber, setSeatNumber] = useState('');
  const [allocationMessage, setAllocationMessage] = useState('');

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/exam'); // Replace '/api/exams' with your API endpoint for fetching exams
      setExams(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleExamSelection = (event) => {
    setSelectedExam(event.target.value);
  };

  const handleRollNumberChange = (event) => {
    setRollNumbers(event.target.value);
  };

  const handleHallNumberChange = (event) => {
    setHallNumber(event.target.value);
  };

  const handleSeatNumberChange = (event) => {
    setSeatNumber(event.target.value);
  };

  const handleAllocationSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('api/exam/${selectedExam}/allocate', {
        examId: selectedExam,
        rollNumbers: rollNumbers.split(',').map((roll) => roll.trim()),
        hallNumber,
        seatNumber,
      }); // Replace '/api/allocate' with your API endpoint for hall allocation

      setAllocationMessage(response.data.message);
      setRollNumbers('');
      setHallNumber('');
      setSeatNumber('');
    } catch (error) {
      console.error(error);
      setAllocationMessage('An error occurred during allocation.');
    }
  };

  return (
    <div>
      <h1>End Semester Exam Hall Allocation</h1>
      <form onSubmit={handleAllocationSubmit}>
        <div>
          <label htmlFor="exam">Select Exam:</label>
          <select id="exam" value={selectedExam} onChange={handleExamSelection}>
            <option value="">Select an Exam</option>
            {exams.map((exam) => (
              <option key={exam._id} value={exam._id}>
                {exam.courseCode} - {exam.courseName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="rollNumbers">Enter Roll Numbers (comma-separated):</label>
          <input
            id="rollNumbers"
            type="text"
            value={rollNumbers}
            onChange={handleRollNumberChange}
          />
        </div>
        <div>
          <label htmlFor="hallNumber">Hall Number:</label>
          <input
            id="hallNumber"
            type="text"
            value={hallNumber}
            onChange={handleHallNumberChange}
          />
        </div>
        <div>
          <label htmlFor="seatNumber">Seat Number:</label>
          <input
            id="seatNumber"
            type="text"
            value={seatNumber}
            onChange={handleSeatNumberChange}
          />
        </div>
        <button type="submit">Allocate Hall</button>
      </form>
      {allocationMessage && <p>{allocationMessage}</p>}
    </div>
  );
};

export default AdminExamHallAllocation
