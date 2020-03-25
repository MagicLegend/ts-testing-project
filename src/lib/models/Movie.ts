import {
    BelongsToMany, Column, CreatedAt, Model, Scopes, Table, UpdatedAt,
} from 'sequelize-typescript';
import MovieActor from './MovieActor';
import Actor from './Actor';
import Genre from './Genre';
import MovieGenre from './MovieGenre';

@Scopes({
    cast: {
        include: [() => Actor],
    },
    genre: {
        include: [() => Genre],
    },
    full: {
        include: [() => Actor, () => Genre],
    },
})
@Table
export default class Movie extends Model<Movie> {
    @Column
    title!: string;

    @Column
    year!: number;

    @BelongsToMany(() => Actor, () => MovieActor)
    cast?: Actor[];

    @BelongsToMany(() => Genre, () => MovieGenre)
    genres?: Genre[];

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;
}
