const service = require("../../services/restaurants.service");

module.exports = {
  list: async (req, res, next) => {
    try {
      const data = await service.list();
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },

  get: async (req, res, next) => {
    try {
      const data = await service.get(req.params.id);
      if (!data) return res.status(404).json({ success: false, message: "Not found" });
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },

  create: async (req, res, next) => {
    try {
      const { name } = req.body;
      const data = await service.create(name);
      res.status(201).json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },

  update: async (req, res, next) => {
    try {
      const { name } = req.body;
      const data = await service.update(req.params.id, name);
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },

  delete: async (req, res, next) => {
    try {
      await service.delete(req.params.id);
      res.json({ success: true, message: "Deleted" });
    } catch (err) {
      next(err);
    }
  }
};
