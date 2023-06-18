const mongoose=require('mongoose');
const DB_CON=async()=>{
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/Houses");
        console.log('DB connected !')
    } catch (error) {
       console.log(error.message) 
    }
}
module.exports = DB_CON