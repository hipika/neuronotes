import useCors from "./middleware/init";

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json())
app.use("/api/users", require("./routes/userRoutes"))
useCors("http://localhost:5173");

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})