import * as React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import fs from 'fs';

type Props = {
  pages: string[];
};

const IndexPage: NextPage<Props> = ({ pages }) => {
  return (
    <Container>
      <h1>CSS Practice</h1>

      {pages.map(page => (
        <Link href={`/${page}`} key={page}>
          <a>{page}</a>
        </Link>
      ))}
    </Container>
  );
};

IndexPage.getInitialProps = async ctx => {
  let pages = [];

  if (ctx.req) {
    try {
      const files = await fs.promises.readdir('src/pages');
      pages = files.filter(unwantedPages).map(removeExtension);
    } catch (error) {
      console.error(error);
    }
  }

  return { pages };
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  font-size: 20px;
`;

const unwantedPages = page => {
  const filesToDiscard = ['_app.tsx', 'index.tsx', '_document.tsx', 'api'];

  return !filesToDiscard.includes(page);
};

const removeExtension = page => page.replace('.tsx', '');

export default IndexPage;
