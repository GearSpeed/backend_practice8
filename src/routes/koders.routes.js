const express = require("express");
const kodersUseCase = require("../usecases/koders.usecase");

const route = express.Router();

// Obtener todos los koders registrados
route.get("/", async (request, response) => {
  try {
    const koders = await kodersUseCase.getAll();
    response.json({
      succes: true,
      message: "All koders",
      data: { koders },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      error: error.message,
    });
  }
});

route.post("/", async (request, response) => {
  try {
    const koders = await kodersUseCase.create(request.body);

    response.json({
      succes: true,
      data: { koder: koders },
    });
  } catch (error) {
    response.status(error.status || 500);

    response.json({
      succes: false,
      error: error.message,
    });
  }
});

// GET /koders/:id
route.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const koder = await kodersUseCase.getById(id);

    response.json({
      succes: true,
      data: { koder },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      succes: false,
      error: error.message,
    });
  }
});

route.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const koderDeleted = await kodersUseCase.deleteById(id);

    response.json({
      succes: true,
      data: { koder: koderDeleted },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      succes: false,
      error: error.message,
    });
  }
});

route.patch("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const koderUpdate = await kodersUseCase.updateById(id);

    response.json({
      succes: true,
      data: { koder: koderUpdate },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      succes: false,
      error: error.message,
    });
  }
});

module.exports = route;
