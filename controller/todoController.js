const todoModel = require("../models/todoModel");

const getTodos = async (req, res) => {
  const data = await todoModel.findAll();
  res.status(200).json({
    todos: data,
  });
};

const insertTodo = async (req, res) => {
  const input = req.body;
  const output = await todoModel.create(input);
  res.status(200).json(output);
};

const getTodoById = async (req, res) => {
  const { id } = req.params;
  const data = await todoModel.findByPk(id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({
      message: "not found",
    });
  }
};

const updateTodo = async (req, res) => {
  const newTodo = req.body;
  const id = req.params.id;
  await todoModel.update(newTodo, {
    where: {
      id,
    },
  });
  const data = await todoModel.findByPk(id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({
      message: "not found",
    });
  }
};

const deleteTodo = async (req, res) => {
  const idObj = req.body;
  await todoModel.destroy({
    where: idObj,
  });
  res.status(200).json({
    message: `Todo Deleted`,
  });
};

module.exports = { getTodos, insertTodo, getTodoById, updateTodo, deleteTodo };
