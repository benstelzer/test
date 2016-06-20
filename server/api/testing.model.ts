import * as mongoose from 'mongoose';

export interface ITestingModel extends ITesting, mongoose.Document { }

let testingSchema = new mongoose.Schema({
  task: String,
  status: String,
});

export let Testing = mongoose.model('Testing', testingSchema);
