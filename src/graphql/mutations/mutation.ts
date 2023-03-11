import { gql } from "@apollo/client";

export const SUBSCRIBE_MUTATION = gql`
  mutation CreateSubscribeMutation($email: String!) {
    createSubscribe(data: { email: $email }) {
      id
    }
  }
`;

export const FORM_MUTATION = gql`
  mutation CreateFormMutation(
    $name: String!
    $email: String!
    $cellPhone: String!
    $message: String!
  ) {
    createForm(
      data: {
        name: $name
        email: $email
        cellPhone: $cellPhone
        message: $message
      }
    ) {
      id
    }
  }
`;
