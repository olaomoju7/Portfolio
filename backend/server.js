const express = require("express");
const mongoose = require("mongoose");
const Contact = require("./models/Contact");
require("dotenv").config();

const port = 3000
const app = express();

app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });



app.get('/', (req, res) => {
  res.send('Welcome to our Contact Form API!')
})

app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const newContact = new Contact({
            name,
            email,
            subject,
            message
        });

        await newContact.save();

        res.status(201).json({
            success: true,
            message: "Your message has been sent successfully."
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Something went wrong. Please try again."
        });
    }
});

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`)
})


// HTTP METHODS
// GET
// POST
// PUT
// DELETE