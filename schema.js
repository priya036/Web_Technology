const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobno: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    hallnum: {
        type: String,
        required: true
    },
    seatNumber: {
        type: String,
        required: true
    }
});
const hallSchema = new mongoose.Schema({
    hallnum: {
        type: String,
        required: true
    },
    loaction: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    availableSeats: {
        type: Number,
        required: true
    },
    facultyid: {
        type: String,
        required: true
    },

    allocated: {
        type: Boolean,
        default: false
    },
    // hall_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Exam',
    //     required:true
    // }


});
const adminSchema = new mongoose.Schema({
    facultyid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobno: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
})
const examSchema = new mongoose.Schema({
    courseCode: {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    hallnum: {
        type: String,
        required: true
    },
    // user: [
    //     {
    //         rollno: {
    //             rollno: String,
    //             // required: true
    //         },
    //         seatNumber: {
    //             type: String,
    //            // required: true
    //         }
    //     }
    // ],
    // student: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Student',
    //     required:true
    // },
    invigilators: [
        {
            name: {
                type: String,
            },
            contact: {
                type: String,
            }

        }
    ]
});


const allocationSchema = new mongoose.Schema({
    examId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exam',
      required: true,
    },
    rollno: [
      {
        type: String,
        required: true,
      },
    ],
    hallnum: {
      type: String,
      required: true,
    },
    seatNumber: {
      type: String,
      required: true,
    },
  });
  
const Allocation = mongoose.model('Allocation', allocationSchema);
const Hall = mongoose.model('Hall', hallSchema);
const Exam = mongoose.model('Exam', examSchema);
const User = mongoose.model('User', studentSchema);
const Admin = mongoose.model('Admin', adminSchema)

module.exports = { Hall, User, Admin, Exam ,Allocation};   
