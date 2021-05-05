const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const Message = require('../models/message_model');

//get request for all messages
router.get('/', (req, res, next) => {
    Message.find()
        .select('-__v')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                messages: docs.map(doc => {
                    return {
                        message: doc,
                        request: {
                            type: "GET",
                            url: "http://localhost:3000/messages/" + doc._id
                        }
                    }
                })
            }
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

//post request to create new messages
router.post('/', (req, res, next) => {
    const message = new Message({
        _id: new mongoose.Types.ObjectId(),
        anonymousName: req.body.anonymousName,
        message: req.body.message
    });
    message
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Created message successfully',
                createdMessage: {
                  anonymousName: result.anonymousName,
                  message: result.message,
                  _id: result._id

                },
                request: {
                    type: "GET",
                    url: "http://localhost:3000/messages/" + result._id
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;
