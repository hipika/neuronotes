const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
const url = "http://localhost:5173";
// Middleware

app.use(cors({origin: url}))
app.use(express.json())
app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/users", require("./routes/nodeRoutes"))
app.use("/api/users", require("./routes/sessionsRoutes"))
app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})