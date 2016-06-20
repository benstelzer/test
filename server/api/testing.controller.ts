import * as express from 'express';
import {Todo, ITodoModel} from './testing.model';

export function getOne(req: express.Request, res: express.Response, next) {
Todo.findOne({_id: req.params.id}).exec((err,todo) => {
  if(err) return next(err);
  if(!todo) return res.sendStatus(404);
  res.json(todo);

})

}


export function getAll (req: express.Request, res: express.Response, next) {
let query = {};
Todo.find(query).exec((err, todo) => {
  if(err) return next(err);
  res.json(todo)
})

};

export function remove (req: express.Request, res: express.Response, next) {
  Todo.findOneAndRemove({_id: req.params.id}, (err, t) => {
    if(err) return next(err);
    if(!t) return next({status: 404, message: "Could not find the requested todo."});
    res.json({success: true});
  })
}

export function create (req: express.Request, res: express.Response, next) {
let t = new Todo(req.body);
t.save((err, t) => {
  if(err) return next(err);
  res.json(t);
});
}
