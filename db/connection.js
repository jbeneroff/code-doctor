import mongoose from 'mongoose'

const mongoDB_URI = process.env.PROD_MONGO || "mongodb://localhost:27017/codeDoctorDatabase"

//set false when done with debugging
mongoose.set("debug", true)

//faster lookup = increased performance(???)
mongoose.set("useCreateIndex", true)

//prevent deprecation errors for find
mongoose.set("returnOriginal", true)

mongoose.connect(mongoDB_URI,
  { useUnifiedTopology: true, useNewUrlParser: true }
).catch(e =>
{ console.error("error linking to Mongo:", e.message) }
)

//add listeners to mongo connection 

mongoose.connection.on("connected", () => { console.log("MongoDB connection established") })
mongoose.connection.on("disconnected", () => console.log("Disconnected from MongoDB"))

export default mongoose.connection