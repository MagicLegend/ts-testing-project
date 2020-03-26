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
const Genre_1 = require("./Genre");
let MovieGenre = class MovieGenre extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => Movie_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], MovieGenre.prototype, "movieId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Genre_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MovieGenre.prototype, "genre", void 0);
MovieGenre = __decorate([
    sequelize_typescript_1.Table
], MovieGenre);
exports.default = MovieGenre;
//# sourceMappingURL=MovieGenre.js.map