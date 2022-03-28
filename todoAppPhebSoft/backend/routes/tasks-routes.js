const express = require("express");

const Tasks = require("../models/tasks.model");
const router = express.Router();

router.get("/FetchTasks", (req, res, next) => {
  Tasks.find().then((documents) => {
    res.status(200).json({
      message: "this is a list of users recieved from DB",
      tasks: documents,
    });
  });
});
router.post("/CreateTask", (req, res, next) => {
  const task = new Tasks({
    Description: req.body.Description,
    Status: req.body.Status,
  });

  task
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Task has been created succefully!",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

router.put("/UpdateTask/:id", (req, res, next) => {
  const task = new Tasks({
    _id: req.body._id,
    Description: req.body.Description,
    Status: req.body.Status,
  });

  Tasks.updateOne({ _id: req.params.id }, task).then((result) => {
    res.status(200).json({
      message: "Task Updated!",
      result: result,
    });
  });
});

router.delete("/DeleteTask/:id", (req, res, next) => {
  Tasks.deleteOne({ _id: req.params.id }).then((result) => {
    res.status(200).json({
      message: "Task Deleted!",
      result: result,
    });
  });
});

module.exports = router;
