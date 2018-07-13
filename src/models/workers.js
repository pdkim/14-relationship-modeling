'use strict';

import mongoose from 'mongoose';

const workerSchema = mongoose.Schema({
  firstName: {type:String, required: true},
  lastName: {type:String, required: true},
  hourlyWage: {type:Number, min: 15, max: 100},
});

export default mongoose.model('workers', workerSchema);
