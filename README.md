## Wen NFT!

Your NFT community toolset!

[3m video demo!](https://raw.githubusercontent.com/gbibeaul/supabase-wen/main/demo.mov)

## Description

Wen NFT is API to help you manage your NFT communities. It let's you ensure somebody owns an NFT before they are allowed to join exclusive communities you are building.

The following repository is a proof of concept built for the supabase launch week IV hackathon.

## Features:

- automatic indexing of NFT ownership
- validation of NFT ownership
- linking socials data after NFT ownership is allowed to let users access

## Architecture:

There are 4 micro services in this project:

- [ERC721A Smart Contract](./packages/w3fs-nft/). Deployed to Rinkeby testnet, typescripts typings are dynamically generated from the solidity code
- [3 Edge Functions](./apps/api/) that smoothen the operations and ensure no other micro-service is blocking when running
- [Indexer](./apps/indexer/) service that automatically listens to any events on the smart contract. Deployed to the edge with [Fly.io](https://fly.io/). It works in tandem with the edge functions for smooth scaling.
- [Dapp](./apps/mint/) frontend that consumes 2 edge functions. In Next.js SSR it validates ownership of the NFT and it also performs non blocking edge function calls to save extra info to manage the community!

## Where this can go next:

- edge function + the indexer pattern are relly nice. It would be even better to integrate the indexer workflow as part of supabase realtime.
