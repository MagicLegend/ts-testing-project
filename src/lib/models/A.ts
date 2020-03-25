import {
    Table, Model, Column, BelongsTo, ForeignKey,
} from 'sequelize-typescript';
import { ValidationError } from 'sequelize/lib/errors';
import T from './T';

@Table({
    validate: {
        XORFields(this: A) {
            if (!this.a && !this.b) {
                throw new ValidationError('You have to specify either a or b');
            }
            if (this.a && this.b) {
                throw new ValidationError("You can't specify both a and b");
            }
        },
    },
    version: true,
})
export default class A extends Model<A> {
    @Column
    a?: string;

    @Column
    b?: string;

    @ForeignKey(() => T)
    @Column
    tId?: number;

    @BelongsTo(() => T)
    ts?: T;
}
