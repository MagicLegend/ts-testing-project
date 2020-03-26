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
const MovieActor_1 = require("./MovieActor");
const Actor_1 = require("./Actor");
const Genre_1 = require("./Genre");
const MovieGenre_1 = require("./MovieGenre");
let Movie = class Movie extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Movie.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Movie.prototype, "year", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => Actor_1.default, () => MovieActor_1.default),
    __metadata("design:type", Array)
], Movie.prototype, "cast", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => Genre_1.default, () => MovieGenre_1.default),
    __metadata("design:type", Array)
], Movie.prototype, "genres", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Movie.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Movie.prototype, "updatedAt", void 0);
Movie = __decorate([
    sequelize_typescript_1.Scopes({
        cast: {
            include: [() => Actor_1.default],
        },
        genre: {
            include: [() => Genre_1.default],
        },
        full: {
            include: [() => Actor_1.default, () => Genre_1.default],
        },
    }),
    sequelize_typescript_1.Table
], Movie);
exports.default = Movie;
//# sourceMappingURL=Movie.js.map