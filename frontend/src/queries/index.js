import { gql } from "apollo-boost";
//Exercise Queries
export const GET_ALL_EXERCISES = gql`
  query {
    getAllExercises {
      exerciseName
      likes
      createdDate
    }
  }
`;

// Exercise Mutations

// User Queries

// User Mutations
export const SIGNUP_USER = gql`
  mutation SIGNUP_USER(
    $username: String!
    $email: String!
    $password: String!
  ) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;
