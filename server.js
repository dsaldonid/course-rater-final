const express = require("express")
const cors = require("cors")
const { NotFoundError } = require("./utils/errors")
const coursesRoutes = require("./routes/courses")
const professorsRoutes = require("./routes/professors")
// const mysql = require("mysql")
const app = express()

app.use(cors())
// parse incoming requests with JSON payloads
app.use(express.json())

app.use("/courses", coursesRoutes)
app.use("/professors", professorsRoutes)

app.get('/', async (req, res, next) => {
  // just a sanity check that app works
  res.status(200).json({ping: "pong"})
})

app.listen(process.env.PORT || 8080, () => {
  console.log(`🚀 Server running on http://localhost:/8080`)
})