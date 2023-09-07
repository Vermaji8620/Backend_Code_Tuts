// jo v model hm banaye hai.. controller folder k andar me uske kisi route se map krna hga... (yani ki is url pe chala jayega )..to uske liye router import krna hga...to kr liye hai....(express object ka andr rhta hai)
const express = require("express");
const router = express.Router();

// import krna hga model jo(jo ki controller folder k andar me banaye hai)
const { createTodo } = require("../controllers/createTodo");
const { getTodo, getTodoById } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");

// define the Api routes now......

router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;
