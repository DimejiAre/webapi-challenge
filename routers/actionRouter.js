const express = require('express');
const db = require('../data/helpers/actionModel');

const router = express.Router();

router.get('/', (req,res) => {
    db.get()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({
                error: `Project information could not be retrieved ${err}`
            })
        })
})

router.get('/:id', [validateActionId], (req,res) => {
    res.status(200).json(req.action)
})


// Middleware

function validateActionId (req,res,next){
    const id = req.params.id;

    db.get(id)
        .then(action => {
            if(action){
                req.action = action
                next()
            }
            else {
                res.status(400).json({
                    message: 'invalid action id'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: `Action information could not be retrieved ${err}`
            })
        })
}


module.exports = router;