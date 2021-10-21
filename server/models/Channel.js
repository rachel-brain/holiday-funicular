const mongoose = require('mongoose');

const { Schema } = mongoose;

const channelSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Channel = mongoose.model('Channel', channelSchema);

module.exports = Channel;