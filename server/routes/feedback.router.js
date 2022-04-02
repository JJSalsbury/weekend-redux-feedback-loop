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

module.exports = router;

//PUT Routes


//POST Routes