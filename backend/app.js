const express = require('express');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    // Handling CORS for browser request
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    next();
});

app.post('/api/post', (req, res, next) => {
    console.log(req.body);
    return res.status(201).json(req.body);
});


app.get('/api/posts', (req, res, next) => {
    const posts = [
        {
            id: 'aik112',
            title: 'A blog post',
            content: "Some content"
        },
        {
            id: 'askk1k1',
            title: 'Another blog post',
            content: "Some content"
        }
    ]

    return res.status(200).json({
        message: "Posts fetched successfully",
        posts: posts
    });
});

module.exports = app;