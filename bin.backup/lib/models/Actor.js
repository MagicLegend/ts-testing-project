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
const Movie_1 = require("./Movie");
const MovieActor_1 = require("./MovieActor");
let Actor = class Actor extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Actor.prototype, "firstName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Actor.prototype, "lastName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Actor.prototype, "birthday", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => Movie_1.default, () => MovieActor_1.default),
    __metadata("design:type", Array)
], Actor.prototype, "movies", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Actor.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Actor.prototype, "updatedAt", void 0);
Actor = __decorate([
    sequelize_typescript_1.Scopes({
        movies: {
            include: [() => Movie_1.default],
        },
    }),
    sequelize_typescript_1.Table
], Actor);
exports.default = Actor;
//# sourceMappingURL=Actor.js.map