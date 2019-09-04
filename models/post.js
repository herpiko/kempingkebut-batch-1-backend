const mongoose =require ('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema ({
    title: {
        type: String,
        trim: true,
        required: true,
        minlength: 4,
        maxlength: 200,
    },
    content: {
        type: String,
        trim: true,
        required: true,
    },
    user_id: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model('Post', PostSchema);