const express = require("express");
const { testDbConnection } = require("./config/db");
const todoModel = require("./models/todoModel");
const {pathError, errorLogger, sendError} = require("./middleware/errorHandler")
 
const app = express();
testDbConnection();

todoModel.sync({alter:true}).then(() => {
  console.log("todoModel synced...");
});

app.use(express.json());
app.use("/todos", require("./routes/todos"));


//error handling
app.use(errorLogger);
app.use(sendError)
app.use(pathError);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server running on ${PORT}`));
