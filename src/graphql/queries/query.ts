import { gql } from "@apollo/client";

export const GET_FIRST_FOUR_POSTS_QUERY = gql`
  query {
    posts(orderBy: publishedAt_ASC, first: 4) {
      title
      description
      slug
      thumbnail
      postType
    }
  }
`;
