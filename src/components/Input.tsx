import React from 'react';
import styled from 'styled-components';

type Props = {
  label: string;
  type: string;
};

const Input = ({ label, type }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput type={type} />
      {type == 'password' && (
        <ForgotPassword>
          <span>Forgot your password?</span>
          <a href="#">Reset it now</a>
        </ForgotPassword>
      )}
    </Container>
  );
};

const Container = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: 0;
  width: 100%;
  padding: 0;
  margin-bottom: 2.6rem;
`;

const Label = styled.label`
  font-size: var(--fs-medium);
  margin-bottom: 0.4rem;
  color: var(--grey-800);
`;

const StyledInput = styled.input`
  padding: 0.8rem 1.6rem;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #d9d9d9;
  background-color: var(--grey-100);
`;

const ForgotPassword = styled.div`
  font-size: var(--fs-small);
  margin-top: 0.6rem;

  span {
    color: var(--grey-600);
    margin-right: 0.4rem;
  }

  a {
    color: var(--color-primary);
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default Input;
