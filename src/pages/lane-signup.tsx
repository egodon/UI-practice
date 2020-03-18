import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import Head from 'next/head';
import LaneLogo from 'components/LaneLogo';
import Input from 'components/Input';
import Button from 'components/Button';

const LaneSignup = () => (
  <>
    <Head>
      <title>Lane Login</title>
    </Head>
    <Container>
      <LeftPanel>
        <Logo>
          <LaneLogo />
          <LogoImg src="/images/lane-logo.png" />
        </Logo>
        <H2>Welcome back</H2>
        <H3>
          Lorem ipsum sit, amet consectetur adipisicing elit. Consequatur, quae.
        </H3>
      </LeftPanel>
      <RightPanel>
        <H3>Sign in to Lane</H3>
        <Form>
          <Input label="Email" type="text" />
          <Input label="Password" type="password" />
          <Button color={primaryColor} className="Button_SignIn">
            Sign in
          </Button>
        </Form>
        <NoAccount>
          <span>Don’t have an account?</span>
          <a>Sign Up</a>
        </NoAccount>
      </RightPanel>
    </Container>
  </>
);

const primaryColor = '#68D391';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: 'Fakt Pro';
  overflow: hidden;

  --color-primary: ${primaryColor};
`;

const H3 = styled.h3`
  margin-bottom: 4.2rem;
  max-width: 36rem;
  font-size: 2.4rem;
  color: var(--grey-800);
  letter-spacing: 1px;
  line-height: 1.2;
`;

const LeftPanel = styled.div`
  background-image: linear-gradient(
      to bottom right,
      ${transparentize(0.2, '#29c464')},
      ${transparentize(0.6, primaryColor)}
    ),
    url(/images/building-low-angle-3.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30% 10rem;
  color: #fff;

  ${H3} {
    color: white;
    text-align: center;
  }
`;

const Logo = styled.h1`
  max-width: 15rem;
  margin-bottom: 1.8rem;
  display: flex;
  align-items: center;
  position: absolute;
  left: 4rem;
  top: 4rem;
`;

const LogoImg = styled.img`
  max-width: 100%;
`;

const H2 = styled.h2`
  font-size: var(--fs-xlarge);
  max-width: 36rem;
  margin-bottom: 2rem;
  letter-spacing: 1px;
  line-height: 1.2;
`;

const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30% 10rem;
`;

const Form = styled.form`
  max-width: 32rem;
  width: 100%;

  .Button_SignIn {
    margin: 1.6rem 0 2.4rem 0;
  }
`;

const NoAccount = styled.div`
  font-size: var(--fs-small);

  span {
    margin-right: 0.4rem;
    color: var(--grey-600);
  }

  a {
    color: var(--color-primary);
  }
`;

export default LaneSignup;
