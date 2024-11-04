import app from "./app.js";

app.listen(process.env.ER_PORT);
console.log("Server running on port: ", process.env.ER_PORT);