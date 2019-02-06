const jwt = require('jsonwebtoken');

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn });
};

exports.resolvers = {
  Query: {
    getAllExercises: async (root, args, { Exercise }) => {
      const allExercise = await Exercise.find();
      return allExercise;
    },
  },

  Mutation: {
    addExercise: async (
      root,
      { exerciseName, bodyPartCategory, typeCategory, description, username },
      { Exercise }
    ) => {
      const newExercise = await new Exercise({
        exerciseName,
        bodyPartCategory,
        typeCategory,
        description,
        username,
      }).save();
      return newExercise;
    },
    signupUser: async (root, { username, email, password }, { User }) => {
      // check if user already exists
      const user = await User.findOne({ username });
      if (user) {
        throw new Error('User already exists');
      }
      // user doesn't exist, create one
      const newUser = await new User({
        username,
        email,
        password,
      }).save();
      return { token: createToken(newUser, process.env.SECRET, '1hr') };
    },
  },
};
