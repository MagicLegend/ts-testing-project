import { createServer } from 'http';
import app from './app';
import {sequelize} from './seq';
import A from './models/A';
import T from './models/T';
import Movie from './models/Movie';
import Actor from './models/Actor';
import MovieActor from './models/MovieActor';
import MovieGenre from './models/MovieGenre';
import Genre from './models/Genre';

const port = process.env.PORT || 3001;

(async () => {
    sequelize.addModels([A, T, Movie, Actor, Genre, MovieActor, MovieGenre]);
    await sequelize.sync({ force: true });

    createServer(app)
        .listen(
            port,
            () => console.log(`Server running on port ${port}`),
        );
})();
