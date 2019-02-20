exports.typeDefs = `

  type Exercise {
     _id: ID,
    exerciseName: String!
    bodyPartCategory: String!
        typeCategory: String!
    description: String!
    createdDate: String!
    likes: Int
    username: String
  }

  type User {
     _id: ID,
    username: String!
    password: String!
    email: String!
    joinDate: String
    favorites: [Exercise]
  }

  type Query {
    getAllExercises: [Exercise]
  }

  type Token {
    token: String!
  }

  type Mutation {
    addExercise(exerciseName: String!, bodyPartCategory: String!, typeCategory: String!, description: String!, username: String): Exercise
 signinUser(username: String!, password: String!): Token
     signupUser(username: String!, email: String!, password: String!): Token
  }`;
