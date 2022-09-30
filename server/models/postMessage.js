import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    gender: String,
    apply_location: String,
    current_location: String,
    selectedFile: String
});

export default mongoose.model('PostMessage', postSchema);