// jo v model hm banaye hai.. controller folder k andar me uske kisi route se map krna hga... (yani ki is url pe chala jayega )..to uske liye router import krna hga...to kr liye hai....(express object ka andr rhta hai)
const express = require("express");
const router = express.Router();

// import krna hga model jo(jo ki controller folder k andar me banaye hai)
const { createTodo } = require("../controllers/createTodo");

// define the Api routes now......

router.post("/createTodo", createTodo);

module.exports = router;
