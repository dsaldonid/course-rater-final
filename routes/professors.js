const express = require("express")
const Professors = require("../models/professors")
const router = express.Router()

// router.get("/list", async (req, res, next) => {
//   try {
//     // console.log(req.body.prof_id)
//     // const professors = await Professors.fetchAllProfessors()
//     return res.status(200).json({ "works":true })
//   } catch (err) {
//     console.log(err)
//     next(err)
//   }
// })

const con = require("../db")


router.get("/:id", async (req, res, next) => {
  console.log('plzz')
  try {
    // const courses = await Courses.fetchAllCourses()
    con.query(`SELECT first_name,last_name FROM professors where professor_id=${req.params.id}`, (err, rows) => {
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
