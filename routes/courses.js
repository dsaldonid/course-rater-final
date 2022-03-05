const express = require("express")
const Courses = require("../models/courses")
const router = express.Router()
const con = require("../db")


router.get("/list", async (req, res, next) => {

  try {
    // const courses = await Courses.fetchAllCourses()
    con.query('SELECT * FROM courses', (err, rows) => {
      if (err) throw err;

      console.log('Data received from Db:');
      console.log(rows);
      return res.status(200).json( rows )
    });
  } catch (err) {
    console.log(err)
    next(err)
  }
})

module.exports = router
