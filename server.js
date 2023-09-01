const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors')
const connectDB = require('./config/dbConnect')



dotenv.config();
const app = express()

connectDB();

// mongoose.connect('mongodb://localhost:27017/local',
//   {
//     useNewUrlParser: true,
//     // useFindAndModify: true,
//     useUnifiedTopology: true
//   },(err)=>{
//     if(err){
//         console.log("AHsan",err)
//     }else{
//         console.log("successful connect")
//     }

//   }
// );

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))
// app.use(colors())


// app.use('/api/v1/test', require('./routes/testRoutes'))
app.use('/api/v1/auth', require('./routes/auth'))
app.use('/api/v1/inventory', require('./routes/inventoryRoutes'))



const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Node server Running on PORT ${process.env.PORT}`)
})