// schema ko import kro ab......jo ki models folder k andar me hai--------------
// backend ka import statement aisa hota hai-
const Todo = require("../models/Todo");

// define route handler
exports.createTodo = async (req, res) => {
  try {
    // extract the title and the description from request body
    const { title, description } = req.body;
    //  create a new Todo object
    const response = await Todo.create({ title, description });
    // send a json response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: error.message,
    });
  }
};
