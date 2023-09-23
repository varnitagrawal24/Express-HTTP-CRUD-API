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

const getTodoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await todoModel.findByPk(id);
    if (data) {
      res.status(200).json(data);
    } else {
      const error = new Error("not found");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    next(error);
  }
};

const updateTodo = async (req, res, next) => {
  try {
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
      const error = new Error("not found");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    next(error);
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const idObj = req.body;
    const data = await todoModel.findByPk(id);
    if (data) {
      await todoModel.destroy({
        where: idObj,
      });
      res.status(200).json({
        message: `Todo Deleted`,
      });
    } else {
      const error = new Error("not found");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getTodos, insertTodo, getTodoById, updateTodo, deleteTodo };
