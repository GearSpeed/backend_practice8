const express = require("express");
const mentorsUseCase = require("../usecases/mentors.usecase");

const route = express.Router();

// Obtener todos los mentors registrados
route.get("/", async (request, response) => {
  try {
    const mentors = await mentorsUseCase.getAll();
    response.json({
      succes: true,
      message: "All mentors",
      data: { mentors },
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
    const mentors = await mentorsUseCase.create(request.body);

    response.json({
      succes: true,
      data: { mentor: mentors },
    });
  } catch (error) {
    response.status(error.status || 500);

    response.json({
      succes: false,
      error: error.message,
    });
  }
});

// GET /mentors/:id
route.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const mentor = await mentorsUseCase.getById(id);

    response.json({
      succes: true,
      data: { mentor },
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
    const mentorDeleted = await mentorsUseCase.deleteById(id);

    response.json({
      succes: true,
      data: { mentor: mentorDeleted },
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
    const mentorUpdate = await mentorsUseCase.updateById(id);

    response.json({
      succes: true,
      data: { mentor: mentorUpdate },
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
