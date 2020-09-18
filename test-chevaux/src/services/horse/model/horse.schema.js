import { Schema } from 'mongoose'


export default {
  country: { 
    type: String, 
    required: true,
  },

  race: { 
    type: String, 
    required: true,
  },

  vote: {
    type: Number,
    default: 0
  }
}
