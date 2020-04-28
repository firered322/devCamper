const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(
      `MONGO connected: ${connect.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = connectDB;
