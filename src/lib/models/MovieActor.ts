import {
    Model, Column, Table, ForeignKey,
} from 'sequelize-typescript';
import Movie from './Movie';
import Actor from './Actor';

@Table
export default class MovieActor extends Model<MovieActor> {
    @ForeignKey(() => Movie)
    @Column
    movieId!: number;

    @ForeignKey(() => Actor)
    @Column
    actorId!: number;
}
