const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET all of the available colours to add to a palette
 */
router.get('/available', async (req, res) => {
  try {
    const queryText = `SELECT * FROM available_colours;`;

    const dbResponse = await pool.query(queryText);
    res.send(dbResponse.rows);
  } catch (err) {
    console.log('GET available colours Error:', err);
    res.sendStatus(500);
  }
});

/**
 * POST a new colour to the available colours
 */
router.post('/available', async (req, res) => {
  try {
    const queryText = `INSERT INTO available_colours ("name", "hexcode")
    VALUES ($1, $2);`;
    const queryData = [req.body.name, req.body.hexcode];

    await pool.query(queryText, queryData);
    res.sendStatus(200);
  } catch (err) {
    console.log('POST available colours Error:', err);
    res.sendStatus(500);
  }
});

/**
 * DELETE a colour from the available colours
 * Always keep at least one colour in the available_colours
 */
router.delete('/available/:id', async (req, res) => {
  try {
    const queryGetColours = `SELECT * FROM available_colours;`;
    const queryDeleteColour = `DELETE FROM available_colours
    WHERE id=$1;`;
    const queryDeleteData = [req.params.id];

    const dbResponse = await pool.query(queryGetColours);
    const availableColours = dbResponse.rows;

    // verify that they are not trying to delete the last available colour
    if (availableColours.length === 1) {
      throw TypeError('The last colour cannot be removed.');
    }

    await pool.query(queryDeleteColour, queryDeleteData);

    res.sendStatus(200);
  } catch (err) {
    console.log('POST available colours Error:', err);
    res.sendStatus(500);
  }
});

/**
 * UPDATE an existing available colour
 */
router.put('/available/:id', async (req, res) => {
  try {
    const queryText = `UPDATE available_colours SET "name"=$1, "hexcode"=$2
    WHERE id=$3;`;
    const queryData = [req.body.name, req.body.hexcode, req.params.id];

    await pool.query(queryText, queryData);
    res.sendStatus(200);
  } catch (err) {
    console.log('POST available colours Error:', err);
    res.sendStatus(500);
  }
});

module.exports = router;
