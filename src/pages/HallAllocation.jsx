import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HallAllocation.css';

const EndSemHallAllocation = () => {
  const [examData, setExamData] = useState([]);
  const [selectedExam, setSelectedExam] = useState('');
  const [rollNumbers, setRollNumbers] = useState('');
  const [allocatedHall, setAllocatedHall] = useState('');

  useEffect(() => {
    fetchExamData();
  }, []);

  const fetchExamData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/exam');
      setExamData(response.data);
    } catch (error) {
      console.error('Error fetching exam data:', error);
    }
  };

  const handleExamSelect = (e) => {
    setSelectedExam(e.target.value);
  };

  const handleRollNumbersChange = (e) => {
    setRollNumbers(e.target.value);
  };

  const handleAllocateHall = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:3000/api/exam/${selectedExam}/allocate`, {
        rollNumbers: rollNumbers.split(',').map((rollNo) => rollNo.trim()),
        allocatedHall,
      });

      console.log(response.data); // Optional: Handle the response data

      // Display a success message or perform any additional actions
      alert('Hall allocation updated successfully!');
    } catch (error) {
      console.error('Error updating hall allocation:', error);
      // Display an error message or perform error handling
      alert('Error updating hall allocation. Please try again.');
    }
  };

  return (
    <div className="end-sem-hall-allocation-container">
      <h2>End Sem Exam Hall Allocation</h2>
      <form onSubmit={handleAllocateHall}>
        <div className="form-group">
          <label htmlFor="exam">Select Exam:</label>
          <select id="exam" value={selectedExam} onChange={handleExamSelect} required>
            <option value="">Select an exam</option>
            {examData.map((exam) => (
              <option key={exam._id} value={exam._id}>
                {exam.courseName}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="rollNumbers">Roll Numbers (comma-separated):</label>
          <input
            type="text"
            id="rollNumbers"
            value={rollNumbers}
            onChange={handleRollNumbersChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="allocatedHall">Allocated Hall:</label>
          <input
            type="text"
            id="allocatedHall"
            value={allocatedHall}
            onChange={(e) => setAllocatedHall(e.target.value)}
            required
          />
        </div>
        <button className="allocate-button" type="submit">Allocate Hall</button>
      </form>
    </div>
  );
};

export default EndSemHallAllocation;
