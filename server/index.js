import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import createPost from './routes/posts.js';

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose
    .connect(
        "mongodb+srv://huanwu:ABCD1234@webproject-qhq6u.mongodb.net/test?retryWrites=true&w=majority"
        , { useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log("Connected to database!"))
    .catch(() => console.log("error"));

app.use('/', postRoutes);
app.use('/', createPost);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});