import {
    Table, Model, Column, Scopes, HasMany,
} from 'sequelize-typescript';
import A from './A';

@Scopes({
    a: {
        include: [() => A],
    },
})
@Table
export default class T extends Model<T> {
    @Column
    name!: string;

    @Column
    defaultCommand?: string;

    @Column
    requiredArguments?: string;

    @Column
    description?: string;

    @HasMany(() => A)
    as?: A[];
}
