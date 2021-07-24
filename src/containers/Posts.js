import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPostById, getPosts} from "../actions";
import { useHistory } from 'react-router';
import PostComponent from "../components/PostComponent";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 50px 0 50px
`;


const  Posts = () =>  {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const history = useHistory();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const goToPost = postId => {
    dispatch(getPostById(postId));

    history.push(`/posts/${postId}`);
  }


  return (
    <Container>
      {posts.map(item => (
        <PostComponent key={item.id} post={item} clickCallback={goToPost}/>
      ))}
    </Container>
  );

}

export default Posts;