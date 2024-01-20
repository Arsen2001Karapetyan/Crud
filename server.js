// var express = require("express");
// var path = require("path");
// const bodyParser = require('body-parser');
// var app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(express.static('public'));

// app.get("/", function(req, res){
//     res.sendFile(path.join(__dirname,'./public/form.html'));
// });

// app.post('/addName', (req, res) => {
//     const name = req.body.name;
//     const age = req.body.age;
//     console.log('Received data 1:', name , age );
//     res.redirect('/');
//  });

// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });

const mongoose = require('mongoose');

// Define a Mongoose schema and model for the Person collection
// const personSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
// });

// const Person = mongoose.model('Person', personSchema);

// Replace the connection string with your MongoDB connection string
const connectionString = 'mongodb+srv://Arsen2001Karapetyan:arsenk2001k@cluster0.7usnoj2.mongodb.net/sample_mflix';
// Check the connection
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
console.log('Connected to MongoDB!');

try {
const allMovies = await mongoose.connection.db.collection('movies').find().toArray(); // .insertMany(newMovies);

console.log('All Movies:', allMovies);
} catch (error) {
console.error('Error retrieving movies:', error);
} finally {
mongoose.connection.close();
}
});