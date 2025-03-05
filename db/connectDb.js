import mongoose from "mongoose";

const conectarDB = async () => {
  try {
    const connection = await mongoose.connect(
        process.env.MONGO_URI
    );

    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(url);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    //Forzamos el cierre de los otros procesos en caso de error
    process.exit(1);
  }
};

export default conectarDB;