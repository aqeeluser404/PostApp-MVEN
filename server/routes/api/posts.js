const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
    const postsCollection = await loadPostsCollection();
    res.send(await postsCollection.find({}).toArray());
});

// Add Post
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text, 
        createdAt: new Date()
    });
    res.status(201).send();
});

// Delete Post
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    res.status(200).send();
})

// Connect to DB
async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://admin:BE69420MongoDB6908082801@cluster0.czmy3sa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    );
    return client.db('postsappcollection').collection('posts');
}

module.exports = router;
