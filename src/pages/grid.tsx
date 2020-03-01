import React from 'react';
import styled from 'styled-components';

const Grid = () => {
  return (
    <Container>
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
`;

const Block = styled.div`
  background-color: ;
`;

export default Grid;
