const mongoose=require('mongoose');
const DB_CON=async()=>{
    try {
        mongoose.connect("mongodb+srv://amiira123:12345@cluster0.xdvvzfc.mongodb.net/Betahouse");
        console.log('DB connected !')
    } catch (error) {
       console.log(error.message) 
    }
}
module.exports = DB_CON
