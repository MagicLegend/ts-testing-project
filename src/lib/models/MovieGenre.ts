import {
    Model, Column, Table, ForeignKey,
} from 'sequelize-typescript';
import Movie from './Movie';
import Genre from './Genre';

@Table
export default class MovieGenre extends Model<MovieGenre> {
    @ForeignKey(() => Movie)
    @Column
    movieId!: number;

    @ForeignKey(() => Genre)
    @Column
    genre!: string;
}
