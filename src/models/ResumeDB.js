const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;
mongoose.connect(
  uri
);

const Schema = mongoose.Schema;

var resumeDetails = new Schema({
  basicInfo: {
    phone: Number,
    email: String,
    website: String,
    address: String,
    experience: String,
  },
  interests: Array,
  skills: Array,
  education: Array,
  experience: Array,
});

var ResumeInfo = mongoose.model("Resumes", resumeDetails);

module.exports = ResumeInfo;
