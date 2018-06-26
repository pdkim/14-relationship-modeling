'use strict';

import mongoose from 'mongoose';

const companySchema = mongoose.Schema({
  name: {type: String, required: true},
  employee: {type: mongoose.Schema.Types.ObjectId, ref: 'Worker'},
});

export default mongoose.model('company', companySchema);
