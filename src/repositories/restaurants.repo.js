const db = require("../config/db");
const { v4: uuidv4 } = require("uuid");

create: async (name) => {
  const id = uuidv4();

  await db.query(
    "INSERT INTO restaurants (id, name) VALUES (?, ?)",
    [id, name]
  );

  return { id, name };
},

  module.exports = {
    findAll: async () => {
      return db.query("SELECT * FROM restaurants");
    },

    findById: async (id) => {
      const rows = await db.query("SELECT * FROM restaurants WHERE id = ?", [id]);
      return rows[0];
    },

    create: async (name) => {
      const id = uuidv4();

      const [result] = await db.query(
        "INSERT INTO restaurants (id, name) VALUES (?, ?)",
        [id, name]
      );

      console.log(`result`, result);
      return { id, name };
    },

    update: async (id, name) => {
      await db.query("UPDATE restaurants SET name = ? WHERE id = ?", [name, id]);
      return { id, name };
    },

    delete: async (id) => {
      await db.query("DELETE FROM restaurants WHERE id = ?", [id]);
    }
  };
