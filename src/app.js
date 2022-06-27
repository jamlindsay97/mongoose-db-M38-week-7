require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { addMovie, deleteMovie, updateMovie, listMovies } = require("./movies/movieMethods");

const app = async (yargsObj) => {
  try {
    if (yargsObj.add) {
      await addMovie({
        title: yargsObj.title,
        actor: yargsObj.actor,
      });
      console.log(await listMovies());

    } else if (yargsObj.list) {
      console.log(await listMovies());

    } else if (yargsObj.delete) {
      await deleteMovie();
      console.log(await listMovies());

    } else if (yargsObj.update) {
      await updateMovie({
        title: yargsObj.newTitle,
        actor: yargsObj.newActor,
        year: yargsObj.newYear,
      });
      console.log("Your movie has been updated");

    } else {
      console.log("Unkown command");
    }
    await mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);
