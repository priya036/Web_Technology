const { Hall, User, Admin, Exam, Allocation } = require('./schema');
const cors = require('cors')
const express = require('express');
const app = express();

// User operations
module.exports.insertStudent = async (req, res) => {
    const student = new User({
        name: req.body.name,
        rollno: req.body.rollno,
        email: req.body.email,
        mobno: req.body.mobno,
        password: req.body.password,
        department: req.body.department,
        hallnum: req.body.hallnum,
        seatNumber: req.body.seatNumber
    })
    await student.save();
    res.send({ msg: "student Added Sucessfully !" });
}
module.exports.deleteStudent = async (req, res) => {
    const student = await User.findOneAndDelete({ rollno: req.params.rno })
    if (student)
        res.send("student deleted successfully")
    else
        res.send("student doesn't exist")
}

module.exports.getallStudent = async (req, res) => {
    const student = await User.find({});
    res.send(student)
}

module.exports.getStudent = async (req, res) => {
    const student = await User.findOne({ rollno: req.params.rno });
    if (student)
        res.send(student)
    else
        res.send({ msg: "student not found!" });
}

module.exports.updateStudent = async (req, res) => {
    const student = await User.findOneAndUpdate({ rollno: req.params.rno },
        {
            $set: {
                name: req.body.name,
                email: req.body.email,
                mobno: req.body.mobno,
                password: req.body.password,
                department: req.body.department,
                hallnum: req.body.hallnum,
                seatNumber: req.body.seatNumber
            }
        })
    if (student)
        res.send("student updated")
    else
        res.send("student not found")
}




// Admin Operations
module.exports.insertAdmin = async (req, res) => {
    const admin = new Admin({
        facultyid: req.body.facultyid,
        name: req.body.name,
        email:req.body.email,
        mobno: req.body.mobno,
        password: req.body.password
    })
    await admin.save();
    res.send({ msg: "Admin Added Sucessfully !" });
}
module.exports.deleteAdmin = async (req, res) => {
    const admin = await Admin.findOneAndDelete({ facultyid: req.params.fid })
    if (admin)
        res.send("Admin deleted successfully")
    else
        res.send("Admin doesn't exist")
}

module.exports.getallAdmin = async (req, res) => {
    const admin = await Admin.find({});
    res.send(admin)
}

module.exports.getAdmin = async (req, res) => {
    const admin = await Admin.findOne({ facultyid: req.params.fid });
    if (admin)
        res.send(admin)
    else
        res.send({ msg: "Admin not found!" });
}

module.exports.updateAdmin = async (req, res) => {
    const admin = await Admin.findOneAndUpdate({ facultyid: req.params.fid },
        {
            $set: {
                name: req.body.name,
                mobno: req.body.mobno,
                password: req.body.password,
                email:req.body.email,

            }
        })
    if (admin)
        res.send("Admin updated")
    else
        res.send("Admin not found")
}


// Hall Operations
module.exports.insertHall = async (req, res) => {
    const hall = new Hall({
        hallid: req.body.hallid,
        hallnum: req.body.hallnum,
        loaction: req.body.loaction,
        capacity: req.body.capacity,
        facultyid: req.body.facultyid,
        availableSeats: req.body.availableSeats,
        allocated: req.body.allocated,
        facilities: req.body.facilities
    })
    await hall.save();
    res.send({ msg: "Hall Added Sucessfully !" });
}
module.exports.deleteHall = async (req, res) => {
    const hall = await Hall.findOneAndDelete({ hallnum: req.params.hno })
    if (hall)
        res.send("Hall deleted successfully")
    else
        res.send("Hall doesn't exist")
}

module.exports.getallHall = async (req, res) => {
    const hall = await Hall.find({});
    res.send(hall)
}

module.exports.getHall = async (req, res) => {
    const hall = await Hall.findOne({ hallnum: req.params.hno });
    if (hall)
        res.send(hall)
    else
        res.send({ msg: "Hall not found!" });
}

module.exports.updateHall = async (req, res) => {
    const hall = await Hall.findOneAndUpdate({ hallnum: req.params.hno },
        {
            $set: {
                loaction: req.body.loaction,
                capacity: req.body.capacity,
                facultyid: req.body.facultyid,
                availableSeats: req.body.availableSeats,
                allocated: req.body.allocated,
                facilities: req.body.facilities
            }
        })
    if (hall)
        res.send("Hall updated")
    else
        res.send("Hall not found")
}

// Exam Operations
module.exports.insertExam = async (req, res) => {
    const exam = new Exam({
        courseCode: req.body.courseCode,
        courseName: req.body.courseName,
        date: req.body.date,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        hallnum: req.body.hallnum,
        invigilators: [
            {
                name: req.body.name,
                contact: req.body.contact

            }
        ]
    })
    await exam.save();
    res.send({ msg: "Exam created Sucessfully !" });
}
module.exports.deleteExam = async (req, res) => {
    const exam = await Exam.findOneAndDelete({ courseCode: req.params.eno })
    if (exam)
        res.send("Exam deleted successfully")
    else
        res.send("Exam doesn't exist")
}

module.exports.getallExam = async (req, res) => {
    const exam = await Exam.find({});
    res.send(exam)
}

module.exports.getExam = async (req, res) => {
    const exam = await Exam.findOne({ courseCode: req.params.eno });
    if (exam)
        res.send(exam)
    else
        res.send({ msg: "Exam not found!" });
}

module.exports.updateExam = async (req, res) => {
    const exam = await Exam.findOneAndUpdate({ courseCode: req.params.eno },
        {
            $set: {
                courseName: req.body.courseName,
                date: req.body.date,
                startTime: req.body.startTime,
                endTime: req.body.endTime,
                hallId: req.body.hallId,
            }
        })
    if (exam)
        res.send("Exam updated")
    else
        res.send("Exam not found")
}

//allocation
module.exports.allocateHall = async (req, res) => {
    const hall = new Allocation({
        hallid: req.body.hallid,
        rollno:req.body.rollno,
        hallnum: req.body.hallnum,
        seatNumber:req.body.seatNumber
    })
    await hall.save();
    res.send({ msg: "Exam Hall Allocated Sucessfully !" });
}




