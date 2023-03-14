import { gql } from "@apollo/client";

export const GET_FIRST_FOUR_POSTS_QUERY = gql`
  query {
    posts(orderBy: publishedAt_DESC, first: 4) {
      title
      description
      slug
      thumbnail
      postType
    }
  }
`;

export const GET_POST_BY_SLUG_QUERY = gql`
  query PostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      author
      content
      postType
      createdAt
      updatedAt
      tags
      thumbnail
      thumbnailDescription
      description
      banner
      bannerAlt
    }
  }
`;

export const GET_FIRST_FOUR_POSTS_BY_TYPE_QUERY = gql`
  query GetPostsByType($postType: PostType!) {
    posts(where: { postType: $postType }, orderBy: createdAt_DESC, first: 4) {
      title
      description
      slug
      thumbnail
      postType
    }
  }
`;
