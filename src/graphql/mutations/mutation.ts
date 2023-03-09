import { gql } from "@apollo/client";

export const SUBSCRIBE_MUTATION = gql`
  mutation CreateSubscribeMutation($email: String!) {
    createSubscribe(data: { email: $email }) {
      id
    }
  }
`;
