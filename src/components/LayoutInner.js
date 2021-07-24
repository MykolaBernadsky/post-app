import React from 'react';
import Header from "./Header";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  margin: 0 50px 0 50px
`

const LayoutInner = ({children}) => {
    return (
      <Container>
        <Header />
        <Content>
          {children}
        </Content>
      </Container>
    );
}

export default LayoutInner;