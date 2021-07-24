import React from 'react';
import styled from 'styled-components';
import img from './img/img.png';

const Container = styled.div`
  width: 100%;
  padding: 10px;
  float: right;
  display: flex;
  
  img {
    width: 40%;
    height: 50%;
    float: left;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .clearfix::after {
    content: '';
    display: block;
    clear: both;
  }
  
  .post-preview {
    margin-left: 20px;
    
    .preview-text {
      line-height: 1.5em;
      font-size: 1.03em;
      color: #444;
    }
    
    .read-more {
      bottom: 10px;
      right: 10px;
      border: 1px solid #000000;
      background: transparent;
      border-radius: 0px;
      color: #000000!important;
      text-decoration: none;
    }
    
    .read-more:hover {
      background: #000000;
      color: #ffffff !important;
      transition: .25s;
    }
  }
`;



const PostComponent = ({ post, clickCallback }) =>  {
  return (
      <Container>
        <img  src={img} alt="text" />
          <div className="post-preview">
            <h2>{post.title}</h2>
            <p className="preview-text">
              {post.body}
            </p>
            <button onClick={() => clickCallback(post.id)} className="read-more">Read More</button>
          </div>
      </Container>
  );
}

export default PostComponent;