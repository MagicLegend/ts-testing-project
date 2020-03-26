"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const errors_1 = require("sequelize/lib/errors");
const T_1 = require("./T");
let A = class A extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], A.prototype, "a", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], A.prototype, "b", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => T_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], A.prototype, "tId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => T_1.default),
    __metadata("design:type", T_1.default)
], A.prototype, "ts", void 0);
A = __decorate([
    sequelize_typescript_1.Table({
        validate: {
            XORFields() {
                if (!this.a && !this.b) {
                    throw new errors_1.ValidationError('You have to specify either a or b');
                }
                if (this.a && this.b) {
                    throw new errors_1.ValidationError("You can't specify both a and b");
                }
            },
        },
        version: true,
    })
], A);
exports.default = A;
//# sourceMappingURL=A.js.map