const mongoose = require('mongoose');

let articlesSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
  slug: String
});

let Article = mongoose.model('Article', articlesSchema)

module.exports = Article
