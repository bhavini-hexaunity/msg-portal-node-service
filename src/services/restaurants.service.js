const repo = require("../repositories/restaurants.repo");

module.exports = {
  list: () => repo.findAll(),

  get: (id) => repo.findById(id),

  create: async (name) => {
    const created = await repo.create(name);
    return created;
  },

  update: async (id, name) => {
    const updated = await repo.update(id, name);
    return updated;
  },

  delete: async (id) => {
    await repo.delete(id);
  }
};
