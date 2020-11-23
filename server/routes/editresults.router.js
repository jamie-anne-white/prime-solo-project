const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//GET by ID 
router.get('/:id', (req, res) => {
  console.log('in ID edit router', req.params.id)
    const queryText = `SELECT 
    "results".workout, 
    "results".workout_rating, 
    "results".post_workout_rating, 
    "results".alcohol, 
    "results".food, 
    "results".sleep, 
    "results".sleep, 
    "results".mindfullness, 
    "results".overall_status, 
    "user_id", 
    "results".id
    FROM "results"
    WHERE "results"."user_id" = $1 AND "id" = $2`;
    pool.query(queryText, [req.user.id, req.params.id])
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`Error on details query ${error}`);
            res.sendStatus(500);
        });
  });




//send updated results to save
router.put('/', (req, res) => {
    console.log('in EDIT/put', req.body)

    // if (req.isAuthenticated()) {
    //   console.log("user is",req.user);
    // }


    const queryText = `UPDATE "results"
    SET 
    "workout" = $1, 
    "workout_rating" = $2, 
    "post_workout_rating" = $3, 
    "alcohol" = $4, 
    "food" = $5, 
    "sleep" = $6, 
    "mindfullness" = $7, 
    "overall_status" = $8
    WHERE "user_id" = $9 AND "id" = $10;`;
    pool.query(queryText, 
        [req.body.workout,
            req.body.workout_rating, 
            req.body.post_workout_rating, 
            req.body.alcohol, 
            req.body.food, 
            req.body.sleep, 
            req.body.mindfullness, 
            req.body.overall_status,
            req.body.user_id,
            req.body.id
        ])
    .then( (result) => {
      res.sendStatus(200)
    }) .catch( (error) => {
      console.log('error in put', error);
      res.sendStatus(500);
    })
  })

  module.exports = router;
