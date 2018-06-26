'use strict';

import Worker from '../src/models/workers.js';
import Company from '../src/models/company.js';

export default (dir) => {
  const falseMongo = {
    find: () => Promise.resolve([]),
    findById: () => Promise.resolve([]),
    save: data => Promise.resolve(data),
    findByIdAndDelete: () => Promise.resolve([]),
    findByIdAndUpdate: () => Promise.resolve([]),
  };

  if(typeof dir !== 'string') {return {};}
  return {
    'foo': {default: falseMongo},
    'worker': {default: Worker},
    'company': {default: Company},
    'baz': {default: falseMongo},
  };
};