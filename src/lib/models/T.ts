import {
    Table, Model, Column, Scopes, HasMany, BelongsToMany, Sequelize,
} from 'sequelize-typescript';
import A from './A';
import { I } from './i';
import * as P from './p';
import { sequelize } from '../seq';

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

    // @BelongsToMany(() => I, 'TI', 'tId', 'iId')
    // is?: any[];

    @BelongsToMany(() => P(sequelize, Sequelize), 'TP', 'tId', 'pId')
    ps?: any[];
}
