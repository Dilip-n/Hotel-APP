const mongoose =  require('mongoose')

const taskSchema = new mongoose.Schema({
    description:{
    type: String,
    required: true,
    trim: true,
   },
   completed:{
       type: Boolean,
       default: false
   },

   item_name:{
    type: String,
    required: true,
    trim: true,
    },
    item_price:{
        type:Number,
        required: true,
    },
    item_type:{
        type:String,
        required: true
    },
    item_kot:{
        type: Boolean,
        default: true
    },

   owner: {
       type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref: 'User'
   }   },{
       timestamps: true
   })
const Task = mongoose.model('Task', taskSchema)

module.exports = Task