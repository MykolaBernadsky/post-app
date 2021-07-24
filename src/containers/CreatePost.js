import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {createPost} from "../actions";
import {useHistory} from "react-router";
import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 0px 20px #00000010;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 20px;

  .form-group {
    width: 100%;
    margin-top: 20px;
    font-size: 20px;
  }

  input, textarea {
    width: 100%;
    padding: 5px;
    font-size: 18px;
    border: 1px solid rgba(128, 128, 128, 0.199);
    margin-top: 5px;
  }

  textarea {
    resize: vertical;
  }
`;

const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  outline: none;
  padding: 20px;
  font-size: 24px;
  border-radius: 8px;
  color: rgb(27, 166, 247);
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.3s ease background-color;

  &:hover {
    background-color: rgb(214, 226, 236);
  }
`;


const CreatePost = () =>  {
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();
  const history = useHistory();

  const submitForm = data => {
    dispatch(createPost(data));
    history.push('/');
  }

  return (
    <Wrapper>
      <Container>
        <form onSubmit={handleSubmit(submitForm)}>

          <div className="form-group">
            <label> Title</label>
            <input type={'text'} {...register('title')}/>
          </div>


          <div className="form-group">
            <label>Post body</label>
            <textarea {...register('body')} cols="30" rows="10" />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Container>
    </Wrapper>
  );
}

export default CreatePost;