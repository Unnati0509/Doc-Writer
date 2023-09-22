import mongoose from "mongoose";

const Connection = async(password = '1234')=>{
    const URL =`mongodb://unnati:unnati123@ac-zfpc8fk-shard-00-00.wppmub7.mongodb.net:27017,ac-zfpc8fk-shard-00-01.wppmub7.mongodb.net:27017,ac-zfpc8fk-shard-00-02.wppmub7.mongodb.net:27017/?ssl=true&replicaSet=atlas-q41g88-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser:true});
        console.log('Database connected successfully');
    }
    catch(error){
        console.log('Error while connecting to the database',error);
    }

}

export default Connection;