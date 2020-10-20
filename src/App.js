import React, { useState } from 'react';
import './App.scss';
import Lists from './Lists/Lists';

import { getPosts } from './api/posts';

import { useDispatch, useSelector } from 'react-redux';
import { GET_DATE } from './redux/type';

function App() {
  const dispatch = useDispatch();
  const show = useSelector((state => state.app.show));
 
  function handleButton(e) {
    e.preventDefault();
    getPosts()
      .then(date => {
        dispatch({
          type: GET_DATE,
          posts: date,
          isShow: !show,
        })
      });
  }
  
  return (
    <div className="container">
      <button
        className="container__button"
        onClick={(e) => handleButton(e)}
      >
        Get users
      </button>
    { show && <Lists /> }
    </div>
  );
}

export default App;
