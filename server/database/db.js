import mongoose from "mongoose";

const Connection = async(password = '12345')=>{
    const URL =`mongodb+srv://userCode:${password}@cluster0.8mmqfx1.mongodb.net/?retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser:true});
        console.log('Database connected successfully');
    }
    catch(error){
        console.log('Error while connecting to the database',error);
    }

}

export default Connection;