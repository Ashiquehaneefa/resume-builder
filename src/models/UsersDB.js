const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;
mongoose.connect(
  uri
);

const Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

var UserInfo = mongoose.model("Users", userSchema);

module.exports = UserInfo;
