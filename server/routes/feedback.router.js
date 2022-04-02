const express = require('express');
// const pool = require('pg');
const router = express.Router();
const pool = require('../modules/pool');

//GET Routes
// router.get('/', (req, res) => {
//     console.log('GET /api/feedback');
//     pool.query('SELECT * from "feedback";').then((result) => {
//         res.send(result.rows);
//     }).catch((error) => {
//     console.log('Error GET /api/feedback', error)
//     res.sendStatus(500);
//     });
    
// })

// Adds a new book to the list of awesome reads
// Request body must be a book object with a title and author.
router.post('/',  (req, res) => {
    let newFeedback = req.body;
    console.log(`Adding feedback`, newFeedback);
  
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding Feedback!`, error);
        res.sendStatus(500);
      });
  });

module.exports = router;

//PUT Routes


//POST Routes