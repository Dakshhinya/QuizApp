const express = require('express')

const createNewQuestion = require('../controllers/questionController')
// const displayQuestions = require('../controllers/questionController')

const router = express.Router()

router.post('/create', createNewQuestion);
// router.post('/questionList',displayQuestions)

module.exports=router;


