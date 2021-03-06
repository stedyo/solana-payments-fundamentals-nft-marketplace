import React from "react";
import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      
      <title>A web3 page about corgis</title>
      <meta name="title" content="Solana Pay Store" />
      <meta name="description" content="Buy items on my store using Solana Pay!" />
    </Head>
  );
}
