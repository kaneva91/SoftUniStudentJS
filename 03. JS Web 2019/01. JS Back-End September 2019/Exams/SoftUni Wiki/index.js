/* const env = process.env.NODE_ENV || 'development';
global.__basedir = __dirname;




const dbConnector = require('./config/db');

dbConnector().then(() => {
    const config = require('./config/config')[env];
    const app = require('express')();
    require('./config/express')(app);
    require('./config/routes')(app);
    app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));

}).catch(err => console.error(err));
 */

global.__basedir = __dirname;
const dbConnector = require('./config/db');
// const mongoose = require('mongoose');
dbConnector().then(() => {

  // const studentSchema = new mongoose.Schema({
  //   name: String,
  //   teacher: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Teacher'
  //   },
  //   subjects: [{
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Subject'
  //   }]
  // });

  // const subjectSchema = new mongoose.Schema({
  //   title: String,
  //   students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
  // });

  // const teacherSchema = new mongoose.Schema({
  //   name: String,
  //   students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
  // });

  // const StudentModel = mongoose.model('Student', studentSchema);
  // const SubjectModel = mongoose.model('Subject', subjectSchema);
  // const TeacherModel = mongoose.model('Teacher', teacherSchema);

  // TeacherModel.insertMany([{ name: 'Teacher 1', students: [] }]).then(() => {
  //   console.log('teacher was added');
  // });

  // StudentModel.insertMany([{ name: 'Student 1', teacher: '5d939236ac443820c616c12f' }]).then(() => {
  //   console.log('students was added!');
  // });

  // StudentModel.findById('5d9392c275a0af22c6089016').populate('teacher').then(stud => {
  //   console.log(stud);
  // })

  const config = require('./config/config');
  const app = require('express')();
  require('./config/express')(app);
  require('./config/routes')(app);
  
  

  app.listen(config.port, console.log(`Listening on port ${config.port}!`));
}).catch(console.error);

