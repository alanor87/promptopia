import mongoose from "mongoose";

const { MONGO_DB_NAME, MONGO_DB_USER, MONGO_DB_PASS } = process.env;
let isConnected = false;

const connectToDb = async () => {
  const DB_HOST = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASS}@cluster0.chh3o.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority`;

  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("DB is already connected");
    return;
  }
  try {
    await mongoose.connect(DB_HOST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
  } catch (e) {
    console.log("DB connection error : ", e);
    isConnected = true;
  }
};
export default connectToDb;
