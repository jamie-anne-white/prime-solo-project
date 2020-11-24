const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
// GET for all results
router.get('/', (req, res) => {
    console.log('helloo from Results get', req.user.id);
    const queryText = `SELECT * FROM "results"
    WHERE "results"."user_id" = $1 ;`;
    pool.query(queryText, [req.user.id]).then((result) => 
    res.send(result.rows)).catch((error) => {
      console.log('error in GET results', error);
      
    res.sendStatus(500)});
  
  });

  // //GET For single result
  // router.get('/:id', (req, res) => {
  //   console.log(req.params.id)
  //     const queryText = `SELECT "movies".title, "movies".poster, "movies".description, "genres".name FROM "movies"
  //     JOIN "movies_genres" ON "movies".id = "movies_genres".movies_id
  //     JOIN "genres" ON "movies_genres".genres_id = "genres".id
  //     WHERE "movies".id = $1;`;
  //     pool.query(queryText, [req.params.id])
  //         .then( (result) => {
  //             res.send(result.rows);
  //         })
  //         .catch( (error) => {
  //             console.log(`Error on details query ${error}`);
  //             res.sendStatus(500);
  //         });
  //   });
  


/**
 * POST route template
 */

// router.post('/', (req, res) => {
//       console.log('POST');

//   console.log('in Post results', req.body);
//   const queryText = `INSERT INTO "results" (date, workout, workout_rating, post_workout_rating, alcohol, food, sleep, mindfullness, overall_status, "user_id")
//   VALUES ($1, $2, $3, $4, 5$, $6, $7, $8, $9);`
//   pool.query(queryText, [req.body.date,req.body.workout,req.body.workout_rating, req.body.alcohol, req.body.food, req.body.sleep, req.body.mindfullness, req.body.overall_status, req.body.user_id ])
// });

/**
 * Delete an item if it's something the logged in user added
 */

router.delete('/:id', (req, res) => {
  console.log("In delete server-side req with", req.params);
  
  // DELETE route code here
  if (req.isAuthenticated()) {
    console.log("user is",req.user);
  }
  const queryText = `DELETE FROM "results" WHERE "results"."id" = $1 AND "results"."user_id" = $2`;
  pool.query(queryText, [req.params.id, req.user.id]).then((result) => 
  res.sendStatus(200)).catch((error) => {
  console.log('error in delete', error);
  
  res.sendStatus(500)});
});



module.exports = router;
