import { gql } from "apollo-boost";
//Exercise Queries
export const GET_ALL_EXERCISES_QUERY = gql`
  query GET_ALL_EXERCISES_QUERY {
    getAllExercises {
      exerciseName
      likes
      createdDate
    }
  }
`;

// Exercise Mutations

// User Queries
export const GET_CURRENT_USER_QUERY = gql`
  query GET_CURRENT_USER_QUERY {
    getCurrentUser {
      username
      email
      joinDate
    }
  }
`;

// User Mutations

export const SIGNIN_USER_MUTATION = gql`
  mutation SIGNIN_USER_MUTATION($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;
export const SIGNUP_USER_MUTATION = gql`
  mutation SIGNUP_USER_MUTATION(
    $username: String!
    $email: String!
    $password: String!
  ) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;
