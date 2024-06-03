// Los importes de modelos siempre se inician con mayúsculas
const Koders = require("../models/koders.model");

async function create(koderData) {
  //Con la palabra reservada await es para que el programa
  //espere a que se resuelva la promesa y siempre debe ser en
  //una función asincrona
  const newKoder = await Koders.create(koderData);
  return newKoder;
}

async function getAll() {
  const allKoders = await Koders.find({});
  return allKoders;
}

async function getById(id) {
  const koder = await Koders.findById(id);
  return koder;
}

async function deleteById(id) {
  const koderDeleted = await Koders.findByIdAndDelete(id);
  return koderDeleted;
}

async function updateById(id, newKoderData) {
  const updatedKoder = await Koders.findByIdAndUpdate(id, newKoderData, {
    new: true,
  });
  return updatedKoder;
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  updateById,
};
