

const Post = require('../../../db/model/Post');

import connectToDB from '../middlewares/db';


const handler = async (req, res) => {
  if (req.method === 'GET') {

    const posts = await Post.find({});
    console.log(posts);
    res.json({
      posts: posts
    });
  }
};

export default connectToDB(handler);