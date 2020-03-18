import { Router } from 'express';
import Actor from '../models/Actor';
import Movie from '../models/Movie';

const actors = Router();
export { actors as default };

actors.post('/', async (req, res, next) => {
    try {
        const actor = await Actor.create(req.body);
        res.status(201).json(actor);
    } catch (e) {
        next(e);
    }
});

actors.post('/:id/movies/:movieId', async (req, res, next) => {
    try {
    // await MovieActor.create({
    //   actorId: req.params['id'], movieId: req.params['movieId']
    // });

        const actor = await Actor.findByPk(req.params.id);
        // const movie = await Movie.findByPk(req.params['movieId']);

        await Movie.findByPk(req.params.movieId).then(async (movie) => {
            if (movie) {
                if (actor) {
                    await actor.$add('movie', movie);
                    const actor2 = await Actor.findByPk(req.params.id, { include: [Movie] });
                    const movieOfActor2 = await actor2?.$get('movies');
                    console.log(movieOfActor2);
                    // await Actor.update(actor, {where: {id: req.params['id']}});
                    res.sendStatus(418);
                }
            } else {
                res.sendStatus(404);
            }
        }).catch(() => {
            console.log('Oops');
            res.sendStatus(500);
        });
    } catch (e) {
        next(e);
    }
});

actors.get('', async (req, res, next) => {
    try {
        res.json(await Actor.scope(req.query.scope).findAll());
    } catch (e) {
        next(e);
    }
});

actors.get('/:id', async (req, res, next) => {
    try {
        const actor = await Actor.scope(req.query.scope).findByPk(req.params.id);
        res.json(actor);
    } catch (e) {
        next(e);
    }
});

actors.put('/:id', async (req, res, next) => {
    try {
        await Actor.update(req.body, { where: { id: req.params.id } });
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

actors.get('/:id/movies', async (req, res, next) => {
    try {
        await Actor.findByPk(req.params.id).then((actor) => {
      actor?.movies?.forEach((movie) => {
          console.log(`Movie ${movie.title} found for actor ${actor.firstName}`);
      });
        });
        res.sendStatus(418);
    } catch (e) {
        next(e);
    }
});
