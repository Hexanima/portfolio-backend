// Node Modules
const process = require("process")

// External Modules
const express = require("express")
const methodOverride = require("method-override")
require("dotenv").config()
const cors = require("cors")

// App creation
const app = express();

// Config
const PORT = process.env.PORT || 3000;
const envMessage = process.env.MESSAGE;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(methodOverride("_method"));
app.use(cors())

// Routes
app.use((req, res) => {
    return res.json({
        msg: "Hello world!",
        today: new Date().getDate(),
        envMessage
    })
})

// Server startup
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))