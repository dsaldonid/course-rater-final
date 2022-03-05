const db = require("../db");
const { stringify } = require('flatted');


class Courses {
  static async fetchAllCourses() {
    // let res = {}
    const func = async () => {
      await db.query('SELECT * FROM courses', (err, rows) => {
        if (err) throw err;

        console.log('Data received from Db:');
        console.log(rows);
        // return rows
      });
    }
    let damn = await func()
    console.log(damn)

    // db.getConnection(function (err, connection) {
    //   if (err) throw err; // not connected!

    //   // Use the connection
    //   connection.query('SELECT * FROM courses', async function (error, results, fields) {
    //     // When done with the connection, release it.
    //     connection.release();
    //     // console.log(results)
    //     // res = results;
    //     console.log(results)
    //     // console.log(res)
    //     // Handle error after the release.
    //     if (error) throw error;
    //     let res = await results
    //     return res
    //     // Don't use the connection here, it has been returned to the pool.
    //   }).then((data)=>{
    //     console.log(data)
    //     return data 
    //   })
    // });

    // db.query(
    //   `SELECT * FROM heroku_bcb3d8399fb92b9.courses`,
    // );

    // var courses = db.getTable('courses');

    // console.log(courses)

    // courses.select('course_id')
    //   .where('course_id like :1')
    //   .execute(function (row) {
    //     // do something with a row
    //     console.log(row)
    //   }).catch(err){
    //   // Handle error
    //   console.log(err)
    // });

    // let res = {};
    // const course = await db.query('SELECT * FROM courses', function (
    //   error,
    //   results,
    //   fields
    // ) {
    //   console.log('function message:')
    //   // console.log(Object.entries(results[0]))
    //   console.log(results)

    //   // return Object.entries(results[0])
    //   return results

    // });

    console.log("**************************************")
    console.log('we are about to leave')
    // console.log(Object.keys(courses));
    // // console.log(await courses)
    console.log("**************************************")
    // return res
  }
}
module.exports = Courses;
