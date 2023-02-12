const express = require('express');

const app = express();


app.use('/api/posts', (req, res, next) => {
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

    return res.json({
        message: "Posts fetched successfully",
        posts: posts
    });
});

module.exports = app;