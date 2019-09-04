const mongoose =require ('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema ({
    isi_komentar: {
        type: String,
        trim: true,
        required: true,
    },
    post_id: {
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