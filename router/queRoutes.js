const express = require(`express`);
const router = express.Router();
const {createQuestion,getAllQuestion} = require('../controller/queController');


router.route('/create').post(createQuestion);
router.route('/').get(getAllQuestion);

module.exports = router;