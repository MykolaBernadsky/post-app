import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledHeader = styled.div`
  background: #ffffff;
  height: 66px;
  display: flex;
  justify-content: space-between;
  
  .logo {
    float: left;
    height: inherit;
    margin-left: 2em;
  };
  
  .logo-text {
    margin: 9px;
    font-family: 'Candal', serif;
  }

  a {
    text-decoration: none;
    color: #717274
  }

  a:hover {
    color: #000000
  }
  
  .btn {
    margin-top: 15px;
    margin-right: 120px;
  }
`


const Header = () => {
    return (
      <StyledHeader>
        <div className="logo">
          <h1 className="logo-text">
            <Link to={'/'}>React-Redux Blog</Link>
          </h1>
        </div>
        <Link className={'btn'} to={'/new-post'}>Create new post</Link>
      </StyledHeader>
    );
}

export default Header;