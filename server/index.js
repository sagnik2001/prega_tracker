const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path")

//Doc routes
const DocRegisterRoute = require("./routes/Docs/Auth/register")
const DocLogInRoute = require("./routes/Docs/Auth/login")
const DocUpdateInfo = require("./routes/Docs/Info/DoctorInfo")
//patient routes
const PatientRegister=require("./routes/Patient/Auth/Register");
const PatientLogin=require("./routes/Patient/Auth/Login");
const Patientinfo = require('./routes/Patient/Info/PatientInfo');
//appointment routes
const AppointmentRoute = require("./routes/Appointments/Appointments")


dotenv.config();

app.use(cors());

const URL = process.env.localhost || 5000;

// For using static files

app.use('/fileuploads', express.static(path.join(__dirname, './public/uploads')));

mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to Database");
  }
);

// MiddleWares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(express.urlencoded({ extended: true }));

// For Docs

app.use("/doc",DocRegisterRoute)
app.use("/doc",DocLogInRoute)
app.use("/doc",DocUpdateInfo)


// For Appointments

// app.use("/appointment",AppointmentRoutes)




// For Patients
app.use("/patient",PatientRegister);
app.use("/patient",PatientLogin);
app.use("/patient",Patientinfo);



app.listen(URL, () => {
  console.log("Server is running");
});
