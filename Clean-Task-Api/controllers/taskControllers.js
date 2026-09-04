function getTasks(req, res) {
  res.json([
    {
      id: 1,
      title: "Learn Express"
    }
  ]);
}

function createTask(req, res) {
  res.status(201).json({
    message: "Task created"
  });
}

module.exports = {getTasks,createTask};