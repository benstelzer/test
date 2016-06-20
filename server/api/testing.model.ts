import * as mongoose from 'mongoose';

export interface ITodoModel extends ITodo, mongoose.Document { }

let todoSchema = new mongoose.Schema({
  task: String,
  status: String,
});

export let Todo = mongoose.model('Todo', todoSchema);
