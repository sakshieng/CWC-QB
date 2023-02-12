const Question = require('../models/Question');

const createQuestion = async(req,res)=>{
    const {email,topic,link,title,difficulty} = req.body;
    if(!email || !topic || !link || !title || !difficulty) {
        res.status(400).send(`Please provide all the details!`);
    }
    const question = await Question.create({email,topic,link,title,difficulty});

    res.status(201).json({question});
}

const getAllQuestion = async(req,res)=>{
    const questions = await Question.find({});

    res.status(200).json({questions});
}

module.exports = {createQuestion,getAllQuestion};