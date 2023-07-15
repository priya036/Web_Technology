import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Allocate.css'

const EndSemExamHallAllocation = () => {
    const [exams, setExams] = useState([]);
    const [selectedExam, setSelectedExam] = useState('');
    const [hallNumber, setHallNumber] = useState('');
    const [startSeatNumber, setStartSeatNumber] = useState('');
    const [rollNumbers, setRollNumbers] = useState('');
    const [allocatedStudents, setAllocatedStudents] = useState([]);
    const [seatNumberError, setSeatNumberError] = useState('');

    useEffect(() => {
        // Fetch exams data
        axios.get('http://localhost:3000/api/exam')
            .then(response => {
                setExams(response.data);
            })
            .catch(error => {
                console.error('Error fetching exams:', error);
            });
    }, []);

    useEffect(() => {
        // Fetch allocated students data for selected exam
        if (selectedExam) {
            axios.get(`localhost:3000/api/exam/${selectedExam}/allocate`)
                .then(response => {
                    setAllocatedStudents(response.data);
                })
                .catch(error => {
                    console.error('Error fetching allocated students:', error);
                });
        }
    }, [selectedExam]);

    const handleAllocate = () => {
        if (!startSeatNumber || isNaN(startSeatNumber)) {
            setSeatNumberError('Please enter a valid seat number');
            return;
        }

        setSeatNumberError('');

        const rollNumbersArray = rollNumbers.split(',').map(rollno => rollno.trim());
        let currentSeatNumber = parseInt(startSeatNumber, 10);
        const allocatedData = allocatedStudents.map(student => {
            if (rollNumbersArray.includes(student.rollno)) {
                const allocatedStudent = {
                    rollno: student.rollno,
                    hallnum: hallNumber,
                    seatNumber: currentSeatNumber.toString()
                };
                currentSeatNumber++;
                return allocatedStudent;
            }
            return student;
        });

        axios.put(`/api/exam/${selectedExam}/allocate`, allocatedData)
            .then(response => {
                console.log('Hall allocation successful:', response.data);
                // Handle success
            })
            .catch(error => {
                console.error('Error allocating halls:', error);
                // Handle error
            });
    };

    return (
        <div>
            <h2>End Sem Exam Hall Allocation</h2>
            <div>
                <label htmlFor="exam-select">Select Exam:</label>
                <select id="exam-select" value={selectedExam} onChange={e => setSelectedExam(e.target.value)}>
                    <option value="">Select an exam</option>
                    {exams.map(exam => (
                        <option key={exam._id} value={exam._id}>{exam.courseName}</option>
                    ))}
                </select>
            </div>
            {selectedExam && (
                <div>
                    <label htmlFor="hall-number">Hall Number:</label>
                    <input type="text" id="hall-number" value={hallNumber} onChange={e => setHallNumber(e.target.value)} />
                </div>
            )}
            {selectedExam && (
                <div>
                    <label htmlFor="start-seat-number">Start Seat Number:</label>
                    <input type="text" id="start-seat-number" value={startSeatNumber} onChange={e => setStartSeatNumber(e.target.value)} />
                    {seatNumberError && <span className="error">{seatNumberError}</span>}
                </div>
            )}
            {selectedExam && (
                <div>
                    <label htmlFor="roll-numbers">Set of Roll Numbers:</label>
                    <input type="text" id="roll-numbers" value={rollNumbers} onChange={e => setRollNumbers(e.target.value)} />
                </div>
            )}
            {selectedExam && (
                <button onClick={handleAllocate}>Allocate Halls</button>
            )}
        </div>
    );
};

export default EndSemExamHallAllocation;
