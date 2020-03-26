"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const app_1 = require("./app");
const seq_1 = require("./seq");
const A_1 = require("./models/A");
const T_1 = require("./models/T");
const port = process.env.PORT || 3001;
(() => __awaiter(this, void 0, void 0, function* () {
    seq_1.sequelize.addModels([A_1.default, T_1.default]);
    yield seq_1.sequelize.sync({ force: true });
    http_1.createServer(app_1.default)
        .listen(port, () => console.log(`Server running on port ${port}`));
}))();
//# sourceMappingURL=server.js.map