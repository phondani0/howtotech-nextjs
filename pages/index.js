import Head from 'next/head';

import { useEffect, useState } from 'react';

export default function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/posts', {
        method: 'GET',
      });
      const data = await res.json();
      console.log(data);
      setPosts(data.posts);
    })();

  }, []);

  return (

    <>
      <div className="container">
        <div className="header_img">
          <div className="header_content text-center">
            <p>latest trends, latest tech, All at one place</p>
            <span>Connecting ideas and people – how tech is changing our lives.</span>
          </div>
        </div>
        <div className="spacer"></div>
        <h2 className="py-3 section_header">Latest Posts</h2>
        <hr />
        <div className="my-3 my-sm-4">
          <div className="row">
            {
              posts.map((post, i) => {
                return (
                  <div key={i} className="col-md-6 col-lg-4 py-3 py-sm-0 p-sm-2" >
                    <div className="post">
                      <a href={`/posts/show/${post._id}`}>
                        <div className="card">
                          <img src={post.images.imageUrl} className="card-img"
                            alt="." />
                          <div className="post-category text-white">
                            <a href={`/posts?category=${post.category}`}>{post.category}</a>
                          </div>
                          <div className="card-body post-body">
                            <div className="text-muted">
                              {post.date}
                            </div>
                            <a href={`/posts/show/${post._id}`}>
                              <h3 className="card-title post-title">{post.title}</h3>
                            </a>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}
