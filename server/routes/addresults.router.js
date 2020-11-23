const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

 router.post('/', (req, res) => {
   console.log('in Post results', req.body);
  //  let date = req.body.date,


   const queryText = `INSERT INTO "results" ("workout", "workout_rating", "post_workout_rating", "alcohol", "food", "sleep", "mindfullness", "overall_status", "user_id")
   VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`
  //  JOIN "user" ON "user"."id" = "results"."user_id"; tried having this in SQL

   pool.query(queryText, [req.body.workout,req.body.workout_rating, req.body.post_workout_rating, req.body.alcohol, req.body.food, req.body.sleep, req.body.mindfullness, req.body.overall_status, req.user_id ])
   .then(result => {
     res.sendStatus(201);
   }).catch(error => {
     console.log('error in POST', error);
     res.sendStatus(500)
     
   })
   


 });




module.exports = router;
