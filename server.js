const { connectdb } = require('./connect');
const controller = require('./controler');
const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

connectdb()
    .then(() => { console.log('db connected') })
    .catch((err) => { console.log(err) });


//admin operation
app.get('/api/admin', controller.getallAdmin);
app.get('/api/admin/:fid', controller.getAdmin);
app.post('/api/admin', controller.insertAdmin);
app.put('/api/admin/:fid', controller.updateAdmin);
app.delete('/api/admin/:fid', controller.deleteAdmin);

//student  operation
app.get('/api/user', controller.getallStudent);
app.get('/api/user/:rno', controller.getStudent);
app.post('/api/user', controller.insertStudent);
app.put('/api/user/:rno', controller.updateStudent);
app.delete('/api/user/:rno', controller.deleteStudent);

//exam creation 
app.get('/api/exam', controller.getallExam);
app.get('/api/exam/:eno', controller.getExam);
app.post('/api/exam', controller.insertExam);
app.put('/api/exam/:eno', controller.updateExam);
app.delete('/api/exam/:eno', controller.deleteExam);

//hall allocation
app.get('/api/hall', controller.getallHall);
app.get('/api/hall/:hno', controller.getHall);
app.post('/api/hall', controller.insertHall);
app.put('/api/hall/:hno', controller.updateHall);
app.delete('/api/hall/:hno', controller.deleteHall);


//HALL ALLOCATE
app.post('api/exam/${selectedExam}/allocate', controller.allocateHall);






const port = 3000;
app.listen(port, () => {
    console.log(`Listening at post ${port}`)
})
