const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/usersdb", {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true,
// });

async function connectDB(
  connection_string = "mongodb://localhost:27017/TodoDB"
) {
  try {
    await mongoose.connect(connection_string);
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    return db;
  } catch (error) {
    console.log({
      Error: error,
    });
    process.exit(1);
  }
}

module.exports = connectDB;
