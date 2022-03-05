const db = require("../db");

class Professors {
  static async fetchAllProfessors() {
    const result = await db.query(
    `SELECT * FROM heroku_bcb3d8399fb92b9.professors`,
    );
    // console.log(result)
    return result.rows;
  }
}
module.exports = Professors;
