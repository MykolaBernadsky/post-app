import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from 'styled-components';
import {useForm} from "react-hook-form";
import {addComment} from "../actions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const CommentBlock = styled.div`
  padding-top: 25px;
  display: flex;
  justify-content: center;
  
  form {
    display: flex;
    width: 300px;
  }
`;

const CommentsList = styled.ul`
  list-style: none;
`

const PostBlock = styled.div`
  box-shadow: 0px 0px 20px #00000010;
`

const  Post = () =>  {
  const activePost = useSelector(state => state.activePost);
  const dispatch = useDispatch();
  const {register, handleSubmit} = useForm();

  const submitForm = data => {

    dispatch(addComment(data));
  }


  return (
    <Container>
      <PostBlock>
        <h1>{activePost.title}</h1>
        <p>{activePost.body}</p>
      </PostBlock>
      Comments:
      <CommentsList>
        {activePost.comments && activePost.comments.map(item => (
          <li key={item.id}>{item.body}</li>
        ))}
      </CommentsList>
      <CommentBlock>
        <form onSubmit={handleSubmit(submitForm)}>
          <textarea {...register('comment')} />
          <button type={'submit'}>Submit</button>
        </form>
      </CommentBlock>
    </Container>
  );

}

export default Post;