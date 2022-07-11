import { useGraphQLQuery } from "../lib/useGraphQLQuery";
import { NexusGenRootTypes } from "../lib/api-types";
import { gql } from "urql";

const API_GET_NFT_MODEL = gql`
  query {
    nftModels {
      id
      blockchainId
      title
      description
      quantity
      status
      content {
        files {
          media {
            url
            contentType
          }
          thumbnail {
            url
            contentType
          }
        }
        poster {
          url
        }
      }
      rarity {
        ... on SimpleRarity {
          level
        }
      }
    }
  }
`;

export function useNFTModels() {
  const result = useGraphQLQuery<{
    nftModel?: NexusGenRootTypes["NFTModel"][];
  }>({
    query: API_GET_NFT_MODEL,
  });

  return {
    ...result,
  };
}
