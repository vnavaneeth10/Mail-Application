// Import express into our project
const express = require("express");

// Creating an instance of express function
const app = express();

// The port we want our project to run on
const PORT = 5500;




// Express should add our path
app.use(express.static("public"));





app.use(express.json());
app.use(express.urlencoded({ extended: false }));





// Render the index.html when the user visit our project port
app.get("/", (req, res) => {
  res.sendFile("/home.html");
});


app.post("/send_email", (req, res) => {
    console.log(req.body);
  });
  
 




// Express allows us to listen to the PORT and trigger a console.log() when you visit the port
app.listen(PORT, () => {
  console.log(`“Welcome to Coding Competition  by Navaneeth , NORKA B1”`);
});
