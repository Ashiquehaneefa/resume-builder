const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;
mongoose.connect(
  uri
);

const Schema = mongoose.Schema;

var templateSchema = new Schema({
  name: String,
});

var TemplateInfo = mongoose.model("Templates", templateSchema);

module.exports = TemplateInfo;
