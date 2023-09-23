const yup = require("yup");

const validateSchema = {
  insert_todo: yup.object({
    body: yup.object({
      text: yup.string().required(),
      isCompleted: yup.boolean().required(),
    }),
  }),
  update_todo: yup.object({
    body: yup.object({
      text: yup.string().required(),
      isCompleted: yup.boolean().required(),
    }),
    params: yup.object({
      id: yup.number().required(),
    }),
  }),
  get_delete_todo: yup.object({
    params: yup.object({
      id: yup.number().required(),
    }),
  }),
};

const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate({
      body: req.body,
      params: req.params,
    });
    return next();
  } catch (error) {
    res.status(400).json({
      type: error.name,
      message: error.message,
    });
  }
};

module.exports = { validateSchema, validate };
