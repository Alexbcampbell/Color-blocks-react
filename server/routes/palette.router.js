const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET all of the available colours to add to a palette
 */
router.get('/', async (req, res) => {
  try {
    const queryText = `SELECT *, my_palette.id FROM my_palette
    JOIN available_colours ON my_palette.colour_id = available_colours.id;`;

    const dbResponse = await pool.query(queryText);
    res.send(dbResponse.rows);
  } catch (err) {
    console.log('GET my_palette Error:', err);
    res.sendStatus(500);
  }
});

/**
 * POST a new colour to the available colours
 */
router.post('/', async (req, res) => {
  try {
    const queryText = `INSERT INTO my_palette ("colour_id")
    VALUES ($1);`;
    const queryData = [req.body.colour_id];

    await pool.query(queryText, queryData);
    res.sendStatus(200);
  } catch (err) {
    console.log('POST my_palette Error:', err);
    res.sendStatus(500);
  }
});

/**
 * DELETE a colour from the available colours
 * Always keep at least one colour in the available_colours
 */
router.delete('/:id', async (req, res) => {
  try {
    const queryDeleteColour = `DELETE FROM my_palette WHERE id=$1;`;
    const queryDeleteData = [req.params.id];

    await pool.query(queryDeleteColour, queryDeleteData);

    res.sendStatus(200);
  } catch (err) {
    console.log('POST my_palette Error:', err);
    res.sendStatus(500);
  }
});

module.exports = router;
