const express = require("express");
const { testDbConnection } = require("./config/db");
const todoModel = require("./models/todoModel");

const app = express();
testDbConnection();

app.use(express.json());
app.use("/todos", require("./routes/todos"));

todoModel.sync({ alter: true }).then(() => {
  console.log("todoModel synced...");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server running on ${PORT}`));
