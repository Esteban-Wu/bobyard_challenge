import mongoose from 'mongoose';
import { CommentSchema } from '../models/bobyardModel'

const Comment = mongoose.model('Comments', CommentSchema);
export const addNewComment = (req, res) => {
    let newComment = new Comment(req.body);
    newComment.save()
    .then(comment => {
        res.json(comment)
    })
    .catch(err => {
        res.send(err)
    })
}

export const getComments = (req, res) => {
    Comment.find()
    .then(comment => {
        res.json(comment)
    })
    .catch(err => {
        res.send(err)
    })
}

export const updateComment = (req, res) => {
    Comment.findOneAndUpdate({ _id: req.params.commentID }, req.body, { new: true, useFindAndModify: false })
    .then(comment => {
        res.json(comment)
    })
    .catch(err => {
        res.send(err)
    })
}

export const deleteComment = (req, res) => {
    Comment.deleteOne({ _id: req.params.commentID })
    .then(() => {
        res.json({ message: "Successfully deleted comment." })
    })
    .catch(err => {
        res.send(err)
    })
}