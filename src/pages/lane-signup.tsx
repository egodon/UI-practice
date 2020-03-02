import React from 'react';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import Head from 'next/head';
import LaneLogo from '../components/LaneLogo';

const LaneSignup = () => {
  return (
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
          <H2>Lane turns any workplace into a place that works</H2>
        </LeftPanel>
        <RightPanel>
          <H3>Please Login</H3>
        </RightPanel>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: 'Fakt Pro';
`;

const lanePrimaryColor = '#0ad26e';

// @todo: improve the background image gradient
const LeftPanel = styled.div`
  background-image: linear-gradient(
      to bottom right,
      ${transparentize(0.1, lanePrimaryColor)},
      ${transparentize(0.85, lanePrimaryColor)}
    ),
    url(/images/buildings.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;

  display: flex;
  flex-direction: column;
  padding: 30% 10rem;
  color: #fff;
`;

const Logo = styled.h1`
  max-width: 20rem;
  margin-bottom: 1.8rem;
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  max-width: 100%;
`;

const H2 = styled.h2`
  font-size: 2.6rem;
  max-width: 34rem;
  line-height: 1.2;
`;

const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30% 10rem;
`;

const H3 = styled.h3`
  font-size: 2.4rem;
  color: var(--grey-800);
`;

export default LaneSignup;
