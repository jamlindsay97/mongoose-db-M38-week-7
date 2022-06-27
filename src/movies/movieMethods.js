const mongoose = require("mongoose");
const Movie = require("./movieModels");

exports.addMovie = async (movieObj) => {
  try {
    await Movie.create(movieObj);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async (movieObj) => {
  try {
    const response = await Movie.deleteOne(movieObj);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async (movieObj) => {
  try {
    const response = await Movie.findOneAndUpdate(movieObj);
  } catch (error) {
    console.log(error);
  }
};

exports.listMovies = async () => {
  try {
    return await Movie.find({});
  } catch (error) {
    console.log(error);
  }
};
