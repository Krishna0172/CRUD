const express = require('express');
const router = express.Router();
const {
  getallQueries,
  insertQuery,
  getByIdQuery,
  updateQuery,
  deletequery,
} = require('../controllers/controller');

router.route('/').get(getallQueries).post(insertQuery);
router.route('/:id').get(getByIdQuery).put(updateQuery).delete(deletequery);

module.exports = router;
