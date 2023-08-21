import mongoose from "mongoose";

const Connection = async(password = '1234')=>{
    const URL =`mongodb+srv://unnati:${password}@cluster0.v4hjypp.mongodb.net/?retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser:true});
        console.log('Database connected successfully');
    }
    catch(error){
        console.log('Error while connecting to the database',error);
    }

}

export default Connection;