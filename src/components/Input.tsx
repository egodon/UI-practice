import React from 'react';
import styled from 'styled-components';

const Input = ({ label }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput />
    </Container>
  );
};

const Container = styled.fieldset``;

const Label = styled.label``;

const StyledInput = styled.input``;

export default Input;
