import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Next() {
  return (
    <React.Fragment>
      <Head>
        <title>Next - Nextron (with-typescript-emotion)</title>
      </Head>
      <div>
        <Link href='/home'>
          <a>Go to home page</a>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Next;
