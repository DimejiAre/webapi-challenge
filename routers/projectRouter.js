const express = require('express');
const db = require('../data/helpers/projectModel');

const router = express.Router();

router.get('/', (req,res) => {
    db.get()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json({
                error: `Project information could not be retrieved ${err}`
            })
        })
})

router.get('/:id', [validateProjectID], (req,res) => {
    res.status(200).json(req.project)
})

function validateProjectID (req,res,next){
    const id = req.params.id;

    db.get(id)
        .then(project => {
            if(project){
                req.project = project
                next()
            }
            else {
                res.status(400).json({
                    message: 'invalid post id'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: `Project information could not be retrieved ${err}`
            })
        })
}

module.exports = router