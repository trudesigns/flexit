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
  },
};
