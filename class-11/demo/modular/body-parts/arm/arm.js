'use strict';


const events = require('../../event-pool');
const coverWithArm = require('./arm-handler');

events.on('light', coverWithArm);

