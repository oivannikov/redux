import React from 'react';

import './Lists.scss';

import { useSelector } from 'react-redux';

function Lists() {
  const posts = useSelector(state => state.app.posts);

  return (
    <ul className="list">
    {
      posts.map(post => (
        <li className="list__item">
          { post.title }
        </li>
      ))
    }
    </ul>
  );
}

export default Lists;
