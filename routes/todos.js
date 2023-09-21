const express = require("express");
const todoController = require("../controller/todoController");
const { validate, validateSchema } = require("../middleware/validation");

const router = express.Router();

router.get("/", todoController.getTodos);
router.get(
  "/:id",
  validate(validateSchema.get_delete_todo),
  todoController.getTodoById
);
router.post(
  "/",
  validate(validateSchema.insert_todo),
  todoController.insertTodo
);
router.put(
  "/:id",
  validate(validateSchema.update_todo),
  todoController.updateTodo
);
router.delete(
  "/:id",
  validate(validateSchema.get_delete_todo),
  todoController.deleteTodo
);

module.exports = router;
