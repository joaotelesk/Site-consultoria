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

export const GET_FIRST_FOUR_POSTS_BY_CREATE_QUERY = gql`
  query {
    posts(orderBy: createdAt_DESC, first: 4) {
      title
      description
      slug
      thumbnail
      thumbnailDescription
      postType
      createdAt
    }
  }
`;
export const GET_ALL_POSTS_BY_TYPE_QUERY = gql`
  query GetPostsByType($postType: PostType!) {
    posts(where: { postType: $postType }, orderBy: createdAt_DESC) {
      title
      description
      slug
      thumbnail
      thumbnailDescription
      postType
      createdAt
    }
  }
`;

export const GET_ALL_POSTS_BY_TYPE_ORDER_CREATED_ASC_QUERY = gql`
  query GetPostsByType($postType: PostType!) {
    posts(where: { postType: $postType }, orderBy: createdAt_ASC) {
      title
      description
      slug
      thumbnail
      thumbnailDescription
      postType
      createdAt
    }
  }
`;

export const GET_ALL_POSTS_BY_TYPE_ORDER_UPDATED_ASC_QUERY = gql`
  query GetPostsByType($postType: PostType!) {
    posts(where: { postType: $postType }, orderBy: updatedAt_ASC) {
      title
      description
      slug
      thumbnail
      thumbnailDescription
      postType
      createdAt
      updatedAt
    }
  }
`;

export const GET_ALL_POSTS_BY_TYPE_ORDER_UPDATED_DESC_QUERY = gql`
  query GetPostsByType($postType: PostType!) {
    posts(where: { postType: $postType }, orderBy: updatedAt_DESC) {
      title
      description
      slug
      thumbnail
      thumbnailDescription
      postType
      createdAt
    }
  }
`;
export const GET_FIRST_FIVE_POSTS_BY_TITLE_QUERY = gql`
  query ($title: String!) {
    posts(where: { title_contains: $title }, first: 5) {
      title
      postType
      slug
    }
  }
`;
