const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/submit", (req, res) => {
    res.send("Form submitted");
});
app.get("/a", (req, res) => {
    res.send("Form mitted");
});
app.get("/b", (req, res) => {
    res.send(" submitted");
});
app.get("/c", (req, res) => {
    res.send("Form sub");
});
app.get("/d", (req, res) => {
    res.end("Formed");
});
app.post("/tasks", (req, res) => {
    res.send("Task created");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});