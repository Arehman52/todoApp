const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const TaskRoutes = require('./routes/tasks-routes');
// const LabTasksRoutes = require('./routes/labTasks-routes');
// const StudentActivityHistoryRoutes = require('./routes/student-activity-history-routes');
// const StudentAttemptedLabTasksRoutes = require('./routes/student-attempted-lab-tasks-routes');
// const StudentAttemptedLabChallengesRoutes = require('./routes/student-attempted-lab-challenges-routes');
// const StudentLabDataRoutes = require('./routes/student-lab-data-routes');
// const LabsRoutes = require('./routes/labs-routes');
// const LabChallengesRoutes = require('./routes/labChallenges-routes');



const app = express();


// following line establishes the connection with GBCLDatabase.
// mongodb+srv://phebsoftToDoApp:AGnVFJsUjWP81z8z@cluster0.w4eye.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://Abdurrehman:AGnVFJsUjWP81z8z@cluster0.w4eye.mongodb.net/PhebsoftToDoAppDB?retryWrites=true&w=majority",{ useNewUrlParser: true,
useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB.");
  })
  .catch((err) => {
    console.log("FAILED to connect with the DB!!!, Errors are as below:");
    console.log(err);
  });



  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");


  res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Credentials", "true");
  next();

});


app.get("/", (req, res, next) => {
  res.status(200).json("Server is running!");
});

let cors = require('cors')
app.use(cors())

//-->  /api/Homepage + [/CreateUser && /FetchTHISUser]
app.use("/api/Tasks", TaskRoutes);
// app.use("/api/StudentAttemptedLabChallenges", StudentAttemptedLabChallengesRoutes);
// app.use("/api/StudentAttemptedLabTasks", StudentAttemptedLabTasksRoutes);
// app.use("/api/Labs", LabsRoutes);
// app.use("/api/Users", UsersRoutes);
// app.use("/api/LabTasks", LabTasksRoutes);
// app.use("/api/StudentActivityHistory", StudentActivityHistoryRoutes);
// app.use("/api/StudentLabData", StudentLabDataRoutes);

module.exports = app;


