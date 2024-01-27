var express = require("express");
var path = require("path");
const bodyParser = require('body-parser');
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://Arsen2001Karapetyan:arsenk2001k@cluster0.7usnoj2.mongodb.net/sample_mflix';

app.use(express.static('public'));

// var mascots = [
    
// ];

app.get("/", function (req, res) {
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', async () => {
        console.log('Connected to MongoDB!');
        try {
            const mascots = await mongoose.connection.db.collection('theaters').find({ "location.address.city" :"Bloomington" }).toArray();

            res.render('../public/form.ejs', {
                info :mascots
            });
            console.log(mascots);
        } catch (error) {
            console.error('Error retrieving movies:', error);
        } finally {
            mongoose.connection.close();
        }
    })
});

app.post('/addName', async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    const email = req.body.email;
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', async () => {
        console.log('Connected to MongoDB!');
        try {
            let result = await mongoose.connection.db.collection('users').insertOne({
                name: name,
                email: email,
                password: password
            })
            console.log(result);
        } catch (error) {
            console.error('Error retrieving movies:', error);
        } finally {
            mongoose.connection.close();
        }
    })
});

app.listen(3000, function () {
    console.log("Example is running on port 3000");
});



// Define a Mongoose schema and model for the Person collection
// const personSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
// });

// const Person = mongoose.model('Person', personSchema);

// Replace the connection string with your MongoDB connection string

// Check the connection
