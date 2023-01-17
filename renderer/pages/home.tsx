import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Sidebar } from 'components';

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>ChatApp</title>
      </Head>

      <Sidebar />
    </React.Fragment>
  );
}

export default Home;
