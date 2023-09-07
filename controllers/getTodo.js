const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
  try {
    //  fetch all the todoitems from the database
    const todos = await Todo.find({});
    // response
    res.status(200).json({
      success: true,
      data: todos,
      message: "entire todo data is fetched",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: err,
      message: "Some error occured",
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    // extract on the basis on id
    const id = req.params.id;
    const todo = await Todo.find({ _id: id });

    // data for the given id is not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No data found with given id ",
      });
    }
    // data for the given id is found
    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} is successfully fetched`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: err,
      message: "Some error occured",
    });
  }
};
