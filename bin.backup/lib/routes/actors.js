"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Actor_1 = require("../models/Actor");
const Movie_1 = require("../models/Movie");
const actors = express_1.Router();
exports.default = actors;
actors.post('/', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const actor = yield Actor_1.default.create(req.body);
        res.status(201).json(actor);
    }
    catch (e) {
        next(e);
    }
}));
actors.post('/:id/movies/:movieId', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        // await MovieActor.create({
        //   actorId: req.params['id'], movieId: req.params['movieId']
        // });
        const actor = yield Actor_1.default.findByPk(req.params.id);
        // const movie = await Movie.findByPk(req.params['movieId']);
        yield Movie_1.default.findByPk(req.params.movieId).then((movie) => __awaiter(this, void 0, void 0, function* () {
            if (movie) {
                if (actor) {
                    yield actor.$add('movie', movie);
                    const actor2 = yield Actor_1.default.findByPk(req.params.id, { include: [Movie_1.default] });
                    const movieOfActor2 = (yield actor2) ? .$get('movies') : ;
                    console.log(movieOfActor2);
                    // await Actor.update(actor, {where: {id: req.params['id']}});
                    res.sendStatus(418);
                }
            }
            else {
                res.sendStatus(404);
            }
        })).catch(() => {
            console.log('Oops');
            res.sendStatus(500);
        });
    }
    catch (e) {
        next(e);
    }
}));
actors.get('', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        res.json(yield Actor_1.default.scope(req.query.scope).findAll());
    }
    catch (e) {
        next(e);
    }
}));
actors.get('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const actor = yield Actor_1.default.scope(req.query.scope).findByPk(req.params.id);
        res.json(actor);
    }
    catch (e) {
        next(e);
    }
}));
actors.put('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield Actor_1.default.update(req.body, { where: { id: req.params.id } });
        res.sendStatus(200);
    }
    catch (e) {
        next(e);
    }
}));
actors.get('/:id/movies', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield Actor_1.default.findByPk(req.params.id).then((actor) => {
            actor ? .movies ? .forEach((movie) => {
                console.log(`Movie ${movie.title} found for actor ${actor.firstName}`);
            }) :  : ;
        });
        res.sendStatus(418);
    }
    catch (e) {
        next(e);
    }
}));
//# sourceMappingURL=actors.js.map